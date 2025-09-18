# About Page Documentation

**File**: `app/[locale]/about/page.tsx`  
**Routes**: `/th/about`, `/en/about`  
**Purpose**: Dedicated page for detailed personal information and professional background

## Page Structure

### Implementation
```tsx
import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';
import Image from 'next/image';

export default async function AboutPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
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
        </div>
      </div>
    </Section>
  );
}
```

## Content Structure

### Data Source
**File**: `messages/[locale].json > about`

```json
{
  "about": {
    "title": "ประวัติส่วนตัว" | "About",
    "body": "Personal introduction paragraph...",
    "skills": ["React/Next.js", "Flutter", "Firebase/AWS", "UI/UX", "TypeScript"],
    "resume": {
      "th": "/resume-th.pdf",
      "en": "/resume-en.pdf"
    }
  }
}
```

### Content Elements

1. **Page Title**: `data.about.title`
   - Thai: "ประวัติส่วนตัว"
   - English: "About"

2. **Personal Introduction**: `data.about.body`
   - Brief professional summary
   - Key interests and specializations
   - Notable projects mention

3. **Skills Array**: `data.about.skills`
   - Technology stack
   - Professional competencies
   - Rendered as interactive pills

## Layout Design

### Grid Layout
```css
.grid.gap-6.md:grid-cols-[160px_1fr].items-start
```

**Responsive Behavior**:
- **Mobile**: Single column, image above text
- **Desktop**: Two columns with fixed 160px image column

### Image Styling
```css
.h-36.w-36.rounded-2xl.object-cover.shadow-soft
```

**Properties**:
- **Size**: 144x144 pixels (36 × 4px units)
- **Shape**: Rounded corners with 2xl radius
- **Fit**: Object-cover for proper aspect ratio
- **Effect**: Soft shadow for depth

### Skills Display
```tsx
<div className="flex flex-wrap gap-2">
  {data.about.skills.map(s => (
    <span key={s} className="rounded-full bg-white/70 px-3 py-1 text-sm shadow">
      {s}
    </span>
  ))}
</div>
```

**Styling Features**:
- **Layout**: Flexible wrap for responsive arrangement
- **Shape**: Rounded pill design
- **Background**: Semi-transparent white
- **Typography**: Small text with padding
- **Effect**: Subtle shadow

## Key Differences from Home Page

### Focused Content
- **No Resume Buttons**: Unlike home page, this dedicated about page doesn't include resume download buttons
- **Pure Information**: Focus on personal story and skills without CTAs
- **Simplified Layout**: Cleaner presentation without additional sections

### Design Consistency
- **Same Components**: Uses identical Section and Image components
- **Same Styling**: Maintains visual consistency with home page about section
- **Same Data**: Sources content from same JSON structure

## Component Dependencies

### Required Imports
```tsx
import {tHome} from '@/lib/i18n';     // Content loading
import Section from '@/components/Section';  // Layout wrapper
import Image from 'next/image';      // Optimized images
```

### Type Definitions
```typescript
type AboutPageProps = {
  params: { locale: 'th' | 'en' }
}
```

## SEO Considerations

### Page Metadata
- Inherits metadata from root layout
- Uses about.title for navigation context
- Provides focused content for search engines

### Structured Data
- Could benefit from additional Person schema
- Skills information valuable for professional discovery
- Clean URL structure with locale prefix

## Accessibility Features

### Semantic HTML
- Section component provides proper heading structure
- Image has descriptive alt text
- Logical reading order maintained

### Visual Design
- High contrast between text and background
- Readable font sizes (text-sm minimum)
- Touch-friendly interactive elements

## Performance Optimization

### Image Loading
- Next.js Image component for optimization
- Lazy loading by default
- Responsive sizing

### Content Loading
- Server-side rendering for fast initial load
- Minimal JavaScript requirements
- Efficient CSS with Tailwind

## Future Enhancement Opportunities

### Additional Content
- **Timeline**: Professional experience chronology
- **Certifications**: Professional credentials display
- **Languages**: Spoken language proficiencies
- **Hobbies**: Personal interests section

### Interactive Features
- **Skill Ratings**: Visual proficiency indicators
- **Experience Details**: Expandable work history
- **Contact Form**: Direct contact capability

### Media
- **Multiple Photos**: Professional headshots gallery
- **Video Introduction**: Personal presentation
- **Background Animation**: Subtle visual effects

## Usage Guidelines

### Content Updates
1. Edit `messages/[locale].json > about` section
2. Update avatar image at `/public/avatar.jpg`
3. Ensure both language versions are consistent
4. Verify image dimensions match expectations

### Styling Modifications
- Maintain grid layout for consistency
- Preserve image aspect ratio and sizing
- Keep skills pill styling consistent with theme
- Ensure responsive behavior is maintained

This dedicated about page provides a focused space for personal and professional information while maintaining consistency with the overall portfolio design and user experience.