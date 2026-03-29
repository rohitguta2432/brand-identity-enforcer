"use client";

import React from "react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals getting started.",
    features: [
      "Up to 3 projects",
      "1 GB storage",
      "Community support",
      "Basic analytics",
      "Single user",
    ],
    ctaLabel: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professionals and growing teams.",
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Priority email support",
      "Advanced analytics",
      "Up to 10 team members",
      "Custom integrations",
    ],
    ctaLabel: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited everything",
      "1 TB+ storage",
      "Dedicated account manager",
      "Enterprise analytics & reporting",
      "Unlimited team members",
      "Custom integrations & API access",
      "SSO & advanced security",
      "99.99% uptime SLA",
    ],
    ctaLabel: "Contact Sales",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingCards() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade at any
            time.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-lg ${
                tier.highlighted
                  ? "border-blue-600 ring-2 ring-blue-600"
                  : "border-gray-200"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="ml-1 text-base text-gray-500">/month</span>
                )}
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {tier.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
