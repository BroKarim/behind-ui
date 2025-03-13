import { type Registry } from "./schema";
import { z } from "zod";

import { examples } from "./registry-examples";

export const registry = {
  name: "behindui",
  homepage: "https://behindui.com",
  items: [...examples],
} satisfies Registry;
