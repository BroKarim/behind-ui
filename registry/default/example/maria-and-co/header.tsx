import Link from "next/link";

export function Header() {
  return (
    <header className="top-0 z-10 mx-auto flex w-full items-center justify-between p-4 font-mono md:absolute">
      <div className="hidden w-full px-8 md:mt-2 md:block">
        <ul className="flex w-full items-center justify-between gap-4">
          <li>
            <Link href="#" className="text-sm  font-medium">
              Assistance
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm  font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm  font-medium">
              Faq
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:text-center ">
        <Link className="font-serif text-2xl font-bold" href="/">
          Maria & Co.
        </Link>
      </div>

      <div className="w-full px-8 md:mt-2">
        <ul className="flex items-center justify-end gap-4 text-sm  font-medium  md:justify-between">
          <li>
            <Link href="#">Stores</Link>
          </li>
          <li>
            <Link href="#">Collection</Link>
          </li>
          <li>
            <Link href="#">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
