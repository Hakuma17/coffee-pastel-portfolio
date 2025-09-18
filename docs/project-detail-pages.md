# Project Detail Pages Documentation

**File**: `app/[locale]/projects/[slug]/page.tsx`  
**Routes**: `/th/projects/[slug]`, `/en/projects/[slug]`  
**Purpose**: Individual project showcase with detailed information, images, and external links

## Page Structure

### Implementation
```tsx
import Image from 'next/image';
import Section from '@/components/Section';
import {tHome, projectJsonLd} from '@/lib/i18n';
import {notFound} from 'next/navigation';

export default async function ProjectDetail({params}:{params:{locale:'th'|'en'; slug:string}}) {
  const {locale, slug} = params;
  const data = await tHome(locale);
  const p = data.projects.items.find(i => i.slug === slug);
  if (!p) notFound();
  const gallery = p.gallery?.length ? p.gallery : (p.cover ? [p.cover] : []);

  return (
    <Section title={p.title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd({...p, locale}))}}
      />
      {/* Page content */}
    </Section>
  );
}
```

## Content Structure

### 1. Project Header
```tsx
<div className="flex items-center justify-between">
  <div className="text-sm opacity-75">{p.role}</div>
  <div className="text-xs opacity-60">{p.year}</div>
</div>
```

**Elements**:
- **Role**: Developer role/responsibility (left-aligned)
- **Year**: Development year (right-aligned)
- **Styling**: Subtle opacity for secondary information

### 2. Project Summary
```tsx
<p>{p.summary}</p>
```

**Content**: Detailed project description and key features

### 3. Technology Stack
```tsx
<div className="flex flex-wrap gap-2">
  {p.tech.map(t => (
    <span key={t} className="rounded-full bg-card px-2 py-1 text-xs">
      {t}
    </span>
  ))}
</div>
```

**Features**:
- **Pills Design**: Rounded tags for each technology
- **Flexible Layout**: Wraps to multiple lines as needed
- **Consistent Styling**: Matches filtering buttons on projects page

### 4. Image Gallery
```tsx
{gallery.length ? (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {gallery.map((src, idx) => (
      <div key={src+idx} className="overflow-hidden rounded-lg bg-white/60">
        <Image src={src} alt={`${p.title} ${idx+1}`} width={800} height={500} 
               className="h-48 w-full object-cover" />
      </div>
    ))}
  </div>
) : null}
```

**Features**:
- **Responsive Grid**: 1 → 2 → 3 columns based on screen size
- **Image Optimization**: Next.js Image component with fixed aspect ratio
- **Fallback Logic**: Uses cover image if no gallery exists
- **Consistent Height**: 48 units (192px) for uniform appearance

### 5. External Links
```tsx
{p.links?.length ? (
  <div className="pt-2">
    {p.links.map(l => (
      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" 
         className="mr-3 text-ink/80 hover:underline">
        {l.label}
      </a>
    ))}
  </div>
) : null}
```

**Features**:
- **Security**: `rel="noopener noreferrer"` for external links
- **Accessibility**: Descriptive link labels
- **Styling**: Underline on hover, subtle text color

## Route Handling

### Dynamic Parameters
```typescript
type ProjectDetailParams = {
  locale: 'th' | 'en';
  slug: string;
}
```

### Project Discovery
```tsx
const p = data.projects.items.find(i => i.slug === slug);
if (!p) notFound();
```

**Process**:
1. Extract locale and slug from URL parameters
2. Load all projects data for the locale
3. Find project matching the slug
4. Return 404 if project doesn't exist

### Valid Project Slugs
- **cookbook**: Cookbook App project
- **debirun-pop**: Debirun Pop game project  
- **money-memo**: Money-Memo finance app project

## Project Details

### 1. Cookbook App (`/projects/cookbook`)

**Data Structure**:
```json
{
  "title": "Cookbook App",
  "slug": "cookbook",
  "year": "2025",
  "role": "Flutter + Backend",
  "summary": "สแกนวัตถุดิบ แจ้งเตือนแพ้อาหาร ดีไซน์ Material 3",
  "tech": ["Flutter", "PHP", "MariaDB"],
  "cover": "/covers/cookbook.jpg",
  "links": [{"label": "ดูโค้ด", "href": "https://github.com/..."}],
  "gallery": ["/covers/cookbook.jpg", "/placeholders/cover.svg", "/placeholders/cover.svg"]
}
```

**Features**:
- Mobile application development
- Ingredient scanning technology
- Allergy warning system
- Material 3 design implementation

