import type { Config } from "tailwindcss";

export default {
  presets: [require("../../tailwind.config.ts")],
  content: [
    "!../../packages/**/node_modules/**/*",
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.tsx",
    "../../packages/views/**/*.tsx",
  ],
  theme: { extend: {} },
} satisfies Config;
