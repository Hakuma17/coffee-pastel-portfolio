# Coffee Pastel Portfolio - Pages Documentation

This document provides comprehensive documentation for each page in the coffee-pastel portfolio project. The portfolio is built with Next.js 14 (App Router), supports bilingual content (Thai/English), and features a warm coffee-pastel design theme.

## Project Overview

### Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom coffee-pastel theme
- **Internationalization**: next-intl for Thai/English support
- **Layout**: Sidebar navigation (responsive) with main content area
- **Fonts**: Kanit (Thai) and Inter (Latin) from Google Fonts

### Design Theme
- **Colors**: Coffee browns, cream, latte, rose pastels
- **Typography**: Clean, readable fonts with generous spacing
- **Components**: Rounded corners, soft shadows, card-based layout
- **Accessibility**: Focus states, semantic HTML, proper contrast

---

## Page Documentation

### 1. Home Page (`/[locale]/page.tsx`)

**Route**: `/th` (Thai), `/en` (English)  
**Purpose**: Main landing page showcasing hero section, about summary, projects grid, and contact information.

#### Sections:
1. **Hero Section**
   - Displays portfolio title and subtitle
   - Sets the tone with coffee-pastel theme
   - Content sourced from `messages/[locale].json > hero`

2. **About Section**
   - Avatar image display (`/public/avatar.jpg`)
   - Brief personal introduction
   - Skills tags with rounded pill styling
   - Resume download buttons (Thai/English)
   - Content sourced from `messages/[locale].json > about`

3. **Projects Section**
   - Grid display of featured projects (3 items)
   - Uses `ProjectCard` component for consistent styling
   - Links to individual project detail pages
   - Content sourced from `messages/[locale].json > projects.items`

4. **Contact Section**
   - Email and location information
   - Map link with call-to-action button
   - Content sourced from `messages/[locale].json > contact`

#### Components Used:
- `Section` - Wrapper component for consistent spacing
- `ProjectCard` - Individual project display cards
- `Image` - Next.js optimized image component

#### Styling Features:
- Responsive grid layouts (mobile-first)
- Coffee-themed color scheme
- Soft shadows and rounded corners
- Hover states and transitions

---

### 2. About Page (`/[locale]/about/page.tsx`)

**Route**: `/th/about`, `/en/about`  
**Purpose**: Dedicated page for detailed personal information and skills.

#### Content:
- Same structure as home page about section but with dedicated page focus
- Avatar image with rounded styling
- Personal introduction paragraph
- Skills displayed as interactive pills
- More space for potential future content expansion

#### Design:
- Clean grid layout with image and text columns
- Responsive design (stacks on mobile)
- Consistent with overall site theme

---

### 3. Projects Page (`/[locale]/projects/page.tsx`)

**Route**: `/th/projects`, `/en/projects`  
**Purpose**: Comprehensive view of all projects with filtering capabilities.

#### Features:
- **Technology Filtering**: Interactive buttons to filter by tech stack
- **Project Grid**: Responsive grid showing all projects
- **Search/Filter UI**: "ALL" button plus individual technology tags
- **JSON-LD**: Structured data for each project for SEO

#### Components Used:
- `ProjectsGrid` - Main interactive component with filtering
- `Section` - Page wrapper
- Individual project JSON-LD for search engines

#### Interaction:
- Click technology tags to filter projects
- "ALL" button shows all projects
- Smooth filtering transitions
- Maintains state during navigation

---

### 4. Project Detail Pages (`/[locale]/projects/[slug]/page.tsx`)

**Route**: `/th/projects/[slug]`, `/en/projects/[slug]`  
**Purpose**: Individual project showcase with detailed information.

#### Content Structure:
1. **Project Header**
   - Project title
   - Role and year information
   - Technology stack pills

2. **Project Summary**
   - Detailed project description
   - Key features and highlights

3. **Image Gallery**
   - Project screenshots/mockups
   - Responsive grid layout
   - Fallback to cover image if no gallery

4. **External Links**
   - GitHub repositories
   - Live demos
   - Documentation links

#### Dynamic Features:
- Slug-based routing for SEO-friendly URLs
- 404 handling for invalid project slugs
- JSON-LD structured data for individual projects
- Responsive image galleries

#### Projects Included:
1. **Cookbook App** (`cookbook`)
   - Flutter mobile app
   - Ingredient scanning and allergy warnings
   - PHP backend with MariaDB

