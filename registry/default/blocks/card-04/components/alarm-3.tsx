//ref : https://dribbble.com/shots/25347673-Alarm
// code bg google

"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import type { WheelPickerOption } from "@/components/wheel-picker";
import { WheelPicker, WheelPickerWrapper } from "@/components/wheel-picker";
import { Button } from "@/components/ui/button";
import { Music, Bell, Repeat, X, Check } from "lucide-react";

const createArray = (length: number, add = 0): WheelPickerOption[] =>
  Array.from({ length }, (_, i) => {
    const value = i + add;
    return {
      label: value.toString().padStart(2, "0"),
      value: value.toString(),
    };
  });

const hourOptions = createArray(24);
const minuteOptions = createArray(60);

export default function MinimalistAlarmPicker() {
  const [hour, setHour] = useState<string>("09");
  const [minute, setMinute] = useState<string>("50");

  return (
    <div className=" min-w-sm p-6 ">
      <div className="relative flex justify-center items-center">
        <Card className="w-full rounded-2xl p-6 bg-[#0F0F10] border-none shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
          {/* Wheel Picker Utama */}
          <div className="w-full max-w-xs">
            <WheelPickerWrapper className="!bg-transparent !border-none !shadow-none h-64">
              {/* Jam */}
              <div className="inline-block align-top w-1/2">
                <WheelPicker
                  options={hourOptions}
                  infinite
                  value={hour}
                  onValueChange={(val: string) => setHour(val)}
                  classNames={{
                    optionItem: "text-4xl text-gray-700 font-bold",
                    highlightWrapper: "!bg-[#1a2e1a] text-[#9fefa1] rounded-l-2xl",
                  }}
                />
              </div>
              {/* Menit */}
              <div className="inline-block align-top w-1/2">
                <WheelPicker
                  options={minuteOptions}
                  infinite
                  value={minute}
                  onValueChange={(val: string) => setMinute(val)}
                  classNames={{
                    optionItem: "text-4xl text-gray-700 font-bold",
                    highlightWrapper: "!bg-[#1a2e1a] text-[#9fefa1] rounded-r-2xl",
                  }}
                />
              </div>
            </WheelPickerWrapper>
          </div>

          {/* Opsi (Hanya Visual) */}
          <div className="w-full flex justify-around items-start text-center mb-16">
            <div className="flex flex-col items-center gap-2 text-sm">
              <Music size={18} className="text-gray-400" />
              <span className="font-semibold text-white">Sound</span>
              <span className="text-xs text-gray-500">Ocean</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Bell size={18} className="text-gray-400" />
              <span className="font-semibold text-white">Snooze</span>
              <span className="text-xs text-gray-500">Every 10 Min</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Repeat size={18} className="text-gray-400" />
              <span className="font-semibold text-white">Repeat</span>
              <span className="text-xs text-gray-500">Mo</span>
            </div>
          </div>

          {/* Footer Aksi */}
          <div className="w-full max-w-md gap-2 flex justify-between items-center">
            <Button size="icon" className="bg-[#1c1c1c] hover:bg-gray-800 rounded-full h-8 w-8" aria-label="Cancel">
              <X size={18} className="text-gray-400" />
            </Button>
            <span className="text-sm   font-semibold tracking-widest text-gray-500">CHOOSE TIME</span>
            <Button size="icon" className="bg-[#9fefa1] hover:bg-[#8cdb8e] text-black rounded-full h-8 w-8" aria-label="Confirm Time">
              <Check size={18} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
