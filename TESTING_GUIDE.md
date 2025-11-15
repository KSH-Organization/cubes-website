# Testing Guide - i18n & Language Switcher ✅

## Quick Test URLs

### Development Server (Running Now)
```
http://localhost:3000/en      - English version (LTR)
http://localhost:3000/ar      - Arabic version (RTL)
http://localhost:3000/        - Root (auto-redirects to /en)
```

### Test All Routes

#### English Routes
- http://localhost:3000/en               ✅ Home
- http://localhost:3000/en/about         ✅ About
- http://localhost:3000/en/contact       ✅ Contact
- http://localhost:3000/en/people        ✅ People

#### Arabic Routes
- http://localhost:3000/ar               ✅ Home
- http://localhost:3000/ar/about         ✅ About
- http://localhost:3000/ar/contact       ✅ Contact
- http://localhost:3000/ar/people        ✅ People

---

## Language Switcher Testing

### Test Procedure

1. **Open English page**
   ```
   URL: http://localhost:3000/en
   Expected: English text, text left-to-right
   Look for: "العربية" button (top-right nav)
   ```

2. **Click Arabic button**
   ```
   Action: Click "العربية" button
   Expected: Navigate to /ar
   URL changes to: http://localhost:3000/ar
   ```

3. **Verify Arabic page**
   ```
   Expected: Arabic text, text right-to-left
   Look for: "English" button (now on right side in Arabic)
   All navigation in Arabic: "الرئيسية", "من نحن", "الفريق", "اتصل بنا"
   ```

4. **Click English button**
   ```
   Action: Click "English" button
   Expected: Navigate back to /en
   URL changes to: http://localhost:3000/en
   ```

5. **Verify back to English**
   ```
   Expected: Back to English, LTR layout
   Look for: "العربية" button again
   ```

---

## Visual Verification Checklist

### English Page (/en) Appearance
- ✅ Navigation text: "Home", "About", "People", "Contact Us"
- ✅ Language button: "العربية" (Arabic text)
- ✅ Text direction: Left-to-right (LTR)
- ✅ Button position: Top-right (amber-700)
- ✅ All links work: Click each navigation item

### Arabic Page (/ar) Appearance
- ✅ Navigation text: "الرئيسية", "من نحن", "الفريق", "اتصل بنا"
- ✅ Language button: "English"
- ✅ Text direction: Right-to-left (RTL)
- ✅ Button position: Still visible in navigation
- ✅ Navigation layout: Right-aligned in RTL
- ✅ All links work: Click each navigation item

---

## RTL Behavior Testing

### Verify RTL Features

1. **Text Direction**
   ```html
   Check: <html dir="rtl">
   
   On /ar: ✅ dir="rtl" present
   On /en: ✅ dir="ltr" present
   ```

2. **Margin/Padding Reversal**
   ```
   English: Margins on right (mr-*, pr-*)
   Arabic: Margins reversed to left
   
   Status: ✅ Automatically handled by CSS
   ```

3. **Navigation Alignment**
   ```
   English: Links left-aligned, button right
   Arabic: Links right-aligned, button left (in flow)
   
   Visual: Should appear mirrored correctly
   ```

4. **Form Inputs (Contact page)**
   ```
   English: Inputs left-aligned, labels on left
   Arabic: Inputs right-aligned, labels on right
   
   Test: Visit /en/contact then /ar/contact
   ```

---

## Performance Testing

### Build Performance
```bash
npm run build

Expected output:
✓ Compiled successfully in 2.6s
✓ Linting and checking validity of types
✓ Generating static pages (16/16)
```

### Development Performance
```bash
npm run dev

Expected:
Ready in ~3 seconds
Localhost 3000
```

### Load Time Test
1. Open DevTools (F12)
2. Go to Network tab
3. Visit http://localhost:3000/en
4. Check:
   - First Load JS: ~135 kB
   - Document: ~5 kB
   - Total: ~140 kB
5. Try /ar and compare - should be similar

---

## Language Switching Test Script

### Manual Test Steps

```
1. Start dev server:
   npm run dev

2. Open browser:
   http://localhost:3000/en

3. Verify English page:
   - See English navigation
   - See "العربية" button
   - Text is left-to-right

4. Click language switcher:
   - Button should be amber-700 colored
   - Click it
   - Should navigate to /ar

5. Verify Arabic page:
   - See Arabic navigation
   - See "English" button
   - Text is right-to-left
   - Navigation appears mirrored

6. Switch back to English:
   - Click "English" button
   - Should return to /en
   - Verify English layout restored

7. Test all pages:
   For each locale (/en, /ar):
   - Click: Home
   - Click: About
   - Click: People
   - Click: Contact Us
   - Each should load and switcher visible

8. Check console:
   - No errors
   - No warnings
   - All images 404s are expected (placeholder images)
```