2. **Debirun Pop** (`debirun-pop`)
   - Web-based clicker game
   - Space theme with dynamic backgrounds
   - HTML/CSS/JS with Express backend

3. **Money-Memo** (`money-memo`)
   - Personal finance PWA
   - Kawaii pastel theme
   - React with Firebase backend

---

### 5. Contact Page (`/[locale]/contact/page.tsx`)

**Route**: `/th/contact`, `/en/contact`  
**Purpose**: Dedicated contact information page.

#### Information Displayed:
- Email address
- Physical location (Khlong Luang, Pathum Thani, Thailand)
- Interactive map link button
- Clean, accessible layout

#### Features:
- Direct email link integration
- Google Maps integration
- Responsive design
- Consistent with site theme

---

### 6. Resume Page (`/[locale]/resume/page.tsx`)

**Route**: `/th/resume`, `/en/resume`  
**Purpose**: PDF resume viewer with download functionality.

#### Features:
- **Embedded PDF Viewer**: iframe display of resume
- **Language-Specific PDFs**: Different PDFs for Thai/English
- **Download Button**: Direct PDF download link
- **Responsive Design**: Adapts to different screen sizes

#### PDF Locations:
- Thai: `/public/resume-th.pdf`
- English: `/public/resume-en.pdf`

#### Accessibility:
- Proper iframe titles
- Download alternative for users who prefer files
- Responsive aspect ratio for PDF viewing

---

## Navigation System

### Main Navigation (`components/Nav.tsx`)
- **Sidebar Layout**: Fixed on desktop, collapsible on mobile
- **Dynamic Routing**: Locale-aware navigation links
- **Visual Identity**: Coffee-themed brand display
- **Interactive Elements**: Hover states and active link highlighting

### Navigation Items:
1. Home (หน้าแรก/Home)
2. About (ประวัติ/About)
3. Projects (ผลงาน/Projects)
4. Contact (ติดต่อ/Contact)
5. Resume (เรซูเม่/Resume)

### Additional Features:
- **Language Switcher**: Toggle between Thai/English
- **Theme Toggle**: Light/dark mode support
- **Social Links**: GitHub and LinkedIn integration

---

## Internationalization (i18n)

### Language Support:
- **Thai** (`th`): Default language, right-to-left friendly
- **English** (`en`): Alternative language

### Content Management:
- **Message Files**: `/messages/th.json`, `/messages/en.json`
- **Dynamic Loading**: Language-specific content loading
- **URL Structure**: Locale prefix in all routes (`/th/*`, `/en/*`)

### Translation Structure:
```json
{
  "nav": { /* Navigation labels */ },
  "hero": { /* Homepage hero content */ },
  "about": { /* About section content */ },
  "projects": { /* Projects and items */ },
  "contact": { /* Contact information */ }
}
```

---

## SEO and Metadata

### JSON-LD Structured Data:
- **Person Schema**: Owner/developer information
- **Project Schemas**: Individual project metadata
- **Breadcrumbs**: Navigation structure

### Meta Tags:
- Dynamic page titles
- Language-specific descriptions
- Open Graph images
- Twitter Card support

### Sitemap and Robots:
- **Sitemap**: `/sitemap.xml` - Dynamic generation
- **Robots.txt**: `/robots.txt` - Search engine guidelines

---

## Component Architecture

### Core Components:
- **Section**: Page section wrapper with consistent spacing
- **ProjectCard**: Reusable project display component
- **ProjectsGrid**: Interactive project filtering component
- **Nav**: Main navigation with responsive design
- **LanguageSwitcher**: Locale toggle functionality
- **Icons**: SVG icon components for consistent styling

### Styling Approach:
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Coffee-pastel color palette
- **Responsive Design**: Mobile-first approach
- **Component Variants**: Consistent styling patterns

---

## Development Features

### Build System:
- **Next.js 14**: Latest App Router features
- **TypeScript**: Type safety throughout
- **ESLint**: Code quality and consistency
- **Vitest**: Component testing framework

### Performance:
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display=swap
- **Static Generation**: Pre-rendered pages for speed
- **Code Splitting**: Automatic optimization

### Deployment:
- **Vercel Ready**: Optimized for Vercel deployment
- **Static Export**: Can be deployed to any static host
- **Environment Agnostic**: No external dependencies required

---

This documentation provides a complete overview of the coffee-pastel portfolio structure, functionality, and implementation details. Each page serves a specific purpose in showcasing professional work while maintaining a cohesive, accessible, and visually appealing user experience.