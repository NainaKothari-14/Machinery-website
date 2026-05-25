# Hero background

**Do not use a Figma screenshot** (text/logo baked into the image looks broken on the site).

Use a **plain photo** only:
- Your workshop / machines
- Or a clean industrial photo with no text

Save as `hero-bg.jpg` then in `src/content/home.js` set:

```javascript
localBackground: contentAsset("/images/hero/hero-bg.jpg", true, "..."),
```
