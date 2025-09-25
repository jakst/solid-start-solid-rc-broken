import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/sub")({
	component: RouteComponent,
})

function RouteComponent() {
	return <h1>Hello "/sub"!</h1>
}
