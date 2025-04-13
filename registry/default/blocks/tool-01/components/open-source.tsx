import { StarIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const OpenSource = async () => {
  return (
    <div className="flex h-full flex-col items-start justify-between gap-4 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-neutral-500">
          <StarIcon size={14} />
          <small>Open source</small>
        </div>
        <p className="text-xl font-semibold tracking-tight">
          Active as earned recognition from the developer community with{" "}
          <span className="text-orange-600">4000</span> stars,{" "}
          <span className="text-orange-600">1200</span> forks, and{" "}
          <span className="text-orange-600">40</span> open issues and{" "}
          <span className="text-orange-600">20</span> contributors.
        </p>
        <div className="flex -space-x-3 *:ring *:ring-background">
          <Avatar>
            <AvatarImage src="https://mynaui.com/avatars/avatar-01.jpg" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://mynaui.com//avatars/avatar-02.jpg" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://mynaui.com//avatars/avatar-03.jpg" />
          </Avatar>
        </div>
      </div>
      <a
        href="https://github.com/haydenbleasel/next-forge"
        className="inline-flex rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm"
      >
        Browse the source code
      </a>
    </div>
  );
};
