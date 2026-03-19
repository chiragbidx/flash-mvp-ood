"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CampaignsClient() {
  return (
    <section className="space-y-8">
      <header>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            Campaigns
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Create, manage, and analyze your email marketing campaigns.
        </p>
      </header>
      <div className="border bg-muted/70 rounded-xl py-10 px-8 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-2">No campaigns yet.</h2>
        <p className="mb-4">
          Launch your first email campaign to reach your audience.
        </p>
        <Button asChild>
          <Link href="/dashboard/campaigns/new">Create Campaign</Link>
        </Button>
      </div>
    </section>
  );
}