import PageHeaderWrapper from "@/components/page-header-wrapper"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PageHeaderWrapper>
        <h1 className="text-xl font-semibold">Pricing Plans</h1>
        <Button size="sm">+ New Pricing Plan</Button>
      </PageHeaderWrapper>

      <div className="p-6">Pricing</div>
    </div>
  )
}
