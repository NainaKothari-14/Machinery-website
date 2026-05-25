# Website assets folder

Copy your social & media files here once — the site reads paths from `src/content/`.

```
public/
  images/
    hero/          ← plain workshop photo (no text in image)
    logo/          ← company logo
    machines/      ← product photos (enable imageEnabled in machines.js)
    gallery/       ← Instagram / install photos
    posts/         ← Instagram post images
    about/
```

## Social → website map

| Your content | Website file |
|--------------|--------------|
| YouTube video ID | `content/gallery.js` + `content/machines.js` (`youtubeId`) |
| Instagram post image | `public/images/posts/` + `content/posts.js` (`enabled: true`) |
| Company name, phone, city | `content/company.js` |
| What we do cards | `content/whatWeDo.js` |
| Why choose us | `content/whyChooseUs.js` |
| Home page sections | `content/home.js` |

## One file for business info

Edit **`src/content/company.js`** only (re-exported as `data/companyInfo.js`).
