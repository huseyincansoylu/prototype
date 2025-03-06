import PageHeaderWrapper from "@/components/page-header-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowUpRight, ExternalLink, Info } from "lucide-react"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PageHeaderWrapper>
        <h1 className="text-xl font-semibold ml-4">Dashboard</h1>
        <Button size="sm">+ New Pricing Plan</Button>
      </PageHeaderWrapper>
      <div className="p-6 space-y-4">
        {/* Hero Section */}
        <div className="bg-slate-800 text-white rounded-sm">
          <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8 items-center py-4">
              {/* Left side - Placeholder for illustration */}
              <div className="bg-slate-700/50 rounded-lg p-12 text-center flex items-center justify-center min-h-[300px]">
                <p className="text-slate-400 text-xs">
                  *ideally here is a GIF/illustration showing the 3 main steps
                  in a super easy way
                </p>
              </div>

              {/* Right side - Steps */}
              <div className="space-y-6">
                <h1 className="text-xl font-semibold">
                  Connect your agents to Nevermined and start handling payments
                  with 3 easy steps:
                </h1>

                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-xs">
                    <span className="font-semibold">
                      Complete basic info and set a Pricing Plan
                    </span>
                    <span className="text-slate-300 block ml-6">
                      to define how users will pay for access
                    </span>
                  </li>
                  <li className="text-xs">
                    <span className="font-semibold">
                      Generate your credentials
                    </span>
                    <span className="text-slate-300 block ml-6">
                      and link your agent to Nevermined
                    </span>
                  </li>
                  <li className="text-xs">
                    <span className="font-semibold">
                      Test your agent by processing your first transaction
                    </span>
                    <span className="text-slate-300 block ml-6">
                      and see it in action!
                    </span>
                  </li>
                </ol>

                <Button variant="secondary" size="sm">
                  New Agent
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Revenue & Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue & Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-3xl font-bold">
                    <span>00,00 USD</span>
                    <span className="mx-2">·</span>
                    <span>00,00 ETH</span>
                  </div>
                  <p className="text-muted-foreground">
                    Once you connect your first agent and start monetizing, your
                    revenue and transactions will appear here in real time
                  </p>
                  <Button>New Agent</Button>
                </div>
              </CardContent>
            </Card>

            {/* Documentation & Resources */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CardTitle>Documentation & Resources</CardTitle>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Access helpful resources, community support, and step-by-step
                  tutorials to get the most out of Nevermined
                </p>

                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Documentation
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Tutorials
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Join Discord
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
