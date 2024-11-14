import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { SendHorizontal, Ban } from "lucide-react";
import { LoadingButton } from "./ui/loading-button";

interface SendButtonProps {
  show: boolean;
  isStreaming?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const customEasingFn = cubicBezier(0.4, 0, 0.2, 1);

export function SendButton({ show, isStreaming, onClick }: SendButtonProps) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          className="bg-accent-500 hover:brightness-94 color-white transition-theme absolute right-[22px] top-[18px] z-10 flex h-[34px] w-[34px] items-center justify-center rounded-md p-1"
          transition={{ ease: customEasingFn, duration: 0.17 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={(event) => {
            event.preventDefault();
            onClick?.(event);
          }}
          type="submit"
          disabled={!show || isStreaming}
        >
          <div className="text-lg">
            {!isStreaming ? (
              <SendHorizontal />
            ) : (
              <div className="stop-circle-bold">
                <LoaderIcon className="h-4 w-4 animate-spin" />
              </div>
            )}
          </div>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function LoaderIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  );
}
