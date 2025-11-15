# i18n Quick Start

## 🚀 Getting Started

### Run Development Server
```bash
npm run dev
```

### Access Different Languages
- **English**: http://localhost:3000/en
- **Arabic**: http://localhost:3000/ar

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/i18n.ts` | i18n configuration |
| `src/messages/en.json` | English translations |
| `src/messages/ar.json` | Arabic translations |
| `src/app/[locale]/layout.tsx` | Root layout with language switcher |
| `src/app/[locale]/page.tsx` | Localized home page |

## 🌐 URL Structure

```
/en                  → English home
/en/about            → English about
/en/contact          → English contact
/en/people           → English people

/ar                  → Arabic home (RTL)
/ar/about            → Arabic about (RTL)
/ar/contact          → Arabic contact (RTL)
/ar/people           → Arabic people (RTL)
```

## 🎛️ Language Switcher

Located in top-right of navigation bar:
- Shows "العربية" when on English
- Shows "English" when on Arabic
- Click to toggle languages

## 📝 Adding Translations

1. Add English text to `src/messages/en.json`:
```json
{
  "mySection": {
    "title": "My English Title"
  }
}
```

2. Add Arabic text to `src/messages/ar.json`:
```json
{
  "mySection": {
    "title": "عنواني بالعربية"
  }
}
```

3. Use in component:
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  return <h1>{t('mySection.title')}</h1>;
}
```

## 🎨 RTL Styling

RTL is automatic! The `<html>` element gets `dir="rtl"` on Arabic routes.

All text, borders, and padding automatically adapt.

## ✅ Testing

```bash
# Development
npm run dev

# Linting
npm run lint

# Build
npm run build

# Production
npm start
```

## 📦 Project Structure

```
cubes-website/
├── src/
│   ├── i18n.ts
│   ├── messages/
│   │   ├── en.json
│   │   └── ar.json
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── about/page.tsx
│   │       ├── contact/page.tsx
│   │       └── people/page.tsx
│   └── components/ (shared across locales)
├── next.config.ts
└── tailwind.config.ts
```

## 🔗 Language Switching Example

In navigation component:
```tsx
<Link href={`/${otherLocale}`}>
  {locale === 'en' ? 'العربية' : 'English'}
</Link>
```

## 💡 Tips

- ✅ All routes automatically support both `/en` and `/ar` prefixes
- ✅ Components shared across locales (only translations differ)
- ✅ Images work the same in both directions
- ✅ Forms automatically adapt to RTL
- ✅ Use Tailwind classes - they adapt automatically
- ✅ Links should use `/${locale}` prefix

---

**Need more help?** See `I18N_RTL_GUIDE.md` for detailed documentation.
