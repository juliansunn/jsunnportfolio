# juliansunn.com

My portfolio. Next.js 16 (App Router), React 19, plain CSS, no CMS.

All content lives in [`lib/content.ts`](lib/content.ts). Photos go in `public/`; a photo slot with `src: null` renders as a placeholder.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run lint && npm run typecheck
```

Deployed on Vercel at https://www.juliansunn.com.
