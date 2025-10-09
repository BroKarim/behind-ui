"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "./button";
import { X } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function UploadMedia() {
  const [mediaFiles, setMediaFiles] = useState<(File | null)[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setMediaFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const removeFile = (index: number) => {
    const newFiles = [...mediaFiles];
    newFiles.splice(index, 1);
    setMediaFiles(newFiles);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card className="rounded-2xl p-6 bg-[#0F0F10] border-none shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
        <h3 className="text-lg font-semibold text-white mb-4">Upload Media</h3>

        <label htmlFor="file-upload" className="group flex flex-col items-center justify-center w-full h-48 rounded-lg cursor-pointer bg-[#34343a] hover:bg-muted/50 transition-colors shadow-[inset_0_1px_rgb(255_255_255/0.15)]">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-[#5649fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-sm text-center text-muted-foreground group-hover:text-white">
              <span className="font-semibold">Choose images or videos</span> or drag & drop here
            </p>
            <p className="text-xs text-muted-foreground group-hover:text-white">JPG, JPEG, PNG, WEBP, MP4. Max 20 MB.</p>
          </div>
          <input id="file-upload" type="file" className="hidden" accept="image/jpeg,image/jpg,image/png,image/webp,video/mp4" multiple onChange={handleFileChange} />
        </label>

        {mediaFiles.length > 0 && (
          <ScrollArea className="w-full mt-4">
            <div className="flex w-max space-x-3 p-2">
              {mediaFiles.map((file, index) => {
                if (!file) return null;

                const isVideo = file.type.startsWith("video/");
                const previewURL = URL.createObjectURL(file);

                return (
                  <div key={index} className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg border border-border shadow-md">
                    {isVideo ? <video src={previewURL} className="h-full w-full object-cover" controls /> : <img src={previewURL} alt={`preview-${index}`} className="h-full w-full object-cover" />}

                    <Button aria-label="Remove file" shape="circle" size="tiny" onClick={() => removeFile(index)} className="absolute top-1 right-1 bg-red-600 text-white hover:bg-red-700">
                      <X size={12} />
                    </Button>
                  </div>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        )}
      </Card>
    </div>
  );
}
