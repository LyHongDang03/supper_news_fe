# CODEBASE.md - Supper News FE

> Documentation of project architecture, file dependencies, and technical standards.

---

## 🏗️ Architecture Overview

This project follows a **Clean Architecture** pattern using **Next.js 16 (App Router)** and **Tailwind CSS 4**.

- **Frontend**: React 19, Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (PostCSS)
- **State Management**: Zustand
- **Validation**: Zod
- **API Client**: Axios

---

## 📁 Directory Map

| Directory | Purpose |
| :--- | :--- |
| `src/app` | Routing, layouts, and global styles (Entry Points) |
| `src/components` | Shared UI components (Atomic Design preferred) |
| `src/constants` | App-wide constants, enums, and config |
| `src/hooks` | Reusable React hooks |
| `src/schemas` | Zod validation schemas for forms and API responses |
| `src/services` | API service layer (Axios instances, endpoints) |
| `src/stores` | Client-side state management (Zustand) |
| `src/types` | TypeScript interfaces and types |
| `src/utils` | Pure helper functions and formatters |

---

## 🔗 File Dependencies

| File | Depends On | Description |
| :--- | :--- | :--- |
| `src/app/layout.tsx` | `src/app/globals.css` | Root layout for the entire application |
| `src/app/page.tsx` | - | Main landing page (Supper News Home) |
| `next.config.ts` | - | Next.js configuration |
| `postcss.config.mjs` | `tailwindcss` | CSS processing configuration |

---

## 🛠️ Technical Standards

### 1. Naming Conventions
- **Components**: PascalCase (e.g., `NewsCard.tsx`)
- **Hooks**: camelCase starting with `use` (e.g., `useNews.ts`)
- **Services/Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `NewsItem.ts`)

### 2. Styling (Tailwind 4)
- Prefer utility classes over custom CSS.
- Use CSS variables in `globals.css` for theme colors.
- Syntax: `@import "tailwindcss";` in CSS files.

### 3. State Management
- Use **Zustand** for global UI state.
- Keep business logic in `services` or `hooks`, not directly in components.

---

## 🚦 Critical Flow
1. **Request** → `src/app/page.tsx`
2. **Logic** → `src/hooks` + `src/services`
3. **State** → `src/stores`
4. **UI** → `src/components`

---
*Last Updated: 13/04/2026*
