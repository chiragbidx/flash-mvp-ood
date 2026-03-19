"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users } from "lucide-react";

export default function ContactsClient() {
  return (
    <section className="space-y-8">
      <header>
        <div className="flex items-center gap-2 mb-2">
          <Users className="text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            Contacts
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Manage all your contact lists in one place for better targeting.
        </p>
      </header>
      <div className="border bg-muted/70 rounded-xl py-10 px-8 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-2">No contacts yet.</h2>
        <p className="mb-4">
          Import or add new contacts to start building your audience.
        </p>
        <Button asChild>
          <Link href="#">Add Contacts</Link>
        </Button>
      </div>
    </section>
  );
}