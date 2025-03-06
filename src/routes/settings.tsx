import { createFileRoute } from "@tanstack/react-router"

import { Copy } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import PageHeaderWrapper from "@/components/page-header-wrapper"

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
})

export default function RouteComponent() {
  const [activeApiKeys, setActiveApiKeys] = useState<string[]>([])
  const [stripeEnabled, setStripeEnabled] = useState(false)
  const [cryptoEnabled, setCryptoEnabled] = useState(true)

  const generateApiKey = () => {
    // In a real app, this would call an API to generate a key
    const newKey = `nvm_${Math.random().toString(36).substring(2, 15)}`
    setActiveApiKeys([...activeApiKeys, newKey])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, you might want to show a toast notification here
  }

  return (
    <div>
      <PageHeaderWrapper>
        <h1 className="text-xl font-semibold ml-4">Settings</h1>
        <Button size="sm">+ New Pricing Plan</Button>
      </PageHeaderWrapper>

      <div className="p-6 space-y-4">
        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              {/* Left side */}
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold mb-2">API Keys</h2>
                <p className="text-muted-foreground mb-4 text-xs">
                  Create an API key to integrate with the Nevermine <br />
                  ecosystem and start interacting with blockchain <br />
                  accounts and the marketplace
                </p>
                <p className="text-xs text-muted-foreground ">
                  You can find more in the{" "}
                  <a href="#" className="underline">
                    documentation
                  </a>
                  .
                </p>
              </div>

              {/* Right side */}
              <div className="md:w-1/2 flex flex-col items-start justify-start">
                {activeApiKeys.length === 0 ? (
                  <p className="mb-4 text-muted-foreground text-xs">
                    You don&apos;t have any active API Keys
                  </p>
                ) : (
                  <div className="mb-4 w-full">
                    {activeApiKeys.map((key, index) => (
                      <div
                        key={index}
                        className="mb-2 p-2 border rounded flex justify-between"
                      >
                        <span className="font-mono">{key}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(key)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="outline" onClick={generateApiKey}>
                  Generate API Key
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              {/* Left side */}
              <div className="md:w-1/2">
                <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                <p className="text-muted-foreground text-xs">
                  Select your preferred payment method for transactions
                </p>
              </div>

              {/* Right side */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <p className="text-xstext-muted-foreground mb-4 text-xs">
                    These are the payment methods that you accept for receiving{" "}
                    <br />
                    payments from your users. You can choose both if preferred.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-violet-500 text-white h-12 w-12 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold">S</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Stripe</h3>
                        <p className="text-muted-foreground text-xs">
                          Enable fiat payments through Stripe
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={stripeEnabled}
                      onCheckedChange={setStripeEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-black text-white h-12 w-12 rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4L4 8L12 12L20 8L12 4Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 16L12 20L20 16"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 12L12 16L20 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Crypto</h3>
                        <p className="text-muted-foreground text-xs">
                          Accept payments in crypto and interact seamlessly with
                          blockchain transactions
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={cryptoEnabled}
                      onCheckedChange={setCryptoEnabled}
                    />
                  </div>
                </div>

                {cryptoEnabled && (
                  <div className="mt-4 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      When using crypto payments, your transactions are handled
                      through your Smart Contract Account
                    </p>

                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <div>
                        <h4 className="font-medium">Smart Contract Account</h4>
                        <p className="text-sm text-muted-foreground">
                          Used for transactions on the blockchain. Transfer
                          tokens to this address for payments
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="text-sm">0x7s4345...f722cCd</code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard("0x7s4345...f722cCd")}
                        >
                          Copy <Copy className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <div>
                        <h4 className="font-medium">Browser Account</h4>
                        <p className="text-sm text-muted-foreground">
                          Created and controlled by your credentials used to log
                          in
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <code className="text-sm">0x7s4345...f722cCd</code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard("0x7s4345...f722cCd")}
                        >
                          Copy <Copy className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
