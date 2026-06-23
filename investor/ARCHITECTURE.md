# 🏗️ Investor Dashboard Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     BADEKAKA MAIN WEBSITE                       │
│                        (index.html)                             │
│                                                                 │
│  Services Menu → "Investor Portal" → investor-dashboard.html   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│              INVESTOR DASHBOARD SYSTEM                          │
│                                                                 │
│  ┌─────────────────┐  ┌──────────────────────────────────────┐ │
│  │   SIDEBAR NAV   │  │      MAIN CONTENT AREA             │ │
│  │   (Fixed 280px) │  │   (Responsive, Fluid)             │ │
│  │                 │  │                                    │ │
│  │ [Profile Image] │  │  ┌────────────────────────────┐   │ │
│  │ John Investor   │  │  │ Header + Action Buttons   │   │ │
│  │                 │  │  └────────────────────────────┘   │ │
│  │ • Dashboard ●   │  │                                    │ │
│  │ • Investments   │  │  ┌────────────────────────────┐   │ │
│  │ • Farming       │  │  │ Content Cards/Tables      │   │ │
│  │ • Adverts       │  │  │ (Dynamic per page)        │   │ │
│  │ • Portfolio     │  │  └────────────────────────────┘   │ │
│  │ • Transactions  │  │                                    │ │
│  │ • Profile       │  │  ┌────────────────────────────┐   │ │
│  │ • Logout        │  │  │ Quick Actions             │   │ │
│  │                 │  │  └────────────────────────────┘   │ │
│  └─────────────────┘  └──────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Page Structure

```
Each Page:
┌───────────────────────────────────────────────────────────┐
│ DOCTYPE + Head (Meta, CSS Links)                          │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ Sidebar Navigation (Shared across all pages)       │  │
│ │ - Profile Section                                  │  │
│ │ - Nav Menu (7 items + logout)                      │  │
│ └─────────────────────────────────────────────────────┘  │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ Main Content Area                                   │  │
│ │                                                     │  │
│ │ ┌─────────────────────────────────────────────┐   │  │
│ │ │ Header (Title + Action Button)              │   │  │
│ │ └─────────────────────────────────────────────┘   │  │
│ │                                                     │  │
│ │ ┌─────────────────────────────────────────────┐   │  │
│ │ │ Dashboard Content (varies per page)         │   │  │
│ │ │ - Cards                                     │   │  │
│ │ │ - Tables                                    │   │  │
│ │ │ - Forms                                     │   │  │
│ │ │ - Grids                                     │   │  │
│ │ └─────────────────────────────────────────────┘   │  │
│ │                                                     │  │
│ └─────────────────────────────────────────────────────┘  │
│                                                           │
│ <script> Links (Shared JS)                               │
└───────────────────────────────────────────────────────────┘
```

## File Dependencies

```
investor/
│
├── investor-dashboard.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       └── js/investor-dashboard.js
│
├── investments.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── farming.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── portfolio.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── transactions.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── adverts.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── update-profile.html
│   └── Imports:
│       ├── style/investor-dashboard.css
│       ├── style/investor-pages.css
│       └── js/investor-dashboard.js
│
├── style/
│   ├── investor-dashboard.css (Shared layout + sidebar)
│   └── investor-pages.css (Page-specific components)
│
└── js/
    └── investor-dashboard.js (Shared functionality)
```

## Navigation Flow

```
                           investor-dashboard.html
                           (Main Dashboard)
                                    ↓
        ┌───────────────────────────┼───────────────────────────┐
        ↓                           ↓                           ↓
   investments.html          farming.html              portfolio.html
   (Investment List)         (Farm Projects)           (Portfolio Stats)
        ↓                           ↓                           ↓
        │◄──────────────────────────┼──────────────────────────►│
        │                           │                           │
        └───────────────────────────┼───────────────────────────┘
                                    ↓
        ┌───────────────────────────┼───────────────────────────┐
        ↓                           ↓                           ↓
   transactions.html        adverts.html          update-profile.html
   (Transaction History)    (Investment Adverts)  (Profile Management)
        │                           │                           │
        │◄──────────────────────────┼──────────────────────────►│
        │                           │                           │
        └───────────────────────────┴───────────────────────────┘
                                    ↓
                         Logout → index.html
```

## Data Components by Page

### Dashboard
```
┌─────────────────────────────────┐
│ Overview Cards (4 items)        │ - Total Invested
├─────────────────────────────────┤ - Active Investments
│ Recent Investments Table        │ - Expected Returns
├─────────────────────────────────┤ - Pending Transactions
│ Quick Action Cards (4 items)    │
└─────────────────────────────────┘
```

