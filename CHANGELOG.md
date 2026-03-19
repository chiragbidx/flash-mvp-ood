# Changelog

## 2024-06-12

### MailForge initial rebrand and dashboard foundation

- Brand and homepage content switched to MailForge (content/home.ts)
- Navbar updated to MailForge branding and improved feature/cta copy (components/layout/navbar.tsx)
- Auth flows (signin/signup/forgot/reset) fully rebranded for MailForge, updating helper texts and headings for email marketing use case
- Dashboard shell: sidebar, logo, and all references updated to MailForge branding (app/dashboard/layout.tsx, components/dashboard/sidebar-nav.tsx)
- Sidebar navigation: "Overview", "Campaigns", "Contacts" (components/dashboard/sidebar-nav.tsx)
- Dashboard main entrypoint now redirects to "/dashboard/overview"
- New core dashboard routes/pages:
  - /dashboard/overview: Welcome to MailForge with empty state and CTA
  - /dashboard/campaigns: Campaigns empty state, CTA to create campaign
  - /dashboard/campaigns/new: Simple new campaign start/disabled Save Campaign button
  - /dashboard/contacts: Contacts empty state and CTA
- All new dashboard client components include proper headings, empty states, and primary action buttons according to MailForge product vision
- Removes legacy feature/team/settings/account nav for MailForge MVP