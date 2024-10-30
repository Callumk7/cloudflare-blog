import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig({
	plugins: [remixCloudflareDevProxy(), !process.env.VITEST && remix(), tsconfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup.ts",
		exclude: [...configDefaults.exclude, "./e2e/**"],
	},
});
