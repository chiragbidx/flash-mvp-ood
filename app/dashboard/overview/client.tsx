"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function OverviewClient() {
  return (
    <section className="space-y-8">
      <header>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard Overview
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Track your latest campaigns and audience growth at a glance.
        </p>
      </header>
      <div className="border bg-muted/70 rounded-xl py-10 px-8 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-2">Welcome to MailForge</h2>
        <p className="mb-4">
          Get started by creating your first campaign or importing your contact list.
        </p>
        <Button asChild>
          <Link href="/dashboard/campaigns/new">Create Campaign</Link>
        </Button>
      </div>
      <div className="mt-8 text-center text-muted-foreground">
        <p>No data yet. Start by creating your first campaign.</p>
      </div>
    </section>
  );
}