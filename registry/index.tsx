import { type Registry } from "./schema";
import { z } from "zod";

import { blocks } from "./registry-blocks";
import { lib } from "./registry-lib";
import { themes } from "./registry-themes";

export const registry = {
  name: "behindui",
  homepage: "https://behindui.com",
  items: [...blocks, ...lib, ...themes],
} satisfies Registry;
