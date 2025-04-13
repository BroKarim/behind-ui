import { USER } from "../data/USER";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export function Bio() {
  return (
    <header className="relative mt-2">
      <div className=" border-grid flex items-center border-x">
        <div className="border-grid shrink-0 border-r">
          <div className="mx-[2px] my-[3px]">
            <AvatarBio
              size={128}
              className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="border-grid border-t">
            <h1 className="font-heading flex items-center pl-4 text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <BadgeCheck />
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

function AvatarBio({
  className,
  size = 128,
  priority = true,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      className={className}
      alt={`${USER.displayName}'s avatar`}
      src="https://github.com/shadcn.png"
      width={size}
      height={size}
      quality={100}
      priority={priority}
    />
  );
}
