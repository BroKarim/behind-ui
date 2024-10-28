import React, { forwardRef, useState, RefCallback, useRef } from "react";
import IconButton from "./ui/icon-button";
import { Paperclip, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";
import { SendButton } from "./send-button";

interface SuggestComponentsProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement> | undefined;
  messageRef?: RefCallback<HTMLDivElement> | undefined;
  scrollRef?: RefCallback<HTMLDivElement> | undefined;
  showChat?: boolean;
  chatStarted?: boolean;
  isStreaming?: boolean;
  //   messages?: Message[];
  enhancingPrompt?: boolean;
  promptEnhanced?: boolean;
  input?: string;
  handleStop?: () => void;
  sendMessage?: (event: React.UIEvent, messageInput?: string) => void;
  handleInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  enhancePrompt?: () => void;
  onSend?: (message: string) => void;
}

const SuggestComponents = forwardRef<HTMLDivElement, SuggestComponentsProps>(({ input = "", onSend, isStreaming = false, handleStop }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message);
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  return (
    <>
      <div className={cn(" relative flex h-full w-full items-center justify-center overflow-hidden")}>
        <div className="flex  h-full justify-center  pt-6 ">
          {/* check lagi */}
          <div className={cn(" relative mx-auto w-full max-w-[80rem]")}>
            {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500" /> */}
            <div className="relative flex rounded-lg border-2 border-black p-1 dark:border dark:border-gray-600 dark:bg-[#141414]">
              <BorderBeam />
              <textarea
                className="relative h-[100px] min-h-[100px] w-[30rem] resize-none rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none dark:text-white"
                placeholder="Drop a link or description of the hero section you’d like us to add."
              />

              {message.trim() && <SendButton show={input.length > 0 || isStreaming} isStreaming={isStreaming} onClick={handleSend} />}
              <div className="absolute bottom-3 left-3 flex space-x-2">
                <button className="text-gray-400 hover:text-gray-300">
                  <Paperclip className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SuggestComponents;
