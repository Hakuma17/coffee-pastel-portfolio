# Projects Page Documentation

**File**: `app/[locale]/projects/page.tsx`  
**Routes**: `/th/projects`, `/en/projects`  
**Purpose**: Interactive showcase of all portfolio projects with filtering capabilities

## Page Structure

### Implementation
```tsx
import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';
import ProjectsGrid from '@/components/ProjectsGrid';

export default async function ProjectsPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
    <Section title={data.projects.title}>
      <ProjectsGrid locale={locale} items={data.projects.items} />
    </Section>
  );
}
```

## Component Breakdown

### ProjectsGrid Component
**File**: `components/ProjectsGrid.tsx`

#### Client-Side Functionality
```tsx
"use client";
import {useMemo, useState} from 'react';
import ProjectCard from './ProjectCard';
import type {ProjectItem} from '@/lib/i18n';
import {projectJsonLd} from '@/lib/i18n';

type Props = { locale: 'th'|'en'; items: ProjectItem[] };
```

#### Interactive Features

**1. Technology Filtering**
```tsx
const allTags = useMemo(() => {
  const s = new Set<string>();
  items.forEach(p => p.tech.forEach(t => s.add(t)));
  return Array.from(s).sort((a,b)=>a.localeCompare(b));
}, [items]);

const [active, setActive] = useState<string | 'ALL'>('ALL');
const filtered = useMemo(() => (
  active === 'ALL' ? items : items.filter(p => p.tech.includes(active))
), [active, items]);
```

**Features**:
- **Dynamic Tags**: Automatically extracts all tech tags from projects
- **State Management**: Tracks currently active filter
- **Smart Filtering**: Shows all projects or filters by technology
- **Alphabetical Sorting**: Tags sorted for consistent order

**2. Filter UI**
```tsx
<div className="flex flex-wrap gap-2">
  <button
    type="button"
    onClick={() => setActive('ALL')}
    className={`rounded-full px-3 py-1 text-sm shadow ${
      active==='ALL' ? 'bg-coffee text-white' : 'bg-white/70'
    }`}
  >ALL</button>
  {allTags.map(tag => (
    <button
      key={tag}
      type="button"
      onClick={() => setActive(tag)}
      className={`rounded-full px-3 py-1 text-sm shadow ${
        active===tag ? 'bg-rose/80 text-ink' : 'bg-white/70'
      }`}
    >{tag}</button>
  ))}
</div>
```

**UI Design**:
- **Visual States**: Active filters have distinct colors
- **ALL Button**: Coffee brown when active
- **Tech Buttons**: Rose accent when active
- **Consistent Shape**: Rounded pill design

**3. Projects Display**
```tsx
<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {filtered.map((p) => (
    <div key={p.slug}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd({...p, locale}))}}
      />
      <ProjectCard {...p} />
    </div>
  ))}
</ul>
```

**Features**:
- **Responsive Grid**: Adapts to screen size
- **SEO Optimization**: JSON-LD for each project
- **Project Cards**: Consistent display components

## Project Data Structure

### Data Source
**File**: `messages/[locale].json > projects`

```json
{
  "projects": {
    "title": "ผลงาน" | "Projects",
    "items": [
      {
        "title": "Project Name",
        "slug": "project-slug",
        "year": "2025",
        "role": "Developer Role",
        "summary": "Project description...",
        "tech": ["React", "TypeScript", "Tailwind"],
        "cover": "/covers/project.jpg",
        "links": [{"label": "GitHub", "href": "https://github.com/..."}],
        "gallery": ["/covers/image1.jpg", "/covers/image2.jpg"]
      }
    ]
  }
}
```

### Project Schema
```typescript
type ProjectItem = {
  title: string;        // Project name
  slug: string;         // URL identifier
  year: string;         // Development year
  role: string;         // Developer role
  summary: string;      // Brief description
  tech: string[];       // Technology stack
  cover?: string;       // Main project image
  links?: Array<{       // External links
    label: string;
    href: string;
  }>;
  gallery?: string[];   // Additional images
}
```

## Current Projects

### 1. Cookbook App
- **Slug**: `cookbook`
- **Technologies**: Flutter, PHP, MariaDB
- **Features**: Ingredient scanning, allergy warnings, Material 3 design
- **Type**: Mobile application

### 2. Debirun Pop
- **Slug**: `debirun-pop`
- **Technologies**: HTML, CSS, JS, Express
- **Features**: Space-themed clicker game, scoreboard, dynamic backgrounds
- **Type**: Web game

### 3. Money-Memo
- **Slug**: `money-memo`
- **Technologies**: React, Tailwind, Firebase
- **Features**: Personal finance tracking, kawaii pastel theme, offline capability
- **Type**: Progressive Web App

## Interactive Features

### Technology Filtering
**Available Filters**:
- ALL (shows all projects)
- CSS
- Express
- Firebase
- Flutter
- HTML
- JS
- MariaDB
- PHP
- React
- Tailwind

### User Experience
1. **Default State**: Shows all projects
2. **Filter Selection**: Click technology button to filter
3. **Visual Feedback**: Active filter highlighted
4. **Reset Option**: "ALL" button returns to full view
5. **Responsive Layout**: Grid adapts to filtered results

## SEO and Performance

### JSON-LD Structured Data
Each project includes schema markup:
```tsx
const projectSchema = projectJsonLd({
  ...projectData,
  locale: currentLocale
});
```

**Benefits**:
- **Search Engine Discovery**: Projects appear in search results
- **Rich Snippets**: Enhanced search result appearance
- **Professional Credibility**: Structured professional data

### Performance Optimizations
- **Client-Side Filtering**: No page reloads required
- **Memoized Calculations**: Efficient tag extraction and filtering
- **Optimized Images**: Next.js Image components in ProjectCard
- **Minimal Re-renders**: Efficient state management

## Responsive Design

### Breakpoint Behavior
- **Mobile (default)**: Single column grid
- **Small screens (sm:)**: Two column grid
- **Large screens (lg:)**: Three column grid

### Filter UI Responsiveness
- **Flexible Wrap**: Buttons wrap to new lines as needed
- **Touch-Friendly**: Adequate button sizes for mobile interaction
- **Visual Consistency**: Maintains design across screen sizes

## Component Dependencies

### Required Components
- **Section**: Page layout wrapper
- **ProjectsGrid**: Main interactive component
- **ProjectCard**: Individual project display
- **JSON-LD Helper**: SEO structured data generation

### Data Dependencies
- **Locale**: For language-specific content and URLs
- **Projects Array**: Complete project data from messages
- **Navigation**: Links to individual project pages

## Future Enhancement Opportunities

### Search Functionality
- **Text Search**: Filter by project name or description
- **Advanced Filters**: Combine technology and year filters
- **Search Input**: Dedicated search field

### Sort Options
- **Chronological**: Sort by development year
- **Alphabetical**: Sort by project name
- **Popularity**: Sort by view count or metrics

### Additional Metadata
- **Project Status**: Active, completed, maintenance
- **Client Information**: If applicable for client work
- **Metrics**: Lines of code, team size, duration

### Visual Enhancements
- **Animations**: Smooth filter transitions
- **Loading States**: Skeleton screens during filtering
- **Preview Modes**: Hover previews or expanded cards

This projects page serves as a comprehensive showcase of professional work with interactive filtering capabilities, providing visitors with an engaging way to explore technical expertise and project diversity.