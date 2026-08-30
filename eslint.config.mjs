import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "backstop_data/**",
    "background-analysis/**",
    "references/**",
    "responsive-analysis/**",
    "scripts/**",
    "tools/**",
    "next-env.d.ts",
  ]),
]);
