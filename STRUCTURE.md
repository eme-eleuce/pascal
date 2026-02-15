# Pascal Project Structure

## Current Structure (Reorganized - February 2026)

This project has been restructured to follow a clean, maintainable pattern similar to the Pachar project, making it easier to implement multi-language support.

```
pascal/
├── src/app/
│   ├── components/           # Main components folder
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Steps.jsx        # Process steps display
│   │   ├── Team.jsx         # Team section
│   │   ├── VideoGallery.jsx # Video gallery
│   │   ├── Services.jsx     # Services section
│   │   └── items/           # Reusable sub-components
│   │       ├── ProcessSteps.jsx   # Process steps component
│   │       └── ProcessSteps1.jsx  # Alternative process steps
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.js     # Contact API endpoint
│   │
│   ├── projekte/
│   │   └── page.js          # Projects page
│   │
│   ├── services/
│   │   └── page.js          # Services page
│   │
│   ├── team/
│   │   └── page.js          # Team page
│   │
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   └── globals.css          # Global styles
│
├── public/
│   └── photos/              # Static assets
│
└── package.json
```

## Key Organizational Principles

### 1. Component Organization
- **Main components** live in `src/app/components/`
- **Reusable sub-components** are organized in `src/app/components/items/`
- This follows the same pattern as Pachar for consistency

### 2. Page Structure
- Each route has its own folder with a `page.js` file
- Pages import components from the components folder
- Clean separation between pages and components

### 3. Import Patterns
```javascript
// From pages (projekte, services, team)
import Component from '../components/ComponentName'

// From home page
import Component from './components/ComponentName'

// From components importing items
import Item from './items/ItemName'
```

## Preparing for Multi-Language Support

### Current State
All text is currently hardcoded in German within components:
- `@/src/app/components/Navbar.jsx:50-52` - Navigation links
- `@/src/app/components/Steps.jsx:11-41` - Process steps
- `@/src/app/components/Contact.jsx` - Form labels
- etc.

### Recommended Next Steps for i18n

#### Option 1: next-intl (Recommended for App Router)
```bash
npm install next-intl
```

Create language files:
```
src/
├── i18n/
│   ├── locales/
│   │   ├── de.json    # German translations
│   │   ├── en.json    # English translations
│   │   └── es.json    # Spanish translations
│   └── config.js
```

#### Option 2: Simple Custom Solution
Create a translations folder:
```
src/
├── translations/
│   ├── de.js    # { navbar: { services: 'Dienstleistungen', ... } }
│   ├── en.js    # { navbar: { services: 'Services', ... } }
│   └── es.js    # { navbar: { services: 'Servicios', ... } }
```

### Example Translation Structure

**Before (Hardcoded):**
```javascript
const navLinks = [
  { name: 'Dienstleistungen', href: '/services' },
  { name: 'Projekte', href: '/projekte' },
  { name: 'Team', href: '/team' },
];
```

**After (i18n-ready):**
```javascript
import { useTranslations } from 'next-intl';

const t = useTranslations('navbar');
const navLinks = [
  { name: t('services'), href: '/services' },
  { name: t('projects'), href: '/projekte' },
  { name: t('team'), href: '/team' },
];
```

## Components That Need Translation

### High Priority
1. **Navbar.jsx** - Navigation links, copyright text
2. **Steps.jsx** - Process titles and descriptions
3. **Contact.jsx** - Form labels, placeholders, buttons
4. **Footer.jsx** - Footer text and links
5. **Hero.jsx** - Hero text (if any)

### Medium Priority
6. **Services.jsx** - Service descriptions
7. **Team.jsx** - Team member info
8. **VideoGallery.jsx** - Gallery titles

## Benefits of Current Structure

✅ **Clean separation** - Components are separate from pages
✅ **Organized sub-components** - Items folder for reusable pieces
✅ **Consistent with Pachar** - Same organizational pattern
✅ **Language-ready** - Easy to extract text to translation files
✅ **Maintainable** - Clear hierarchy and purpose
✅ **Scalable** - Easy to add new components or pages

## Comparison with Pachar

| Feature | Pascal (App Router) | Pachar (Pages Router) |
|---------|--------------------|-----------------------|
| Components folder | ✅ `src/app/components/` | ✅ `components/` |
| Items subfolder | ✅ `components/items/` | ✅ `components/items/` |
| Clean structure | ✅ Yes | ✅ Yes |
| i18n ready | ✅ Yes | ⚠️ Hardcoded Spanish |
| Next.js version | 15 (App Router) | 13 (Pages Router) |

## Next Steps

1. ✅ **Structure reorganized** - Components now in clean hierarchy
2. 🔄 **Choose i18n solution** - Select next-intl or custom approach
3. ⏳ **Extract text strings** - Move all text to translation files
4. ⏳ **Implement language switcher** - Add UI for language selection
5. ⏳ **Test all languages** - Verify all text displays correctly

---

**Last Updated:** February 14, 2026
**Restructured by:** Cascade AI
**Pattern:** Based on Pachar project structure
