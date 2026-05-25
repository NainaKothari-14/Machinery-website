# Website content guide

Edit files in **`src/content/`** only. UI updates automatically.

---

## Enable images (important)

Images are **hidden until you enable them**. No broken placeholders.

```javascript
// In gallery.js, posts.js, home.js, or machines.js:
enabled: true   // ← flip this AFTER adding the file to public/images/...
```

### Gallery photos — `src/content/gallery.js`

1. Save photo → `public/images/gallery/my-photo.jpg`
2. Set `enabled: true` on that item
3. Photo section appears on Gallery page

### Instagram posts — `src/content/posts.js`

1. Save post image from Instagram → `public/images/posts/cup-sealer.jpg`
2. Set `enabled: true` on that post
3. Posts show on **About** and **Home** (about section)

### Machine product photo — `src/content/machines.js`

```javascript
image: "/images/machines/my-machine.jpg",
imageEnabled: true,   // add this line when file exists
```

Until `imageEnabled: true`, the catalog uses a **category machinery photo** (professional look). Detail page shows **YouTube demo** if `youtubeId` is set.

### Home hero — `src/content/home.js`

- Right side: **3 industrial photos** (curated — always visible, Figma-style)
- Your own hero background: add `public/images/hero/hero-bg.jpg` and set `hero.localBackground.enabled: true`

---

## Videos (not repeated on home)

- **Home:** small “Watch demos” bar → links to Gallery
- **Gallery:** all YouTube embeds (`#videos`)
- **Machine detail:** one demo video per machine (if `youtubeId` set)

Add video in `src/content/gallery.js` → `galleryVideoList`.

---

## Company & social

| File | What |
|------|------|
| `company.js` | Phone, email, address |
| `navigation.js` | Instagram, YouTube links |
| `machines.js` | Product catalog |
| `posts.js` | Instagram-style posts |

---

## Quick checklist for “finished” look

1. Add 4–6 Instagram images → enable in `posts.js`
2. Add 3–6 real machine photos → `imageEnabled: true` in `machines.js`
3. Add workshop/factory photos → `enabled: true` in `gallery.js`
4. Update real phone in `company.js`

```bash
npm run dev
```
