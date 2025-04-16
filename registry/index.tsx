import { type Registry } from "./schema";
import { z } from "zod";

import { blocks } from "./registry-blocks";
import { lib } from "./registry-lib";
import { themes } from "./registry-themes";
import { ui } from "./registry-ui";

export const registry = {
  name: "behindui",
  homepage: "https://behindui.xyz",
  items: [...blocks, ...lib, ...themes, ...ui],
} satisfies Registry;
