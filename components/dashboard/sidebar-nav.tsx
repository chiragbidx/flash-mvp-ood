"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Mail,
  Users,
  List,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Overview", href: "/dashboard/overview", icon: Home },
      { label: "Campaigns", href: "/dashboard/campaigns", icon: Mail },
      { label: "Contacts", href: "/dashboard/contacts", icon: List },
    ],
  },
];

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  disabled,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/40 cursor-not-allowed select-none">
        <Icon className="size-4" />
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all font-medium ${
        isActive
          ? "bg-primary/20 text-primary shadow border-l-4 border-primary"
          : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

function NavSection({
  title,
  items,
  pathname,
  defaultOpen,
}: {
  title: string;
  items: NavItem[];
  pathname: string;
  defaultOpen: boolean;
}) {
  function checkActive(href: string) {
    return pathname === href;
  }

  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary/60 hover:text-primary transition-colors">
        {title}
        <ChevronDown className="size-3.5 transition-transform group-data-[state=closed]:-rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-1 space-y-0.5">
          {items.map((item) => (
            <NavLink
              key={item.label}
              {...item}
              isActive={checkActive(item.href)}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col">
      <nav className="flex-1 space-y-4">
        {sections.map((section) => (
          <NavSection
            key={section.title}
            title={section.title}
            items={section.items}
            pathname={pathname}
            defaultOpen
          />
        ))}
      </nav>
    </div>
  );
}