import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export function ComponentRenderer({ file }: { file: { path: string; type: string } }) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Extract the component path from the file path
    const pathParts = file.path.split("/");
    const exampleIndex = pathParts.indexOf("example");

    if (exampleIndex >= 0 && exampleIndex + 1 < pathParts.length) {
      const componentName = pathParts[exampleIndex + 1];

      // Dynamically import the component
      const importComponent = async () => {
        try {
          setIsLoading(true);
          // Use dynamic import with the componentName variable in scope
          const DynamicComponent = dynamic(() => import(`@/registry/default/example/${componentName}`).then((mod) => mod.default), { ssr: false });
          setComponent(() => DynamicComponent);
          setError(null);
        } catch (err) {
          console.error("Error loading component:", err);
          setError(`Failed to load component: ${componentName}`);
        } finally {
          setIsLoading(false);
        }
      };

      importComponent();
    } else {
      setError("Invalid file path format");
      setIsLoading(false);
    }
  }, [file.path]);

  // Use Next.js dynamic import to load the component
  if (error) return <div className="text-red-500">{error}</div>;
  if (isLoading) return <div className="rounded border border-gray-200 p-4">Loading component...</div>;
  if (!Component) return <div className="text-red-500">Component could not be loaded</div>;

  return (
    <div className="rounded border border-gray-200 p-4">
      <Component />
    </div>
  );
}
