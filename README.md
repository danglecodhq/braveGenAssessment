# BraveGen Assessment Test

## Architecture & Design Decisions

Project Setup:

- I am new to the React world, so I search for a good template [salvia-kit-dashboard-v5-react] and begin from there
  File structure
- src\pages

  - the pages are put in src\pages
    - named pages have there all physical file like settings.tsx
    - [section].tsx file is used for shared content pages. Inside you can file the map: name of the links and the page titles.
    - PageNotFound.tsx page is for navigation back to homepage if user get lost.

- src\pages\settings:

  - the pages at the settings level, previously there is 1 file for each page, but then I make use of the /settings/[section].tsx to reduce duplication in code.

- src\components  
   _ src\components: components used by top level pages  
   _ src\components\integrations : components used in integrations page.
- src\assets  
   \* provided image for logo and icons are put there.src\assets\icons and src\assets\logos

Sidebar Menu design:

- Make the logo stick to the Top
- the last menu Items stick to bottom
- orther items displayed in the middle of the bar

The main screen is Settings/Integrations with all the design details, this page will match the design picture.

- First level menu items all lead to the same Content page, only different in the title.
- Add a auto redirect for /Settings to land on /Settings/Integrations
- All other second level menu link lead to the same page, using [section.tsx] as the common template, it is better than add a new file in /settings/newpage.tsx for each item. Vite will help with routing in this case.

Icons:

- Icons folder is used to avoid duplication, reuse icon when matched. Named the icons sothat they don't tie to the paticular fontawesome icon, and can be changed easier

The Top Bar:

Routing: vite-plugin-pages is used to generate routes from the pages directory. The app calls useRoutes(routes) in App.tsx, so file-system routes (including dynamic routes like [section].tsx) become React Router v6 routes. Static page files take precedence over dynamic ones, so you can either keep per-page files as tiny wrappers or delete them to let the dynamic page handle routing.

Admin / Settings pages: A shared settings page pattern is used: a generic dynamic page ([section].tsx and [section].tsx) reads the URL segment via useParams() (or an optional sectionKey prop) and renders the shared Content component (Content.tsx) with a title mapping. The integrations page (integrations.tsx) is treated as a special, full-featured page (cards + table).

Settings Menu & Drawer: The settings navigation lives in SettingsMenu.tsx and its source data is settingsMenuData.tsx. The menu has been moved out of the settings.tsx parent and is only shown inside the persistent drawer implemented in DrawerMenu.tsx. The drawer implements a persistent pattern (similar to MUI's persistent drawer): it slides in/out by changing its width while pushing the page content, and the drawer's UI contains a close control and retains its own scroll region.

TopBar decisions: TopBar.tsx keeps high-level controls (tenant dropdown, active item indicator, CircleLinks, UserDropdownMenu). The drawer toggle was intentionally removed from the TopBar for a focused UX and relocated to the integrations page (a floating open control appears only when the drawer is closed).

Componentization & Reuse: UI pieces are small and reusable: Content (generic page shell), IntegrationCard, and IntegrationTable for integration-related UI. Prefer composition and prop-driven components: data (arrays of integrations, table rows) is passed into thin presentational components.

State & Context: Global layout state (sidebar open/close) is provided from Provider.tsx. The settings drawer was simplified to manage its open state locally in DrawerMenu to keep its behavior self-contained and avoid overloading global context—this makes the drawer component portable and easier to reuse or test.

Styling: Tailwind CSS is used for styling. Utility-first classes live inline in JSX, while tailwind.config.cjs and postcss.config.cjs control build-time behavior. Use the existing utilities and breakpoints for responsive layouts.

Tables & Data UI: Tables and data lists are implemented as presentational components (e.g., IntegrationTable.tsx) with the intent of keeping sorting, paging, and actions in the parent or a small hook if needed. This keeps the components testable and easy to refactor into remote-data variants.

Project Structure (important files)

Pages / Routing: pages (file-based routes via vite-plugin-pages) — check admin and settings for admin-related routes.
Layout & Shell: Layout.tsx, TopBar.tsx, Sidebar.tsx, and Provider.tsx.
Settings menu & drawer: SettingsMenu.tsx, settingsMenuData.tsx, DrawerMenu.tsx, integrations.tsx.
Shared page content: Content.tsx — used by many admin pages to provide a consistent page look and title.
Integration components: IntegrationCard.tsx, IntegrationTable.tsx.
How to add a new admin/settings page

Create src/pages/admin/settings/<slug>.tsx for a custom page, or
Rely on the dynamic route: add a mapping to the title map in [section].tsx and Content.tsx will render the title automatically for /admin/settings/<slug>.

## Getting started

In the project directory, you can run:

### `npm run dev`
