# 🎨 Nobd — Design & Development Standards

This document defines the **UI, UX, and development conventions** for the Nobd application.  
It ensures every new feature, page, or component adheres to consistent design language, code style, and folder structure.

---

## 🧭 Project Overview

**Nobd (نَبْض)** is a Muslim routine tracker built with **React (Vite) + Tailwind + ShadCN**.  
The design language should convey **warmth, simplicity, spirituality, and modern calm** — guiding users toward mindfulness and balance.

---

## 📁 1. Folder & File Structure

### ✅ General Rules

-   **All folder and file names must be lowercase and use kebab-case** (e.g., `salah-tracker`, `theme-toggle.tsx`).
-   **Each React component resides in its own folder** when it has style or logic files.
-   Use **index.ts** for exporting grouped components.

### 📦 Folder Layout

```
src/
├── assets/ # Static icons, images
├── components/ # Reusable UI components
│ ├── layout/ # Header, Nav, Footer
│ ├── ui/ # Base UI elements (Button, Card, Input)
│ ├── sections/ # Composed sections (Hero, TrackerSummary)
│ └── icons/ # SVG icons or Lucide imports
├── pages/ # Route-based pages
│ ├── home/
│ ├── salah/
│ ├── adhkar/
│ ├── dunya/
│ └── about/
├── routes/ # React Router setup
├── hooks/ # Custom React hooks
├── context/ # Global providers (theme, state)
├── utils/ # Helper functions
├── styles/ # Tailwind or global styles
├── App.tsx
└── main.tsx

```

---

## ⚙️ 2. Component Conventions

### ✅ Function Style

-   Use **React Arrow Function Components** exclusively:

    ```tsx
    const Button = () => {
        return <button>Click</button>
    }
    export default Button
    ```

-   **Props interfaces** use PascalCase:

    ```tsx
    interface ButtonProps {
        label: string
        onClick?: () => void
    }
    ```

-   **Component names use PascalCase** (e.g., `ThemeToggle`, `SalahCard`).

-   **Hook names use camelCase** and must start with `use` (e.g., `useLocalStorage`).

---

## 🎨 3. Color Palette & Theme

### 🌞 Light Mode

| Token          | Hex       | Use                 |
| -------------- | --------- | ------------------- |
| `--background` | `#FAF7F2` | App background      |
| `--surface`    | `#FFFFFF` | Cards, panels       |
| `--primary`    | `#A67C52` | Buttons, highlights |
| `--secondary`  | `#E4D5C7` | Soft accents        |
| `--text`       | `#3B2F2F` | Primary text        |

### 🌙 Dark Mode

| Token          | Hex       | Use                 |
| -------------- | --------- | ------------------- |
| `--background` | `#1E1A16` | App background      |
| `--surface`    | `#2B241F` | Cards, panels       |
| `--primary`    | `#CBA679` | Buttons, highlights |
| `--secondary`  | `#4A3B31` | Accents             |
| `--text`       | `#EAE0D5` | Text                |

> These colors reflect **warm earth tones** — beige, brown, sand, cream — to preserve spiritual calmness and warmth.

### 🧩 Theme System

-   Implemented using **ShadCN Theme Provider**.
-   Use **theme tokens** instead of raw hex in Tailwind via CSS variables.
-   Store theme preference in `localStorage` and auto-detect system theme.

---

## 🧠 4. Typography

| Element     | Font Size       | Weight | Line Height | Tailwind Class           |
| ----------- | --------------- | ------ | ----------- | ------------------------ |
| H1 (titles) | 1.875rem (30px) | 700    | 1.2         | `text-3xl font-bold`     |
| H2          | 1.5rem (24px)   | 600    | 1.3         | `text-2xl font-semibold` |
| H3          | 1.25rem (20px)  | 500    | 1.4         | `text-xl font-medium`    |
| Body text   | 1rem (16px)     | 400    | 1.6         | `text-base`              |
| Small text  | 0.875rem (14px) | 400    | 1.5         | `text-sm`                |

### Font Family

-   Use Tailwind’s default **Inter or system-ui** stack.
-   No custom fonts for MVP0–MVP1 (keep bundle size small).

---

## 📏 5. Spacing & Layout

| Scale | Pixels | Tailwind     |
| ----- | ------ | ------------ |
| XS    | 4px    | `p-1`, `m-1` |
| SM    | 8px    | `p-2`, `m-2` |
| MD    | 16px   | `p-4`, `m-4` |
| LG    | 24px   | `p-6`, `m-6` |
| XL    | 32px   | `p-8`, `m-8` |

