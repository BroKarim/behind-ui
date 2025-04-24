import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { BaseColor } from "@/registry/registry-base-colors";
import { Style } from "@/registry/registry-styles";

type Config = {
  style: Style["name"];
  theme: BaseColor["name"];
  radius: number;
  font: "sans" | "serif" | "mono" | "roboto";
};

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
  font: "sans",
});

export function useConfig() {
  return useAtom(configAtom);
}
