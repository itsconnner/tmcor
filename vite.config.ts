/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Yeyang Wang <autumnlikegirl@gmail.com>
 */

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
