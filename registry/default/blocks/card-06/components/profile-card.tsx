import { Card } from "@/components/ui/card";
import { Heart, Video, Phone, MessageCircle, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-sm bg-neutral-900 border-0 rounded-3xl shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-4 flex-1">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-neutral-700">
              <Image src="/bg-gradient-notion.png" alt="Satya" width={80} height={80} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-white text-xl font-bold">Satya</h2>
                <span className="text-pink-400 text-lg">✓</span>
              </div>
              <p className="text-neutral-400 text-sm truncate">Co-Founder Sprrrint & Kree8</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-white font-semibold">5</span>
                <span className="text-neutral-500 text-sm">(35)</span>
              </div>
            </div>
          </div>

          {/* Heart Icon */}
          <button className="flex-shrink-0 w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center hover:border-neutral-500 transition-colors">
            <Heart className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Video Call - Pink */}
          <button className="w-14 h-14 rounded-2xl bg-pink-400 flex items-center justify-center hover:bg-pink-500 transition-colors flex-shrink-0">
            <Video className="w-6 h-6 text-white" strokeWidth={2} />
          </button>

          {/* Phone */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0 border border-neutral-700">
            <Phone className="w-6 h-6 text-neutral-500" strokeWidth={2} />
          </button>

          {/* Message */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0 border border-neutral-700">
            <MessageCircle className="w-6 h-6 text-neutral-500" strokeWidth={2} />
          </button>

          {/* Chat */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0 border border-neutral-700">
            <MessageSquare className="w-6 h-6 text-neutral-500" strokeWidth={2} />
          </button>

          {/* Payment */}
          <button className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors flex-shrink-0 border border-neutral-700">
            <Zap className="w-6 h-6 text-neutral-500" strokeWidth={2} />
          </button>
        </div>
      </div>
    </Card>
  );
}
