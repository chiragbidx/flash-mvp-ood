"use client";

import { Button } from "@/components/ui/button";

export default function NewCampaignClient() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          New Campaign
        </h1>
        <p className="text-muted-foreground text-lg">
          Begin designing your email campaign. Add a name, audience, and content to get started.
        </p>
      </header>
      <div className="border bg-muted/70 rounded-xl py-10 px-8 flex flex-col items-center justify-center">
        <p className="mb-6">Campaign creation will be available soon.</p>
        <Button disabled>
          Save Campaign
        </Button>
      </div>
    </section>
  );
}