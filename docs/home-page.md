# Home Page Documentation

**File**: `app/[locale]/page.tsx`  
**Routes**: `/th`, `/en`  
**Purpose**: Main landing page showcasing portfolio overview

## Page Structure

### 1. Hero Section
```tsx
<Section tone="hero" title={data.hero.title}>
  <p className="max-w-prose opacity-85">{data.hero.subtitle}</p>
</Section>
```

**Content Source**: `messages/[locale].json > hero`
- `title`: Main portfolio headline
- `subtitle`: Descriptive tagline

**Styling**:
- `tone="hero"` applies special hero styling in Section component
- `max-w-prose` limits text width for readability
- `opacity-85` creates subtle text hierarchy

### 2. About Section
```tsx
<Section title={data.about.title}>
  <div className="grid gap-6 md:grid-cols-[160px_1fr] items-start">
    <Image src="/avatar.jpg" alt="avatar" width={144} height={144} 
           className="h-36 w-36 rounded-2xl object-cover shadow-soft" />
    <div className="space-y-3">
      <p>{data.about.body}</p>
      <div className="flex flex-wrap gap-2">
        {data.about.skills.map(s => (
          <span key={s} className="rounded-full bg-white/70 px-3 py-1 text-sm shadow">
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-2">
        <a className="rounded-full bg-coffee px-4 py-2 text-white shadow-soft" 
           href={data.about.resumeTh} target="_blank" rel="noopener noreferrer">
          Resume (TH)
        </a>
        <a className="rounded-full bg-rose/80 px-4 py-2 text-ink shadow-soft" 
           href={data.about.resumeEn} target="_blank" rel="noopener noreferrer">
          Resume (EN)
        </a>
      </div>
    </div>
  </div>
</Section>
```

**Content Source**: `messages/[locale].json > about`
- `title`: Section heading
- `body`: Personal introduction
- `skills`: Array of skill tags
- `resumeTh`: Thai resume PDF path
- `resumeEn`: English resume PDF path

**Layout Features**:
- **Responsive Grid**: `md:grid-cols-[160px_1fr]` creates image column + content column on desktop
- **Avatar Image**: Fixed 144x144px with rounded corners and shadow
- **Skills Display**: Flexible wrap layout with pill-style tags
- **Resume Buttons**: Dual-language download options with distinct styling

### 3. Projects Section
```tsx
<Section title={data.projects.title}>
  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
  </ul>
</Section>
```

**Content Source**: `messages/[locale].json > projects`
- `title`: Section heading
- `items`: Array of project objects

**Layout Features**:
- **Responsive Grid**: 1 column → 2 columns (sm+) → 3 columns (lg+)
- **ProjectCard Component**: Handles individual project display
- **Key Prop**: Uses project slug for React keys

### 4. Contact Section
```tsx
<Section title={data.contact.title}>
  <div className="space-y-2">
    <div>{data.contact.email}</div>
    <div>{data.contact.location}</div>
    <div className="pt-2">
      <a className="rounded-full bg-rose/70 px-4 py-2 shadow" 
         href={data.contact.mapHref} target="_blank" rel="noopener noreferrer">
        {data.contact.mapCta}
      </a>
    </div>
  </div>
</Section>
```

**Content Source**: `messages/[locale].json > contact`
- `title`: Section heading
- `email`: Email contact information
- `location`: Physical location
- `mapHref`: Google Maps link
- `mapCta`: Map button text

## Component Dependencies

### Section Component
Provides consistent spacing and typography wrapper:
```tsx
type SectionProps = {
  title?: string;
  tone?: 'hero' | 'default';
  children: any;
}
```

### ProjectCard Component
Displays individual project information:
```tsx
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

### Image Component
Next.js optimized image with:
- Automatic sizing and optimization
- Lazy loading
- WebP format conversion

## Data Flow

1. **Locale Parameter**: Extracted from URL params
2. **Content Loading**: `tHome(locale)` loads locale-specific content
3. **Projects Extraction**: `data.projects.items` provides project array
4. **Component Rendering**: Each section renders with appropriate data

## Styling Patterns

### Color Scheme
- **Coffee**: `bg-coffee` - Primary brand color for main CTA
- **Rose**: `bg-rose/80` - Secondary accent color
- **White/Transparent**: `bg-white/70` - Subtle backgrounds

### Typography
- **Hierarchy**: Section titles, body text, small labels
- **Opacity**: `opacity-85` for subtle text variation
- **Spacing**: `space-y-3` for consistent vertical rhythm

### Interactive Elements
- **Buttons**: Rounded-full shape with padding and shadows
- **Links**: External links with proper security attributes
- **Hover States**: Implicit through Tailwind utilities

## SEO and Accessibility

### Semantic Structure
- Proper heading hierarchy with Section components
- Descriptive alt text for avatar image
- External link security (`rel="noopener noreferrer"`)

### Performance
- Optimized images with Next.js Image component
- Efficient rendering with proper React keys
- Minimal JavaScript footprint

## Responsive Design

### Breakpoints
- **Mobile**: Single column layout, stacked sections
- **Small** (`sm:`): Projects grid becomes 2 columns
- **Medium** (`md:`): About section becomes 2-column grid
- **Large** (`lg:`): Projects grid becomes 3 columns

### Mobile Considerations
- Touch-friendly button sizes
- Readable text without zooming
- Efficient use of screen space
- Accessible navigation

This homepage serves as the main entry point and provides a comprehensive overview of the portfolio owner's professional profile, skills, and work samples.