# Quick Start: SEO Setup

This is a condensed checklist to get your SEO-optimized site live quickly.

## ⚡ 5-Minute Setup

### 1. Environment Variables (2 min)

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Update Site Config (2 min)

Edit `src/lib/seo.ts`:

```typescript
export const siteConfig = {
  name: 'YourCompany',                    // ← Change this
  title: 'Your Site Title',               // ← Change this
  description: 'Your description',        // ← Change this
  url: 'https://yourdomain.com',         // ← Change this
  twitterHandle: '@yourhandle',          // ← Change this
  // ...
};
```

### 3. Build & Test (1 min)

```bash
npm run build
npm start
```

Visit: `http://localhost:3000/sitemap.xml` ✅
Visit: `http://localhost:3000/robots.txt` ✅

## 📋 Pre-Launch Checklist

### Critical (Must Do)
- [ ] Updated `siteConfig` in `src/lib/seo.ts`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in `.env.local`
- [ ] Created Open Graph image (1200x630px)
- [ ] Generated favicon set
- [ ] Tested all pages load correctly
- [ ] Verified sitemap generates properly

### Important (Should Do)
- [ ] Added Google Analytics ID
- [ ] Verified structured data with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Checked mobile responsiveness
- [ ] Tested page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Reviewed all page titles and descriptions

### Nice to Have
- [ ] Created custom 404 design
- [ ] Added alt text to all images
- [ ] Optimized images (compress, resize)
- [ ] Set up Search Console
- [ ] Configured social media profiles

## 🎨 Image Assets Needed

### Open Graph Image
- **Size**: 1200 x 630 px
- **Format**: JPG or PNG
- **Location**: `/public/images/og-image.jpg`
- **Content**: Logo + tagline or key visual

### Favicons
Use [RealFaviconGenerator](https://realfavicongenerator.net/):

1. Upload your logo (square, 512x512px minimum)
2. Download the package
3. Extract to `/public/`

Required files:
- `/public/favicon.ico` (32x32)
- `/public/apple-touch-icon.png` (180x180)
- `/public/icons/icon-192x192.png`
- `/public/icons/icon-512x512.png`

## 🚀 Post-Launch (Day 1)

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://yourdomain.com`
3. Verify via HTML tag:
   - Add verification code to `.env.local`:
     ```env
     NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
     ```
   - Redeploy
   - Click "Verify" in Search Console
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Google Analytics
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy
5. Verify in GA real-time reports

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

## 📊 Week 1 Monitoring

### Daily
- Check GA4 for traffic
- Monitor Search Console for errors

### Weekly
- Review Core Web Vitals in Search Console
- Check page indexing status
- Review any crawl errors

## 🔧 Common Issues

### Sitemap not generating?
```bash
# Check your build output
npm run build
# Look for: "Generated sitemap"
```

### Metadata not showing in social previews?
- Verify OG image exists at `/public/images/og-image.jpg`
- Check image is exactly 1200x630px
- Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### Pages not being indexed?
1. Check `robots.txt` doesn't block pages
2. Verify sitemap is submitted
3. Use "Request Indexing" in Search Console
4. Check for `noindex` meta tags

### Poor performance score?
1. Optimize images (use WebP/AVIF)
2. Check third-party scripts
3. Review [PageSpeed Insights](https://pagespeed.web.dev/) recommendations
4. Ensure no render-blocking resources

## 🎯 Success Metrics

### Immediate (Week 1)
- ✅ Sitemap submitted
- ✅ Google Search Console verified
- ✅ Analytics tracking confirmed
- ✅ No critical errors in Search Console

### Short Term (Month 1)
- 🎯 Pages indexed by Google
- 🎯 Lighthouse SEO score = 100
- 🎯 Performance score > 90
- 🎯 First organic traffic

### Medium Term (Month 3)
- 🎯 Ranking for brand terms
- 🎯 Growing organic traffic
- 🎯 Rich results appearing
- 🎯 Improving keyword positions

## 📚 Resources

- **Full Guide**: `docs/SEO-GUIDE.md`
- **Implementation**: `docs/SEO-IMPLEMENTATION.md`
- **Site Config**: `src/lib/seo.ts`
- **Test Tools**:
  - [PageSpeed Insights](https://pagespeed.web.dev/)
  - [Rich Results Test](https://search.google.com/test/rich-results)
  - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 💡 Pro Tips

1. **Don't Rush**: Quality content > quick launch
2. **Mobile First**: 60%+ traffic is mobile
3. **Monitor Weekly**: Set calendar reminders
4. **Content is King**: Best SEO is great content
5. **Be Patient**: SEO takes 3-6 months

## 🆘 Need Help?

1. Check `docs/SEO-GUIDE.md` for detailed troubleshooting
2. Verify all steps in `docs/SEO-IMPLEMENTATION.md`
3. Test with validation tools listed above
4. Review Search Console for specific errors

---

**Ready to Launch?** ✅

Once you've completed the Critical checklist above, you're ready to deploy!

```bash
# Final check
npm run build
npm start

# Deploy to production
# (Vercel, Netlify, or your hosting provider)
```

**After Deploy:**
1. Test live site with Lighthouse
2. Submit sitemap to search engines
3. Verify analytics tracking
4. Share on social media (test OG images)

🎉 **Congratulations!** Your SEO-optimized site is live!
