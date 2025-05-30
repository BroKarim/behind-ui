import WindowHeader from "./window-header";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  height?: string;
}

export function Window({ title, children, height = "h-[800px]" }: WindowProps) {
  return (
    <div className={`w-full ${height} bg-background`}>
      <div className="max-w-7xl mx-auto h-full">
        <div className="rounded-sm shadow-2xl h-full overflow-hidden">
          <WindowHeader title={title} />
          <div className="relative h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
