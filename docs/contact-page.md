# Contact Page Documentation

**File**: `app/[locale]/contact/page.tsx`  
**Routes**: `/th/contact`, `/en/contact`  
**Purpose**: Dedicated contact information page with location and communication details

## Page Structure

### Implementation
```tsx
import {tHome} from '@/lib/i18n';
import Section from '@/components/Section';

export default async function ContactPage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  return (
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
  );
}
```

## Content Structure

### Data Source
**File**: `messages/[locale].json > contact`

```json
{
  "contact": {
    "title": "ติดต่อ & ที่อยู่" | "Contact & Address",
    "email": "อีเมล: your.email@example.com" | "Email: your.email@example.com",
    "location": "ที่อยู่: คลองหลวง, ปทุมธานี, ประเทศไทย" | "Address: Khlong Luang, Pathum Thani, Thailand",
    "mapHref": "https://maps.google.com/?q=Khlong+Luang+Pathum+Thani",
    "mapCta": "เปิดแผนที่" | "Open map"
  }
}
```

### Content Elements

1. **Page Title**: `data.contact.title`
   - Thai: "ติดต่อ & ที่อยู่"
   - English: "Contact & Address"

2. **Email Information**: `data.contact.email`
   - Includes label prefix
   - Actual email address: your.email@example.com
   - Ready for mailto: links enhancement

3. **Location Information**: `data.contact.location`
   - Thai: "ที่อยู่: คลองหลวง, ปทุมธานี, ประเทศไทย"
   - English: "Address: Khlong Luang, Pathum Thani, Thailand"
   - Consistent location across languages

4. **Map Integration**: `data.contact.mapHref` + `data.contact.mapCta`
   - Google Maps link to location
   - Language-appropriate call-to-action button

## Design and Layout

### Simple Vertical Layout
```tsx
<div className="space-y-2">
  {/* Contact items with consistent spacing */}
</div>
```

**Features**:
- **Clean Spacing**: `space-y-2` provides consistent 8px gaps
- **Readable Format**: Each contact method on separate line
- **Logical Order**: Email first, then location, then map action

### Map Button Styling
```tsx
<a className="rounded-full bg-rose/70 px-4 py-2 shadow" 
   href={data.contact.mapHref} target="_blank" rel="noopener noreferrer">
  {data.contact.mapCta}
</a>
```

**Design Features**:
- **Shape**: Rounded-full for pill-like appearance
- **Color**: Rose accent color with 70% opacity
- **Padding**: 16px horizontal, 8px vertical
- **Effect**: Subtle shadow for depth
- **Security**: Proper external link attributes

## Current Contact Information

### Location Details
- **City**: Khlong Luang (คลองหลวง)
- **Province**: Pathum Thani (ปทุมธานี)
- **Country**: Thailand (ประเทศไทย)
- **Map Link**: Google Maps search query

### Contact Methods
- **Email**: your.email@example.com (placeholder)
- **Location**: Physical address for reference
- **Map**: Interactive location discovery

## Accessibility Features

### Semantic Structure
- Section component provides proper heading hierarchy
- Clear information hierarchy
- Logical reading order for screen readers

### Interactive Elements
- **External Link**: Proper `target="_blank"` and `rel` attributes
- **Descriptive Text**: Clear action labels
- **Touch-Friendly**: Adequate button size for mobile interaction

## Future Enhancement Opportunities

### Additional Contact Methods

**Social Media Integration**
```tsx
// Potential social links section
<div className="flex gap-3 pt-4">
  <a href="https://github.com/username" className="text-ink/80 hover:underline">
    GitHub
  </a>
  <a href="https://linkedin.com/in/username" className="text-ink/80 hover:underline">
    LinkedIn
  </a>
</div>
```

**Direct Communication**
```tsx
// Enhanced email with mailto: link
<a href="mailto:your.email@example.com" className="text-ink/80 hover:underline">
  {data.contact.email}
</a>
```

**Phone Contact**
```tsx
// Phone number addition
<div>โทร: +66-XX-XXX-XXXX</div>
<div>Phone: +66-XX-XXX-XXXX</div>
```

### Interactive Features

**Contact Form**
```tsx
// Contact form implementation
<form className="space-y-4 mt-6">
  <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border" />
  <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border" />
  <textarea placeholder="Message" className="w-full p-3 rounded-lg border h-32"></textarea>
  <button type="submit" className="rounded-full bg-coffee px-6 py-3 text-white">
    Send Message
  </button>
</form>
```

**Embedded Map**
```tsx
// Google Maps embed
<div className="mt-6 h-64 rounded-xl overflow-hidden">
  <iframe 
    src="https://www.google.com/maps/embed?pb=..."
    width="100%" 
    height="100%" 
    style={{border:0}}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
```

### Enhanced Location Information

**Detailed Address**
```json
{
  "contact": {
    "address": {
      "street": "123 Example Street",
      "district": "Khlong Luang",
      "province": "Pathum Thani",
      "postalCode": "12120",
      "country": "Thailand"
    }
  }
}
```

**Business Hours**
```json
{
  "contact": {
    "availability": {
      "timezone": "Asia/Bangkok",
      "preferredHours": "9:00 AM - 6:00 PM",
      "responseTime": "Within 24 hours"
    }
  }
}
```

## Design Consistency

### Theme Integration
- **Color Scheme**: Uses rose accent from overall theme
- **Typography**: Consistent with site-wide text styling
- **Spacing**: Follows established spacing patterns
- **Components**: Uses Section wrapper for consistency

### Responsive Behavior
- **Mobile-First**: Works well on small screens
- **Touch-Friendly**: Button sizing appropriate for mobile
- **Readable Text**: Sufficient size and contrast
- **Logical Flow**: Information hierarchy clear on all devices

## SEO Considerations

### Local SEO
- **Location Information**: Clear geographical references
- **Contact Details**: Structured contact information
- **Map Integration**: Google Maps compatibility

### Schema Markup Potential
```json
{
  "@type": "ContactPoint",
  "contactType": "customer service",
  "email": "your.email@example.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Khlong Luang",
    "addressRegion": "Pathum Thani",
    "addressCountry": "Thailand"
  }
}
```

## Performance Optimization

### Minimal Dependencies
- **No External Scripts**: No third-party contact widgets
- **Static Content**: Fast loading with server-side rendering
- **Optimized Images**: None required for this page

### Loading Strategy
- **Instant Display**: All content available immediately
- **External Links**: Only map link requires external request
- **Cached Content**: Static generation enables efficient caching

## Usage Guidelines

### Content Updates
1. **Edit Message Files**: Update contact information in JSON files
2. **Maintain Consistency**: Keep both language versions synchronized
3. **Test Links**: Verify map links work correctly
4. **Update Placeholders**: Replace example email with real contact

### Styling Modifications
- **Preserve Layout**: Maintain simple vertical structure
- **Color Consistency**: Use theme colors for any additions
- **Button Styling**: Keep button design consistent with site theme
- **Spacing**: Maintain readable spacing between elements

This contact page provides essential communication information in a clean, accessible format while maintaining consistency with the overall portfolio design and offering clear paths for visitor engagement.