-   **Mobile-first:** all designs start with mobile viewports (≤ 480px).
-   Use **grid and flexbox** layouts with even gaps (`gap-4` or `gap-6`).
-   Keep UI centered with `max-w-md mx-auto` for main containers.

---

## 🧭 6. Navigation

-   Mobile: bottom navigation bar with 5 icons (Home, Salah, Adhkar, Dunya, About).
-   Desktop: top navigation bar with the same items.
-   Active link uses `text-primary` and a subtle background highlight.
-   Use **Lucide-react** icons; maintain icon size 24x24 (`w-6 h-6`).

---

## 🧱 7. Card Components

-   Use ShadCN `Card` component with `rounded-2xl shadow-sm p-4`.
-   Background: `bg-surface`, text: `text-text`.
-   For placeholder components, text should read:
    _“This feature will be added in a later MVP.”_

---

## 🌗 8. Theme Toggle

-   Use ShadCN `ThemeToggle` component.
-   Place toggle in the **top-right corner** of the navbar.
-   Toggle state persists via `localStorage`.

---

## 🧩 9. Buttons

-   Use ShadCN’s `Button` component, customized with the warm palette.
-   Button sizes:

    -   `sm`: `h-8 px-3 text-sm`
    -   `md`: `h-10 px-4 text-base`
    -   `lg`: `h-12 px-6 text-lg`

-   Default button radius: `rounded-2xl`.
-   Hover state slightly brightens background (`brightness-110`).

---

## 🧭 10. Routing & Navigation

-   Use **React Router DOM v6**.
-   Route structure should follow:

    ```
    /         → Home
    /salah    → Salah Tracker
    /adhkar   → Adhkar Tracker
    /dunya    → Dunya Habits
    /about    → About
    ```

-   Route definitions live in `src/routes/AppRouter.tsx`.

---

## 🔄 11. State Management

-   Use **Zustand** (added in MVP1 or MVP2).
-   Global store only for theme and checklist data.
-   Avoid unnecessary global states (prefer component state first).

---

## 🧠 12. Icons

-   All icons imported from `lucide-react`.
-   Size: 24x24px (`w-6 h-6`).
-   Color: follows text color (`text-text` or `text-primary`).
-   Maintain consistent visual weight and spacing between icon and label (`gap-2`).

---

## 🔤 13. Text & Content Rules

-   Use **sentence case** for UI labels (e.g., “Morning Adhkar” not “MORNING ADHKAR”).
-   Button labels should be **concise verbs** (e.g., “Add”, “Save”, “Start”).
-   Avoid exclamation marks in interface text.

---

## 🧱 14. Responsive Guidelines

-   Use **Tailwind’s responsive breakpoints**:

    -   `sm`: 640px
    -   `md`: 768px
    -   `lg`: 1024px

-   Avoid horizontal scrolling.
-   Cards wrap with `grid grid-cols-1 sm:grid-cols-2`.

---

## ⚙️ 15. Accessibility

-   Use semantic HTML.
-   Buttons must have `aria-label` if icon-only.
-   Color contrast must pass WCAG AA for text and backgrounds.

---

## 🧩 16. Component Import Rules

-   Import absolute paths via `@/components/...`.
-   Group imports: React, third-party, local.
-   No default exports except for component entry points.

---

## 🧠 17. Commit & Code Style

-   Follow conventional commits (`feat:`, `fix:`, `chore:`, `docs:`).
-   Always format with Prettier before commits.
-   No `console.log` in committed code.

---

## 🧭 18. Design Tokens (Tailwind Config)

-   Define colors, spacing, border radius, and typography tokens in `tailwind.config.js`.
-   Reuse variables (`theme.extend.colors`) to ensure consistent color palette.

---

## 🧱 19. UI Behavior Rules

-   **Animations:** subtle only. Use `transition-all duration-200 ease-in-out`.
-   **Shadows:** `shadow-sm` only for cards and navbars.
-   **Hover states:** light elevation or brightness only — no color flashes.

---

## 🧾 20. Documentation

-   Each new component must include a short comment block at the top:

    ```tsx
    /**
     * Component: SalahCard
     * Purpose: Display Salah tracking state
     * Added: MVP1
     */
    ```

---

## ✅ Summary

This design document acts as a **contract** for UI structure, style, and development patterns.
Lovable.dev should refactor all existing components and pages to align with these conventions to ensure visual and code consistency across all future MVPs.

---

_Updated: October 2025_

_Author: Nobd Development Team_

```

```