### 2. Debirun Pop (`/projects/debirun-pop`)

**Data Structure**:
```json
{
  "title": "Debirun Pop",
  "slug": "debirun-pop", 
  "year": "2025",
  "role": "Web Game",
  "summary": "เกมคลิกธีมอวกาศ สกอร์บอร์ด พื้นหลังไดนามิก",
  "tech": ["HTML", "CSS", "JS", "Express"],
  "cover": "/covers/debirun.jpg",
  "gallery": ["/covers/debirun.jpg", "/placeholders/cover.svg", "/placeholders/cover.svg"]
}
```

**Features**:
- Web-based clicker game
- Space theme design
- Dynamic background system
- Scoreboard functionality

### 3. Money-Memo (`/projects/money-memo`)

**Data Structure**:
```json
{
  "title": "Money-Memo",
  "slug": "money-memo",
  "year": "2025", 
  "role": "PWA + Firebase",
  "summary": "แอพบันทึกรายรับ-รายจ่าย ธีมคาวาอี้พาสเทล Offline",
  "tech": ["React", "Tailwind", "Firebase"],
  "cover": "/covers/moneymemo.jpg",
  "gallery": ["/covers/moneymemo.jpg", "/placeholders/cover.svg", "/placeholders/cover.svg"]
}
```

**Features**:
- Progressive Web App architecture
- Personal finance tracking
- Kawaii pastel theme design
- Offline functionality

## SEO and Structured Data

### JSON-LD Implementation
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd({...p, locale}))}}
/>
```

**Benefits**:
- **Search Engine Discovery**: Projects appear in search results
- **Rich Snippets**: Enhanced search result display
- **Professional Portfolio**: Structured professional work data

### URL Structure
- **SEO-Friendly**: Descriptive slugs for each project
- **Locale Support**: Language-specific URLs
- **Crawlable**: Static generation enables search engine indexing

## Gallery Implementation

### Image Handling
```tsx
const gallery = p.gallery?.length ? p.gallery : (p.cover ? [p.cover] : []);
```

**Fallback Logic**:
1. Use project gallery if it exists and has images
2. Fall back to cover image as single-item gallery
3. Display no gallery if neither exists

### Image Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **Fixed Aspect Ratio**: Consistent 800x500 ratio
- **Responsive Sizing**: `h-48 w-full` for uniform height
- **Object Fit**: `object-cover` maintains aspect ratio

## Responsive Design

### Layout Adaptation
- **Mobile**: Single column gallery, stacked content
- **Small Screens**: Two column gallery grid
- **Large Screens**: Three column gallery grid

### Content Flow
1. **Header**: Role and year information
2. **Summary**: Project description
3. **Tech Stack**: Technology pills
4. **Gallery**: Project images (if available)
5. **Links**: External project links (if available)

## Error Handling

### 404 Not Found
```tsx
if (!p) notFound();
```

**Triggers**:
- Invalid project slug in URL
- Project doesn't exist in data
- Locale-specific project variations

### Image Fallbacks
- Placeholder images for missing gallery items
- Graceful degradation if images fail to load
- Consistent layout regardless of image availability

## Performance Considerations

### Image Loading
- **Lazy Loading**: Images load as they enter viewport
- **Size Optimization**: Automatic WebP conversion
- **CDN Delivery**: Optimized delivery through Vercel

### Data Loading
- **Server-Side Rendering**: Fast initial page load
- **Static Generation**: Pre-rendered pages for speed
- **Minimal JavaScript**: Primarily static content

## Navigation Integration

### Breadcrumb Context
- Clear navigation path from projects list
- Back navigation to main projects page
- Consistent URL structure

### Inter-Project Navigation
- Could be enhanced with next/previous project links
- Related projects suggestions
- Technology-based project relationships

## Future Enhancement Opportunities

### Interactive Features
- **Image Lightbox**: Full-screen image viewing
- **Project Comparison**: Side-by-side project analysis
- **Social Sharing**: Share specific projects

### Additional Content
- **Live Demos**: Embedded previews or links
- **Code Snippets**: Technical implementation details
- **Development Timeline**: Project progress visualization

### Media Enhancements
- **Video Demos**: Project functionality videos
- **Interactive Prototypes**: Embedded demos
- **3D Previews**: Advanced visual presentations

These project detail pages provide comprehensive showcases of individual work items, offering visitors detailed insights into technical capabilities, design skills, and project scope while maintaining the portfolio's cohesive visual identity.