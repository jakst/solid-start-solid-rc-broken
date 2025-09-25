/// <reference types="vite/client" />

import { createRootRoute, Link, Outlet } from "@tanstack/solid-router"

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			<Link to="/">
				Go to routes/index.tsx with {"<"}Link{">"}
			</Link>
			<br />

			<a href="/app">
				Go to routes/index.tsx with {"<"}a{">"}
			</a>
			<br />

			<Link to="/sub">
				Go to routes/sub.tsx with {"<"}Link{">"}
			</Link>
			<br />
			<a href="/app/sub">
				Go to routes/sub.tsx with {"<"}a{">"}
			</a>
			<div style={{ "margin-top": "20px" }} />
			<Outlet />
		</>
	)
}
