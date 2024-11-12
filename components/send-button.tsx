import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { SendHorizontal, Ban } from "lucide-react";

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
          disabled={!show}
        >
          <div className="text-lg">
            {!isStreaming ? (
              <SendHorizontal />
            ) : (
              <div className="stop-circle-bold">
                <Ban />
              </div>
            )}
          </div>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
