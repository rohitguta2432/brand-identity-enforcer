import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals getting started.",
    features: [
      "Up to 3 projects",
      "1 GB storage",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professionals and growing teams.",
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Upgrade to Pro",
    variant: "default" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "SSO & SAML",
      "Audit logs",
      "Custom SLA",
      "On-premise option",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    highlighted: false,
  },
]

export default function PricingCards() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Pricing</h1>
        <p className="text-sm text-muted-foreground">
          Choose the plan that works best for you and your team.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={tier.highlighted ? "border-primary" : undefined}
          >
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <span className="text-2xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {" "}/ {tier.period}
                </span>
              </div>
              <Separator />
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={tier.variant} className="w-full">
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
