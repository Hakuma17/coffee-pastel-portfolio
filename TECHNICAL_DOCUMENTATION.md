# Coffee Pastel Portfolio - Technical Documentation

## Project Structure and Technical Implementation

### File Structure Overview
```
coffee-pastel-portfolio/
├── app/
│   ├── [locale]/                 # Dynamic locale routing
│   │   ├── about/page.tsx       # About page
│   │   ├── contact/page.tsx     # Contact page  
│   │   ├── projects/
│   │   │   ├── page.tsx         # Projects listing
│   │   │   └── [slug]/page.tsx  # Individual project pages
│   │   ├── resume/page.tsx      # Resume page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with nav
│   │   └── page.tsx             # Homepage
│   ├── api/og/route.tsx         # Open Graph image generation
│   ├── robots.ts                # SEO robots.txt
│   └── sitemap.ts               # SEO sitemap
├── components/
│   ├── __tests__/               # Component tests
│   ├── Icons.tsx                # SVG icon components
│   ├── LanguageSwitcher.tsx     # Locale switching
│   ├── Nav.tsx                  # Main navigation
│   ├── ProjectCard.tsx          # Project display component
│   ├── ProjectsGrid.tsx         # Interactive project filtering
│   └── Section.tsx              # Page section wrapper
├── lib/
│   ├── i18n.ts                  # Internationalization utilities
│   └── seo.ts                   # SEO and JSON-LD helpers
├── messages/
│   ├── en.json                  # English content
│   └── th.json                  # Thai content
├── public/
│   ├── covers/                  # Project cover images
│   ├── placeholders/            # Placeholder images
│   ├── avatar.jpg               # Profile photo
│   ├── resume-en.pdf            # English resume
│   └── resume-th.pdf            # Thai resume
├── i18n.ts                      # next-intl configuration
├── middleware.ts                # Locale routing middleware
└── tailwind.config.ts           # Tailwind CSS configuration
```

---

## Technical Implementation Details

### 1. Routing and Internationalization

#### Dynamic Locale Routing
- **Pattern**: `/[locale]/...` where locale is `'th'` or `'en'`
- **Middleware**: Handles locale detection and routing
- **Fallback**: Defaults to Thai (`'th'`) for invalid locales

```typescript
// middleware.ts
export default createMiddleware({
  locales: ['th', 'en'],
  defaultLocale: 'th'
});
```

#### Page Type Definitions
```typescript
type PageProps = {
  params: { locale: 'th' | 'en' }
}

type ProjectPageProps = {
  params: { locale: 'th' | 'en'; slug: string }
}
```

### 2. Data Management

#### Content Loading Pattern
All pages use the `tHome()` function to load locale-specific content:

```typescript
import { tHome } from '@/lib/i18n';

export default async function Page({ params: { locale } }: PageProps) {
  const data = await tHome(locale);
  // Use data.nav, data.hero, data.about, data.projects, data.contact
}
```

#### Message Structure
Content is organized in JSON files with nested objects:
```json
{
  "nav": { "name": "...", "role": "...", "home": "..." },
  "hero": { "title": "...", "subtitle": "..." },
  "about": { "title": "...", "body": "...", "skills": [...] },
  "projects": { "title": "...", "items": [...] },
  "contact": { "title": "...", "email": "...", "location": "..." }
}
```

### 3. Component Architecture

#### Base Components

**Section Component**
```typescript
type SectionProps = {
  title?: string;
  tone?: 'hero' | 'default';
  children: any;
}
```
- Provides consistent spacing and typography
- Hero variant for main page sections
- Responsive margin and padding

**ProjectCard Component**
```typescript
type ProjectCardProps = {
  title: string;
  slug: string;
  year: string;
  role: string;
  summary: string;
  tech: string[];
  cover?: string;
}
```
- Displays project information in card format
- Handles cover image with fallback
- Links to project detail pages
- Technology stack display

#### Interactive Components

**ProjectsGrid Component**
- Client-side filtering by technology
- State management for active filter
- Dynamic project filtering logic
- Responsive grid layout

```typescript
const [active, setActive] = useState<string | 'ALL'>('ALL');
const filtered = useMemo(() => (
  active === 'ALL' ? items : items.filter(p => p.tech.includes(active))
), [active, items]);
```

**LanguageSwitcher Component**
- Toggle between Thai and English
- Preserves current page path
- Updates URL locale segment

### 4. Styling System

