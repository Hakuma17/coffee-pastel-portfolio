# Resume Page Documentation

**File**: `app/[locale]/resume/page.tsx`  
**Routes**: `/th/resume`, `/en/resume`  
**Purpose**: PDF resume viewer with embedded display and download functionality

## Page Structure

### Implementation
```tsx
import Section from '@/components/Section';
import {tHome} from '@/lib/i18n';

export default async function ResumePage({params:{locale}}:{params:{locale:'th'|'en'}}) {
  const data = await tHome(locale);
  const pdf = locale === 'th' ? data.about.resumeTh : data.about.resumeEn;
  return (
    <Section title={locale === 'th' ? 'เรซูเม่' : 'Resume'}>
      <div className="space-y-3">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border bg-white">
          <iframe title="resume" src={pdf} className="h-full w-full" />
        </div>
        <a href={pdf} target="_blank" rel="noopener noreferrer" 
           className="inline-block rounded-full bg-coffee px-4 py-2 text-white shadow-soft">
          {locale === 'th' ? 'เปิดไฟล์เต็ม' : 'Open full file'}
        </a>
      </div>
    </Section>
  );
}
```

## Content Structure

### Data Source
**File**: `messages/[locale].json > about.resume`

```json
{
  "about": {
    "resume": {
      "th": "/resume-th.pdf",
      "en": "/resume-en.pdf"
    }
  }
}
```

**File Locations**:
- Thai Resume: `/public/resume-th.pdf`
- English Resume: `/public/resume-en.pdf`

### Dynamic Content Selection
```tsx
const pdf = locale === 'th' ? data.about.resumeTh : data.about.resumeEn;
```

**Logic**:
- Automatically selects appropriate PDF based on current locale
- Provides language-specific resume content
- Maintains consistent URL structure

## Design and Layout

### PDF Viewer Container
```tsx
<div className="aspect-[3/4] w-full overflow-hidden rounded-xl border bg-white">
  <iframe title="resume" src={pdf} className="h-full w-full" />
</div>
```

**Features**:
- **Aspect Ratio**: 3:4 ratio typical for portrait documents
- **Full Width**: Responsive to container width
- **Rounded Corners**: `rounded-xl` for visual consistency
- **Border**: Subtle border for definition
- **Background**: White background for document context
- **Overflow Hidden**: Clean edges for embedded content

### Download Button
```tsx
<a href={pdf} target="_blank" rel="noopener noreferrer" 
   className="inline-block rounded-full bg-coffee px-4 py-2 text-white shadow-soft">
  {locale === 'th' ? 'เปิดไฟล์เต็ม' : 'Open full file'}
</a>
```

**Features**:
- **Coffee Theme**: Primary brand color for important action
- **Pill Shape**: Rounded-full for consistent button style
- **External Link**: Opens PDF in new tab/window
- **Security**: Proper rel attributes for external links
- **Localized Text**: Language-appropriate button labels

## Responsive Design

### Mobile Optimization
- **Aspect Ratio**: Maintains document proportions on all devices
- **Touch-Friendly**: Download button sized for mobile interaction
- **Readable Size**: PDF scales appropriately for screen size
- **Vertical Layout**: Simple stack works well on mobile

### Desktop Experience
- **Larger Display**: PDF preview shows more detail
- **Full-Screen Option**: Download button opens full PDF
- **Consistent Navigation**: Integrates with sidebar navigation

## Accessibility Features

### Screen Reader Support
- **iframe Title**: "resume" provides context for assistive technology
- **Descriptive Link**: Clear action description for download link
- **Semantic Structure**: Section component provides proper heading hierarchy

### Keyboard Navigation
- **Focusable Elements**: Download link accessible via keyboard
- **Tab Order**: Logical focus progression
- **Visual Focus**: Browser default focus indicators

## Browser Compatibility

### PDF Support
- **Modern Browsers**: Native PDF support in Chrome, Firefox, Safari, Edge
- **Fallback Behavior**: Browser-specific PDF handling
- **Mobile Support**: Varies by browser and device

### Alternative Access
- **Download Option**: Ensures access regardless of embed support
- **External Viewer**: Users can use preferred PDF applications
- **Print Support**: Full PDF functionality available

## Performance Considerations

### Loading Strategy
- **Embedded Display**: Immediate preview without additional requests
- **Lazy Loading**: iframe content loads as needed
- **Efficient Sizing**: Aspect ratio prevents layout shifts

### File Optimization
- **PDF Size**: Should be optimized for web viewing
- **Compression**: Balance quality and file size
- **Fast CDN**: Served through Vercel's edge network

## File Management

