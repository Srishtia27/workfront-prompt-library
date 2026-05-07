# Workfront Prompt Library

A static, self-contained reference library of prompts for Workfront and Workfront Fusion. Browse by category, search across titles/descriptions/tags, copy a prompt, and paste it into the AI tool of your choice.

---

## What's in here

```
workfront-prompt-library/
├── index.html      # Page structure
├── styles.css      # All styling (no frameworks, no build step)
├── data.js         # Prompts and categories — edit this to add/change content
├── app.js          # Filtering, search, rendering, modal logic
└── README.md       # This file
```

No frameworks. No build step. No npm install. Just open it.

---

## Run it locally

You have two options. Option B (a tiny local server) is recommended because the **Copy** button uses the Clipboard API, which most browsers block when a page is opened directly from disk via `file://`.

### Option A — Just open the file (quickest)

Double-click `index.html`. The page works, but the Copy buttons may silently fail in some browsers. Use the View modal and copy from the prompt panel instead.

### Option B — Run a local web server (recommended)

Open a terminal in this folder, then pick whichever you have installed:

**Python 3** (preinstalled on macOS and most Linux distros)
```bash
python3 -m http.server 8000
```

**Node.js**
```bash
npx serve .
# or
npx http-server -p 8000
```

**PHP**
```bash
php -S localhost:8000
```

Then open your browser to:

```
http://localhost:8000
```

Stop the server with `Ctrl+C`.

### Option C — VS Code Live Server

If you use VS Code, install the "Live Server" extension, right-click `index.html`, and choose **"Open with Live Server"**.

---

## Editing prompts

All content lives in `data.js`. To add a new prompt, copy an existing object in the `promptData` array and edit the fields:

```js
{
  id: 'unique-prompt-id',                      // used as DOM key — must be unique
  title: 'Card title shown to users',
  category: 'Custom Forms & Fields',           // must match a name in `categories`
  badge: 'forms',                              // CSS class: forms | projects | requests | fusion | reporting | access | governance
  icon: '✎',                                   // a single character or emoji shown in the badge
  desc: 'Short description shown on the card.',
  tags: ['workfront', 'tag-two'],
  prompt: `The full prompt text here.

Use {{placeholders}} for fields the user should replace.`
}
```

To add a new **category**, add an entry to the `categories` array in `data.js` and (optionally) a matching subtitle in `sectionSubtitles` inside `app.js`.

---

## Hosting it somewhere

Because everything is static, you can drop the folder onto any static host:

- GitHub Pages — push the folder and enable Pages on the branch
- Netlify / Vercel — drag-and-drop the folder into a new site
- S3 / CloudFront, Azure Blob, Cloudflare Pages, etc.
- An internal Nginx or Apache server

There is no backend, no database, and no environment variables.

---

## Browser support

Anything modern. The page uses the native `<dialog>` element, CSS grid, and the Clipboard API — all supported in current versions of Chrome, Edge, Firefox, and Safari.
