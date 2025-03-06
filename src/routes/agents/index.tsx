import PageHeaderWrapper from "@/components/page-header-wrapper"
import StepComponent from "@/components/step-component"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/agents/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PageHeaderWrapper>
        <h1 className="text-xl font-semibold">Agents</h1>
        <Button size="sm">+ New Agent</Button>
      </PageHeaderWrapper>

      <div className="p-6">
        <StepComponent />
      </div>
    </div>
  )
}
