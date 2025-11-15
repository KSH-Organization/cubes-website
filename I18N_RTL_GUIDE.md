# i18n & RTL Implementation Guide

## ✅ What Was Implemented

Your CUBES website now has full internationalization (i18n) support with:

1. **English (en)** - LTR (Left-to-Right)
2. **Arabic (ar)** - RTL (Right-to-Left)

### Directory Structure Created

```
src/
  ├── i18n.ts                 # i18n configuration
  ├── messages/
  │   ├── en.json             # English translations
  │   └── ar.json             # Arabic translations
  └── app/
      └── [locale]/
          ├── layout.tsx       # Root layout with language switcher
          ├── page.tsx         # Home page
          ├── about/
          │   └── page.tsx     # About page
          ├── contact/
          │   └── page.tsx     # Contact page
          └── people/
              └── page.tsx     # People page
```

## 🌐 How to Access Different Languages

### Development Server
```bash
npm run dev
```

Then visit:
- **English**: http://localhost:3000/en
- **Arabic**: http://localhost:3000/ar
- **Root**: http://localhost:3000/ (redirects to /en by default)

### URL Structure
- `/en` - English version (LTR)
- `/en/about` - English About page
- `/ar` - Arabic version (RTL)
- `/ar/about` - Arabic About page (with RTL styling)
- `/ar/contact` - Arabic Contact page
- `/ar/people` - Arabic People page

## 🎨 Language Switcher

The language switcher is built into the navigation bar. Click the language button in the top-right to toggle between:
- **English** button shows when on Arabic
- **العربية** (Arabic) button shows when on English

## 📝 Translation Files

### English Translations (`src/messages/en.json`)
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "people": "People",
    "contact": "Contact Us"
  },
  "hero": {
    "title": "Building Sudan's Future",
    "subtitle": "Your trusted partner in real estate and project management"
  }
  // ... more translations
}
```

### Arabic Translations (`src/messages/ar.json`)
```json
{
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن",
    "people": "الفريق",
    "contact": "اتصل بنا"
  },
  "hero": {
    "title": "بناء مستقبل السودان",
    "subtitle": "شريكك الموثوق في العقارات وإدارة المشاريع"
  }
  // ... more translations
}
```

## 🔄 RTL Support

### How RTL Works

When accessing `/ar`:
1. The `html` element gets `dir="rtl"`
2. All text automatically flows right-to-left
3. Global CSS handles margin/padding reversals
4. Tailwind classes automatically adapt

### CSS RTL Utilities

The following utilities are available in `globals.css`:

```css
[dir="rtl"] .mr-2 { margin-left: 0.5rem; margin-right: 0; }
[dir="rtl"] .ml-4 { margin-right: 1rem; margin-left: 0; }
[dir="rtl"] .pr-4 { padding-left: 1rem; padding-right: 0; }
[dir="rtl"] .pl-4 { padding-right: 1rem; padding-left: 0; }
```

### Example Layout Component

```tsx
// Navigation links work in both LTR and RTL
<div className="flex items-center gap-6">
  <Link href={`/${locale}/about`}>About</Link>
  <Link href={`/${locale}/contact`}>Contact</Link>
</div>

// On Arabic (/ar), the browser automatically reverses the flex direction
// On English (/en), it stays left-to-right
```

## 🛠️ Configuration Files

### `src/i18n.ts`
Defines supported locales and loads translations dynamically:
```typescript
export const locales = ['en', 'ar'];
export const defaultLocale = 'en';
```

### `next.config.ts`
Integrates next-intl plugin with Next.js:
```typescript
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
export default withNextIntl(nextConfig);
```

### `src/app/[locale]/layout.tsx`
Root layout with:
- NextIntlClientProvider wrapper
- Locale detection and validation
- Language switcher component
- RTL/LTR directives

## 📱 Responsive Design

RTL works seamlessly with Tailwind's responsive breakpoints:

```tsx
// These automatically adapt to RTL
className="md:grid-cols-2 gap-4"
className="flex items-center justify-between"
className="rounded-3xl shadow-lg"
```

## 🚀 Deployment

When deploying to production:

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

3. Routes will be available at:
- `yourdomain.com/en` - English
- `yourdomain.com/ar` - Arabic

## ✨ Adding More Translations

To add new translations:

1. **Add to `src/messages/en.json`**:
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

2. **Add to `src/messages/ar.json`**:
```json
{
  "newSection": {
    "title": "العنوان الجديد",
    "description": "الوصف الجديد"
  }
}
```

3. **Use in your component**:
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
}
```

## 🔧 Using Translations in Components

### Client Components
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  
  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </section>
  );
}
```

### Server Components
```tsx
import { getTranslations } from 'next-intl/server';

export default async function About() {
  const t = await getTranslations();
  
  return (
    <section>
      <h2>{t('about.title')}</h2>
    </section>
  );
}
```

## 📊 Testing Checklist

- [ ] Visit `/en` - English version loads correctly
- [ ] Visit `/ar` - Arabic version loads, text is RTL
- [ ] Click language switcher on `/en` - navigates to `/ar`
- [ ] Click language switcher on `/ar` - navigates to `/en`
- [ ] Check mobile view - responsive design works
- [ ] All navigation links work in both languages
- [ ] Forms work properly in both directions
- [ ] Images display correctly in both modes
- [ ] Build completes without errors: `npm run build`
- [ ] Production build runs: `npm start`

## ⚠️ Common Issues & Solutions

### Issue: Pages not loading
**Solution**: Ensure locale folder structure matches: `src/app/[locale]/`

### Issue: Images 404
**Solution**: Image files are missing from `public/images/`. Add placeholder images or use existing ones.

### Issue: RTL text not working
**Solution**: Check that `dir="rtl"` is on the `<html>` element in layout.tsx

### Issue: Language switcher not working
**Solution**: Verify `next-intl` is installed: `npm install next-intl`

## 📚 Next Steps

1. **Test the current setup**:
```bash
npm run dev
```

2. **Build for production**:
```bash
npm run build
```

3. **Add more translations** as needed in `src/messages/` files

4. **Customize RTL styling** by adding more utilities to `globals.css`

5. **Deploy to your hosting** platform

## 🎯 Key Features Implemented

✅ Multi-language support (English & Arabic)
✅ RTL (Right-to-Left) text direction for Arabic
✅ Automatic language switching via URL
✅ Persistent language preference (via URL structure)
✅ Language switcher in navigation
✅ Responsive design in both directions
✅ TypeScript support
✅ SEO-friendly URLs
✅ Static generation for performance
✅ Fallback to English for undefined translations

---

**Your CUBES website is now fully internationalized! 🌍**
