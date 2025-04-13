import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/BroKarim" },
  { label: "X", href: "https://x.com/BroKariim" },
  { label: "Thread", href: "https://www.threads.net/@brokariim" },
];

export const Footer = () => {
  return (
    <div className="my-20">
      <div className="text-fg-muted flex flex-col gap-2 border-t py-6 text-sm">
        <div className="text-fg-muted flex items-center gap-3 text-sm">
          <div>Find me on:</div>
          {links.map((link) => (
            <Link key={link.label} href={link.href} target="_blank">
              {link.label}
            </Link>
          ))}
        </div>
        <div>Or mail me at brokariim@gmail.com</div>
      </div>
    </div>
  );
};
