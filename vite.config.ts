import { cloudflare } from "@cloudflare/vite-plugin"
import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import { defineConfig } from "vite"
import viteSolid from "vite-plugin-solid"

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" } }) as any,
		tanstackStart(),
		viteSolid({ ssr: true }),
	],
})