### Investments
```
┌─────────────────────────────────┐
│ Filter Controls                 │ - Search box
├─────────────────────────────────┤ - Status filter
│ Investment Cards Grid (4 items) │ - Crop type filter
│ Each card shows:                │
│ - Title & Status Badge          │
│ - Investment Details            │
│ - Progress Bar                  │
│ - Action Buttons                │
└─────────────────────────────────┘
```

### Farming
```
┌─────────────────────────────────┐
│ Farm Cards Grid (4 projects)    │
│ Each card shows:                │
│ - Farm Image/Icon               │
│ - Farm Name                     │
│ - Location                      │
│ - Min Investment, ROI, Duration │
│ - Action Buttons                │
└─────────────────────────────────┘
```

### Portfolio
```
┌─────────────────────────────────┐
│ Portfolio Summary Cards (4)      │ - Total Value
├─────────────────────────────────┤ - Total Invested
│ Diversification Cards (4)        │ - Total Gains
├─────────────────────────────────┤ - Pending Returns
│ Performance Table               │
└─────────────────────────────────┘
```

### Transactions
```
┌─────────────────────────────────┐
│ Filter Controls                 │ - Search, Date range
├─────────────────────────────────┤ - Transaction type
│ Transactions Table              │
│ Columns:                        │
│ - Date, Type, Description      │
│ - Amount, Balance, Status      │
└─────────────────────────────────┘
```

### Adverts
```
┌─────────────────────────────────┐
│ Advert Cards Grid (6 items)    │
│ Each card shows:                │
│ - Title & Category Badge        │
│ - Description                   │
│ - Location & Rating             │
│ - Action Buttons                │
└─────────────────────────────────┘
```

### Profile
```
┌─────────────────────────────────┐
│ Personal Info Form              │
├─────────────────────────────────┤
│ Address Form                    │
├─────────────────────────────────┤
│ Bank Information Form           │
├─────────────────────────────────┤
│ Investment Preferences Form     │
├─────────────────────────────────┤
│ Account Security Section        │ - Change Password
│                                 │ - Deactivate Account
└─────────────────────────────────┘
```

## Responsive Breakpoints

```
Desktop (1024px+)          Tablet (768-1024px)       Mobile (<768px)
┌─────────────────────┐    ┌──────────────────────┐   ┌──────────┐
│ [Sidebar 280px]     │    │ [Sidebar 260px]      │   │Sidebar→  │
│                     │    │                      │   │Navigation│
│ ┌─────────────────┐ │    │ ┌─────────────────┐  │   │(Horiz)   │
│ │ Main Content    │ │    │ │ Main Content    │  │   │          │
│ │ (Fluid)         │ │    │ │ (Adjusted)      │  │   │┌────────┐│
│ │ 2-4 Cols        │ │    │ │ 2 Cols          │  │   ││ Content││
│ │ Full Tables     │ │    │ │ Scrollable      │  │   ││ 1 Col  ││
│ │                 │ │    │ │                 │  │   │└────────┘│
│ └─────────────────┘ │    │ └─────────────────┘  │   └──────────┘
└─────────────────────┘    └──────────────────────┘
```

## Styling Architecture

```
investor-dashboard.css (Base + Layout)
├── CSS Variables (Colors, Shadows)
├── Base Styles (*, body)
├── Container Layout
├── Sidebar Styles
│   ├── Profile Section
│   └── Navigation Menu
├── Main Content Area
├── Header
├── Overview Cards
├── Tables
├── Quick Links
└── Responsive Breakpoints (3 levels)

investor-pages.css (Components)
├── Filter Section
├── Investment Cards
├── Farm Cards
├── Portfolio Cards
├── Transaction Tables
├── Advert Cards
├── Profile Forms
├── Buttons & Inputs
└── Responsive Adjustments
```

## State Management

```
Active State:
- nav-link.active → Highlight current page
- Update on page load via JavaScript
- Compare current filename with href

Hover States:
- Cards lift up (transform)
- Shadows increase
- Colors change
- Transitions smooth (0.3s)

Focus States:
- Input focus ring
- Outline removed
- Border color change
- Box shadow added
```

## Mobile Navigation Transformation

```
Desktop:
┌──────────────────────┐
│ [Logo] Nav Nav Nav   │ Sidebar
│ ─────────────────────│
│ Nav Item 1           │
│ Nav Item 2           │
└──────────────────────┘

Mobile:
┌──────────────────────┐
│ [Logo] Menu Toggle   │ Horizontal Nav
├──────────────────────┤
│ ◆  ◆  ◆  ◆  ◆  ◆   │ 6-item grid
│ ◆  ◆                 │ Below header
└──────────────────────┘
```

---

**This architecture ensures:**
✅ Consistent design across all pages
✅ Easy maintenance (shared CSS/JS)
✅ Scalable structure
✅ Responsive on all devices
✅ Professional appearance
✅ Fast loading times
✅ Clean code organization
