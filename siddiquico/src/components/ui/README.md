# `components/ui` – shadcn-style UI components

This folder holds reusable UI primitives and composed components, following the same convention as [shadcn/ui](https://ui.shadcn.com/).

## Why use `/components/ui`?

- **Convention:** Many React/Next projects (and the shadcn CLI) expect shared UI in `components/ui`, so using it keeps the codebase familiar and tooling-friendly.
- **Separation:** Keeps app-specific components (e.g. `Header`, `Hero`) in `components/` and generic/design-system pieces in `components/ui`.
- **Copy-paste:** If you later add shadcn via `npx shadcn@latest init`, components will land here by default without moving files.

## Adding shadcn to this project (optional)

This project already uses **Tailwind CSS** and **TypeScript**. To add the full shadcn CLI and default theme:

```bash
npx shadcn@latest init
```

Then add components with:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

You can keep using custom components (like `pricing-interaction`) in this same `ui` folder alongside shadcn components.