### Current Setup
```
public/
├── resume-th.pdf    # Thai language resume
└── resume-en.pdf    # English language resume
```

### Best Practices
- **File Naming**: Clear, consistent naming convention
- **Version Control**: Update both files when content changes
- **Size Optimization**: Compress PDFs while maintaining readability
- **Regular Updates**: Keep resume content current

## Future Enhancement Opportunities

### Advanced PDF Features

**PDF.js Integration**
```tsx
// Custom PDF viewer with more controls
import { Document, Page } from 'react-pdf';

<Document file={pdf}>
  <Page pageNumber={1} width={600} />
</Document>
```

**Multiple Page Preview**
```tsx
// Show first page as preview, full document on click
const [showPreview, setShowPreview] = useState(true);

{showPreview ? (
  <div onClick={() => setShowPreview(false)} className="cursor-pointer">
    <PDFPreview file={pdf} page={1} />
    <div className="text-center text-sm opacity-70">Click to view full resume</div>
  </div>
) : (
  <FullPDFViewer file={pdf} />
)}
```

### Additional Functionality

**Version History**
```tsx
// Multiple resume versions
const resumeVersions = [
  { label: 'Current', file: '/resume-current.pdf' },
  { label: 'Technical Focus', file: '/resume-tech.pdf' },
  { label: 'Creative Focus', file: '/resume-creative.pdf' }
];
```

**Download Analytics**
```tsx
// Track resume downloads
const handleDownload = () => {
  analytics.track('resume_download', { locale, timestamp: Date.now() });
  window.open(pdf, '_blank');
};
```

**Print Optimization**
```tsx
// Dedicated print view
<button onClick={() => window.print()} 
        className="rounded-full bg-rose/80 px-4 py-2 text-ink">
  Print Resume
</button>
```

### Enhanced Presentation

**Skills Highlight**
```tsx
// Extract and highlight key skills from resume
<div className="mt-4">
  <h3 className="text-lg font-semibold mb-2">Key Skills</h3>
  <div className="flex flex-wrap gap-2">
    {extractedSkills.map(skill => (
      <span key={skill} className="rounded-full bg-white/70 px-3 py-1 text-sm">
        {skill}
      </span>
    ))}
  </div>
</div>
```

**Experience Timeline**
```tsx
// Visual timeline of work experience
<div className="mt-6">
  <h3 className="text-lg font-semibold mb-4">Experience Timeline</h3>
  <div className="space-y-3">
    {experiences.map(exp => (
      <div key={exp.company} className="flex items-center gap-4">
        <div className="text-sm opacity-60">{exp.period}</div>
        <div>{exp.role} at {exp.company}</div>
      </div>
    ))}
  </div>
</div>
```

## SEO and Social Sharing

### Meta Tags
```tsx
// Enhanced metadata for resume page
export async function generateMetadata({ params: { locale } }) {
  return {
    title: `Resume - ${locale === 'th' ? 'ยศพล แสงอินทร์' : 'Yotphol Saeng-in'}`,
    description: locale === 'th' 
      ? 'เรซูเม่ นักพัฒนาซอฟต์แวร์ ความเชี่ยวชาญ React, Flutter, Full-stack'
      : 'Software Developer Resume - React, Flutter, Full-stack expertise',
  };
}
```

### Structured Data
```json
{
  "@type": "Person",
  "name": "Yotphol Saeng-in",
  "jobTitle": "Software Developer",
  "url": "https://portfolio.example.com/resume",
  "document": {
    "@type": "DigitalDocument",
    "name": "Professional Resume",
    "encodingFormat": "application/pdf"
  }
}
```

## Security Considerations

### File Access
- **Public Directory**: PDFs served as static assets
- **No Authentication**: Publicly accessible (typical for portfolios)
- **External Links**: Proper security attributes

### Privacy
- **Personal Information**: Consider what details to include
- **Contact Details**: Balance accessibility with privacy
- **Professional Focus**: Highlight work-relevant information

## Usage Guidelines

### Content Updates
1. **Replace PDF Files**: Update files in `/public/` directory
2. **Verify Links**: Test both language versions
3. **Check Display**: Ensure PDFs render correctly in iframe
4. **Mobile Testing**: Verify mobile experience

### File Preparation
- **PDF Optimization**: Use tools like Adobe Acrobat or online compressors
- **Text Selection**: Ensure text is selectable for accessibility
- **Font Embedding**: Embed fonts for consistent display
- **Page Size**: Standard A4 or Letter size for compatibility

This resume page provides a professional way to showcase credentials while offering both preview and full-access options, maintaining the portfolio's design consistency and user experience standards.