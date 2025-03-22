import { useState } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

export function SelectAnimation() {
  const [open, setOpen] = useState(false);

  return (
    <Select onOpenChange={setOpen}>
      <SelectTrigger className=" w-[180px]flex ring-none gap-2 border-none bg-[#1a1a1a] hover:bg-[#3e3d3d] ">
        <Globe />
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <AnimatePresence>
        {open && (
          <SelectContent className="border-none bg-[#3e3d3d]  p-[1px] text-white">
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                height: "auto",
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                },
              }}
              style={{ transformOrigin: "center" }}
            >
              <SelectGroup>
                <SelectItem
                  className=" focus:bg-[#1a1a1a] focus:text-white"
                  value="eng"
                >
                  English
                </SelectItem>
                <SelectItem
                  className=" focus:bg-[#1a1a1a] focus:text-white"
                  value="france"
                >
                  Français
                </SelectItem>
                <SelectItem
                  className=" focus:bg-[#1a1a1a] focus:text-white"
                  value="spain"
                >
                  Español
                </SelectItem>
                <SelectItem
                  className=" focus:bg-[#1a1a1a] focus:text-white"
                  value="deutsch"
                >
                  Deutsch
                </SelectItem>
                <SelectItem
                  className=" focus:bg-[#1a1a1a] focus:text-white"
                  value="china"
                >
                  中国
                </SelectItem>
              </SelectGroup>
            </motion.div>
          </SelectContent>
        )}
      </AnimatePresence>
    </Select>
  );
}
