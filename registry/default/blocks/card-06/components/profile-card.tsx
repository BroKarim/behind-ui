import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";
export function ProfileCard() {
  return (
    <Card className="w-full max-w-sm bg-neutral-900 border-0 rounded-3xl shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
      <div className="p-6 fle flex-col w-full items-center justify-center">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-4 flex-1">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border border-neutral-700">
              <Image
                src="/bg-gradient-notion.png"
                alt="Satya"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="min-w-0">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-1 mb-1">
                  <h2 className="text-white text-2xl font-bold">Michel</h2>
                  <Icons.verivied className="w-6 h-6" />
                </div>
              </div>
              <p className="text-neutral-400 text-sm ">I built things</p>
              <div className="flex items-center gap-1 mt-2">
                <Icons.starss />
                <span className="text-white ">5</span>
                <span className="text-white">(100)</span>
              </div>
            </div>
          </div>

          {/* Heart Icon */}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Video Call - Pink */}
          <button className="w-14 h-14 rounded-2xl shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] bg-pink-400 flex items-center justify-center hover:bg-pink-500 transition-colors flex-shrink-0">
            <Icons.videoSolid className="w-7 h-7 text-white" />
          </button>

          {/* Phone */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0  shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
            <Icons.phoneCall className="w-8 h-8 text-neutral-500" />
          </button>

          {/* Message */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0  shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
            <Icons.message className="w-8 h-8 text-neutral-500" />
          </button>

          {/* Chat */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0  shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
            <Icons.conversation className="w-8 h-8 text-neutral-500" />
          </button>

          {/* Payment */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0  shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
            <Icons.calenderSolid className="w-8 h-8 text-neutral-500" />
          </button>
        </div>
      </div>
    </Card>
  );
}
