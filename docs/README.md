# Documentation Index

This directory contains comprehensive documentation for each page and component in the Coffee Pastel Portfolio project.

## Page Documentation

### Core Pages
- **[Home Page](./home-page.md)** - Main landing page with hero, about, projects, and contact sections
- **[About Page](./about-page.md)** - Dedicated personal information and skills showcase  
- **[Projects Page](./projects-page.md)** - Interactive project grid with technology filtering
- **[Project Detail Pages](./project-detail-pages.md)** - Individual project showcases with galleries
- **[Contact Page](./contact-page.md)** - Contact information and location details
- **[Resume Page](./resume-page.md)** - PDF resume viewer with download functionality

## Project Root Documentation

### Architecture and Implementation
- **[Pages Documentation](../PAGES_DOCUMENTATION.md)** - Complete overview of portfolio structure and functionality
- **[Technical Documentation](../TECHNICAL_DOCUMENTATION.md)** - Implementation details and technical specifications

## Quick Reference

### Page Routes
| Page | Thai Route | English Route | Purpose |
|------|------------|---------------|---------|
| Home | `/th` | `/en` | Portfolio overview and introduction |
| About | `/th/about` | `/en/about` | Personal information and skills |
| Projects | `/th/projects` | `/en/projects` | Project showcase with filtering |
| Project Detail | `/th/projects/[slug]` | `/en/projects/[slug]` | Individual project details |
| Contact | `/th/contact` | `/en/contact` | Contact information |
| Resume | `/th/resume` | `/en/resume` | PDF resume viewer |

### Project Slugs
- `cookbook` - Flutter mobile app with ingredient scanning
- `debirun-pop` - Web-based space-themed clicker game
- `money-memo` - Personal finance PWA with kawaii theme

### Content Management
All page content is managed through JSON files:
- **Thai**: `/messages/th.json`
- **English**: `/messages/en.json`

### Component Architecture
- **Section** - Page section wrapper with consistent spacing
- **ProjectCard** - Individual project display component
- **ProjectsGrid** - Interactive project filtering grid
- **Nav** - Main navigation with language switching
- **LanguageSwitcher** - Locale toggle functionality

### Styling System
- **Framework**: Tailwind CSS with custom coffee-pastel theme
- **Colors**: Coffee, rose, cream, ink color palette
- **Typography**: Kanit (Thai) + Inter (Latin) font combination
- **Design**: Rounded corners, soft shadows, responsive grid layouts

### Development Workflow
1. **Content**: Edit JSON files in `/messages/`
2. **Images**: Update files in `/public/covers/` and `/public/`
3. **Components**: Modify files in `/components/`
4. **Pages**: Update files in `/app/[locale]/`
5. **Styles**: Configure in `tailwind.config.ts`

## Documentation Usage

Each page documentation file includes:
- **Implementation Code**: Complete component structure
- **Content Structure**: JSON data organization
- **Design Features**: Styling and layout details
- **Component Dependencies**: Required imports and props
- **Responsive Design**: Mobile and desktop behavior
- **Enhancement Opportunities**: Future development suggestions

## Getting Started

1. **Review Architecture**: Start with [Technical Documentation](../TECHNICAL_DOCUMENTATION.md)
2. **Understand Pages**: Read [Pages Documentation](../PAGES_DOCUMENTATION.md)
3. **Explore Individual Pages**: Use page-specific docs for detailed implementation
4. **Customize Content**: Edit JSON files and replace placeholder images
5. **Deploy**: Follow deployment instructions in main README

## Maintenance

### Regular Updates
- Keep resume PDFs current
- Update project information in JSON files
- Replace placeholder images with actual content
- Test all external links periodically

### Content Guidelines
- Maintain consistency between Thai and English versions
- Use descriptive alt text for images
- Keep project descriptions concise but informative
- Ensure all external links use proper security attributes

This documentation provides everything needed to understand, maintain, and extend the coffee-pastel portfolio project.