---

## Automated Testing (Optional)

### Browser Console Tests

```javascript
// Test 1: Check RTL on Arabic
fetch('/ar')
  .then(r => r.text())
  .then(html => console.log(html.includes('dir="rtl"'))) 
  // Should print: true

// Test 2: Check LTR on English
fetch('/en')
  .then(r => r.text())
  .then(html => console.log(html.includes('dir="ltr"'))) 
  // Should print: true

// Test 3: Check language switcher exists
const switcher = document.querySelector('a[href="/ar"], a[href="/en"]');
console.log(switcher ? 'Switcher found' : 'Switcher NOT found');
// Should print: Switcher found
```

---

## Responsive Testing

### Mobile Devices
1. **iPhone 12** (390px width)
   - Language button stays visible
   - Navigation collapses (if using responsive nav)
   - RTL works on mobile Arabic

2. **iPad** (768px width)
   - Full navigation visible
   - Language switcher in nav
   - All links clickable

3. **Desktop** (1920px+)
   - Full layout displayed
   - All navigation visible
   - Switcher positioned correctly

---

## Error Testing

### Expected Behaviors

1. **Invalid locale** (e.g., /fr)
   ```
   Expected: 404 not-found page
   Status: ✅ Handled by notFound()
   ```

2. **Missing message key** (if using translations)
   ```
   Expected: Falls back to key name
   Status: ✅ next-intl handles gracefully
   ```

3. **Old routes without locale** (e.g., /about)
   ```
   Expected: Static 404 page exists
   Status: ✅ Old routes available as fallback
   ```

---

## Production Deployment Test

### Before Deploying

```bash
# 1. Build for production
npm run build

# Expected:
# ✓ Compiled successfully
# ✓ Generating static pages (16/16)
# No errors

# 2. Start production server
npm start

# Expected:
# Ready on http://localhost:3000

# 3. Test production build
curl http://localhost:3000/en | grep -i "dir="
# Should output: dir="ltr"

curl http://localhost:3000/ar | grep -i "dir="
# Should output: dir="rtl"

# 4. Performance check
curl -I http://localhost:3000/en
# Check response time < 100ms
# Check headers for cache-control
```

---

## Common Issues & Solutions

### Issue: Language button not visible
**Solution**: 
- Check browser zoom (reset to 100%)
- Check responsive width
- Verify no CSS override

### Issue: RTL text not working
**Solution**:
- Verify URL is `/ar` (not `/AR`)
- Check browser DevTools: `<html dir="rtl">`
- Refresh page (hard refresh Ctrl+Shift+R)

### Issue: Language switch goes to 404
**Solution**:
- Verify `/en` and `/ar` routes are built
- Check Next.js routes: `npm run build`
- Verify locale in URL matches 'en' or 'ar'

### Issue: Images show 404
**Solution**:
- This is expected (placeholder images missing)
- Not related to i18n or language switcher
- Doesn't affect language functionality

---

## Test Results Template

```
Test Date: _______________
Tested By: ________________

English Page (/en):        [ ] PASS  [ ] FAIL
Arabic Page (/ar):         [ ] PASS  [ ] FAIL
Language Switcher:         [ ] PASS  [ ] FAIL
RTL Text Direction:        [ ] PASS  [ ] FAIL
Navigation Links (En):     [ ] PASS  [ ] FAIL
Navigation Links (Ar):     [ ] PASS  [ ] FAIL
All 16 Routes Generated:   [ ] PASS  [ ] FAIL
Build Time < 3 seconds:    [ ] PASS  [ ] FAIL
No TypeScript Errors:      [ ] PASS  [ ] FAIL
No ESLint Errors:          [ ] PASS  [ ] FAIL

Overall Status: [ ] PASS ALL  [ ] NEEDS FIXES

Notes:
_________________________________________________________
_________________________________________________________
_________________________________________________________
```

---

## Quick Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Run linting
npm run lint

# Open in browser
# English: http://localhost:3000/en
# Arabic:  http://localhost:3000/ar
```

---

**Testing Status: ✅ READY**

All features are implemented and ready for testing. The development server is running and all routes are accessible!
