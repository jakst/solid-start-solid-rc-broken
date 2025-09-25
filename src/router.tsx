import { createRouter, rewriteBasepath } from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
	const router = createRouter({
		basepath: "/app",
		rewrite: rewriteBasepath({ basepath: "/app" }),
		routeTree,
		scrollRestoration: true,

		defaultNotFoundComponent: () => <h1>404 - Not Found!</h1>,
	})

	return router
}
