import { JSX } from "react";

export function IntroItem({
  icon,
  content,
  href,
}: {
  icon: JSX.Element;
  content: React.ReactNode;
  href?: string;
}) {
  const isLink = !!href;

  return (
    <div className="flex items-center gap-4  text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground">
      {icon}

      <p className="text-balance">
        {isLink ? (
          <a
            className="underline-offset-4 hover:underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
