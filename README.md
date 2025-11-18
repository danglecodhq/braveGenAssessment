# BraveGen Assessment Test

## Architecture & Design Decisions

**Project Setup:**

- I am new to the React world, so I search for a good template [salvia-kit-dashboard-v5-react] and begin from there

**File structure**

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

**Sidebar Menu design:**

- Make the logo stick to the Top
- the last menu Items stick to bottom
- orther items displayed in the middle of the bar

**The main screen** is Settings/Integrations with all the design details, this page will match the design picture.

- First level menu items all lead to the same Content page, only different in the title.
- Add a auto redirect for /Settings to land on /Settings/Integrations
- All other second level menu link lead to the same page, using [section.tsx] as the common template, it is better than add a new file in /settings/newpage.tsx for each item. Vite will help with routing in this case.

Icons:

- Icons folder is used to avoid duplication, reuse icon when matched. Named the icons sothat they don't tie to the paticular fontawesome icon, and can be changed easier

**The Top Bar:**

- Dropdown list for select tenant
  - The list of tenants can be filtered by typing in the textbox, the vertical scroll in the list is removed
  - Code file is `/components/TenantDropdown.tsx`
  - Tenants data is passed through from TopBar where it is used.
- TopBar decisions: TopBar.tsx keeps high-level controls (tenant dropdown, active item indicator, CircleLinks : 3 circles at top righ corner, UserDropdownMenu: the signOut feature, DL is first 2 letters of the user Name dang le)

**Routing:** vite-plugin-pages is used to generate routes from the pages directory. The app calls useRoutes(routes) in App.tsx, so file-system routes (including dynamic routes like [section].tsx) become React Router v6 routes. Static page files take precedence over dynamic ones, so you can either keep per-page files as tiny wrappers or delete them to let the dynamic page handle routing.

**Settings Menu:** The settings navigation lives in SettingsMenu.tsx and its source data is settingsMenuData.tsx. The menu only visilbe in Settings pages.

**Integrations Page:**

- The Cards - IntegrationCard.tsx
  - components/Integrations/IntegrationCard
  - data is in /pages/settings/integrations.tsx where the cards are used.
- The table component - IntegrationTable.tsx
  - search box: by integrations or name
  - data: src\components\Integrations\integrationTableData.ts [used AI to mocked up 500 rows]
  - pager
  - sort by integrations
  - badge styles
  - copied to clip board
  - popover to view instructions
  - 2 prompt boxes [delete/edit] sharing the same component, different styles.

**Drawer effect to the menu:**
Try making the menu side in from the left, the code is working but still under development in this branch: https://github.com/danglecodhq/braveGenAssessment/tree/drawerMenuIngerations

## Getting started

In the project directory, you can run:

### `npm run dev`
