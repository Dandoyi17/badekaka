# Investor Dashboard - Badekaka

## 📋 Overview
The Investor Dashboard is a comprehensive web application designed for managing agricultural investments. It features a two-column layout with a fixed sidebar navigation and main content area.

## 📁 Project Structure

```
investor/
├── investor-dashboard.html      # Main dashboard homepage
├── investments.html             # View and manage investments
├── farming.html                # Browse farming projects
├── portfolio.html              # Track investment performance
├── transactions.html           # Transaction history
├── adverts.html                # Featured investment adverts
├── update-profile.html         # User profile management
│
├── style/
│   ├── investor-dashboard.css  # Main dashboard styles
│   └── investor-pages.css      # All page-specific styles
│
└── js/
    └── investor-dashboard.js   # Dashboard functionality
```

## 🎨 Features

### Dashboard Pages
1. **Dashboard** (investor-dashboard.html)
   - Overview cards with key metrics
   - Recent investments table
   - Quick action links
   - Profile section with investor info

2. **Investments** (investments.html)
   - List all investments as cards
   - Filter by status (Active, Pending, Completed)
   - Filter by crop type
   - Search functionality
   - Progress tracking per investment

3. **Farming** (farming.html)
   - Browse available farming projects
   - View project details (ROI, duration, min. investment)
   - Investment opportunities

4. **Portfolio** (portfolio.html)
   - Portfolio summary cards
   - Investment diversification breakdown
   - Performance tracking table
   - ROI percentages

5. **Transactions** (transactions.html)
   - Complete transaction history
   - Date range filtering
   - Transaction type filtering
   - Credit/Debit tracking
   - Balance information

6. **Adverts** (adverts.html)
   - Featured investment opportunities
   - Categorized adverts
   - Location and farmer information
   - Call-to-action buttons

7. **Update Profile** (update-profile.html)
   - Personal information form
   - Address management
   - Bank details
   - Investment preferences
   - Account security options

### Sidebar Navigation
- Profile image (rounded border)
- Investor name and role
- Navigation menu with icons
- Logout button
- Active state highlighting
- Responsive collapse on mobile

## 🎯 Design System

### Colors
```css
--primary-color: #2e7d32      /* Green */
--secondary-color: #66bb6a    /* Light green */
--accent-color: #1565c0       /* Blue */
--text-dark: #223126          /* Dark text */
--text-light: #666666         /* Light text */
--success: #4caf50            /* Success green */
--warning: #ffa726            /* Warning orange */
--danger: #ef5350             /* Danger red */
```

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 📱 Responsive Behavior

### Desktop
- Fixed sidebar (280px)
- Two-column layout
- Full-size cards and tables
- All navigation visible

### Tablet
- Sidebar width reduced (260px)
- Adjusted font sizes
- Grid columns adjust

### Mobile
- Sidebar converts to horizontal navigation bar
- Navigation items in grid layout
- Single column for content
- Hamburger-style navigation items

### Small Mobile
- Further reduced spacing
- Minimal padding
- Touch-friendly buttons
- Optimized for small screens

## 🔧 JavaScript Functionality

### Active Link Management
- Automatically highlights current page link
- Based on filename matching

### Button Interactions
- Primary buttons open forms/modals
- View buttons expand or navigate
- Form submission handling

### Smooth Navigation
- Anchor link smooth scrolling
- Page transitions

### Profile Interactions
- Click profile image to go to update-profile
- Profile form validation

## 📊 Data Display

### Cards Grid
- Responsive grid layout
- Auto-fit columns
- Hover animations
- Shadow effects

### Tables
- Scrollable on small screens
- Status badges
- Action buttons
- Hover states

### Progress Bars
- Visual investment progress
- Color-coded completion
- Percentage text

## 🎨 Styling Features

### Shadows
- `--shadow`: Subtle shadows
- `--shadow-lg`: Large shadows for depth

### Transitions
- 0.3s ease for most interactions
- Smooth transforms on hover
- Professional animations

### Borders
- Rounded corners (6-12px)
- Subtle border colors
- Active state indicators

## 📝 Form Elements

### Inputs
- Text inputs
- Email inputs
- Phone inputs
- Select dropdowns
- Textareas
- Date inputs

### Validation
- Required fields
- Focus states
- Error feedback
- Success states

## 🔐 Security Features

### Account Management
- Change password option
- Account deactivation
- Dangerous zone section
- Confirmation dialogs

## 🚀 Getting Started

1. Open `investor-dashboard.html` in a web browser
2. Click navigation links to switch between pages
3. All pages are self-contained and work independently
4. Test responsive design by resizing browser window
5. Try form submissions to see validation

## 📌 Integration Notes

- All pages share the same CSS and JS files
- Sidebar navigation is consistent across all pages
- Active states update automatically
- Forms are ready for backend integration
- Transaction data can be populated from database
- Investment cards display sample data

## 🎯 Future Enhancements

- Backend API integration
- Real-time data updates
- Chart.js for analytics
- Export to PDF functionality
- Email notifications
- Real-time notifications
- Advanced filtering options
- Investment comparison tools
- ROI calculators

## 📞 Support

For questions or issues with the Investor Dashboard, please contact the development team.

---
**Version**: 1.0  
**Last Updated**: June 2024  
**Status**: Production Ready
