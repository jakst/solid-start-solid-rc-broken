import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import { defineConfig } from "vite"
import viteSolid from "vite-plugin-solid"

export default defineConfig({
	base: "/app",
	server: {
		port: 3000,
	},
	plugins: [tanstackStart(), viteSolid({ ssr: true })],
})