#### Tailwind Configuration
Custom color palette for coffee-pastel theme:
```javascript
// tailwind.config.ts
colors: {
  ink: '#2d3748',      // Dark text
  coffee: '#8b4513',   // Coffee brown
  rose: '#f7d3d3',     // Pastel rose
  cream: '#f7f5f3',    // Light background
  card: '#ffffff90'    // Translucent cards
}
```

#### Typography System
- **Kanit**: Thai language support, modern sans-serif
- **Inter**: Latin character support, web-optimized
- **Font weights**: 300 (light), 400 (regular), 600 (semibold)

#### Responsive Design Patterns
```css
/* Mobile-first responsive grid */
.grid.gap-4.sm:grid-cols-2.lg:grid-cols-3

/* Responsive navigation */
.md:grid.md:grid-cols-[260px_1fr].md:gap-8

/* Responsive images */
.h-36.w-36.rounded-2xl.object-cover.shadow-soft
```

### 5. SEO and Performance

#### JSON-LD Structured Data
Person schema for portfolio owner:
```typescript
const person = personJsonLd({
  name: string,
  email: string,
  location: string
});
```

Project schemas for individual projects:
```typescript
const projectSchema = projectJsonLd({
  ...projectData,
  locale: 'th' | 'en'
});
```

#### Meta Tag Generation
Dynamic metadata based on locale and page:
```typescript
export async function generateMetadata({ params: { locale } }) {
  const messages = await import(`@/messages/${locale}.json`);
  return {
    title: `${messages.nav.name} - ${messages.nav.role}`,
    description: messages.hero.subtitle
  };
}
```

#### Image Optimization
- Next.js Image component for automatic optimization
- Responsive sizing with width/height attributes
- Lazy loading for performance
- Fallback images for missing assets

### 6. Testing Strategy

#### Component Testing
Using Vitest and React Testing Library:
```typescript
// Example test structure
describe('LanguageSwitcher', () => {
  it('toggles locale and calls router.replace', () => {
    render(<LanguageSwitcher />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(replace).toHaveBeenCalledWith('/en');
  });
});
```

#### Test Coverage Areas
- Component rendering and interactions
- Navigation functionality
- Language switching behavior
- Responsive design validation

### 7. Build and Deployment

#### Next.js Configuration
- App Router for modern routing patterns
- Static generation for performance
- Automatic code splitting
- Font optimization with `next/font`

#### Vercel Deployment Features
- Automatic deployments from Git
- Edge runtime optimization
- Static asset optimization
- Built-in analytics support

#### Environment Variables
No external environment variables required:
- All content stored in JSON files
- No API keys or secrets needed
- Self-contained deployment

### 8. Performance Optimizations

#### Code Splitting
- Automatic route-based splitting
- Component-level lazy loading
- Dynamic imports where beneficial

#### Asset Optimization
- Image optimization with Next.js Image
- Font preloading and display:swap
- CSS optimization with Tailwind purging

#### Caching Strategy
- Static generation for all pages
- Long-term caching for assets
- Efficient revalidation patterns

### 9. Accessibility Features

#### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Landmark elements (nav, main, section)
- Descriptive link text and alt attributes

#### Interactive Elements
- Focus states for keyboard navigation
- Proper ARIA labels where needed
- Sufficient color contrast ratios

#### Screen Reader Support
- Descriptive text for images
- Proper form labeling
- Logical reading order

### 10. Browser Compatibility

#### Target Browsers
- Modern browsers with ES2020 support
- Mobile Safari and Chrome
- Desktop Firefox, Chrome, Safari, Edge

#### Progressive Enhancement
- Core functionality without JavaScript
- Enhanced interactions with JavaScript
- Graceful degradation patterns

---

## Development Workflow

### Local Development
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. `npm run lint` - Check code quality
4. `npm run test` - Run test suite
5. `npm run build` - Build for production

### Content Updates
1. Edit `/messages/th.json` or `/messages/en.json`
2. Update project images in `/public/covers/`
3. Replace resume PDFs in `/public/`
4. Modify avatar image at `/public/avatar.jpg`

### Adding New Projects
1. Add project object to `messages/[locale].json > projects.items`
2. Include required fields: title, slug, year, role, summary, tech
3. Add cover image to `/public/covers/`
4. Optional: Add gallery images array

### Deployment Checklist
- [ ] Content updated in message files
- [ ] Images optimized and uploaded
- [ ] Resume PDFs current and accessible
- [ ] Build passes without errors
- [ ] All pages render correctly
- [ ] Language switching works
- [ ] SEO metadata is accurate

This technical documentation provides developers with the information needed to understand, maintain, and extend the coffee-pastel portfolio project.