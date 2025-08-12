# Web Gallery

A minimal image gallery built with Next.js App Router, Tailwind v4, Drizzle ORM (Postgres), Clerk (auth), UploadThing (uploads), Upstash (rate limiting), Sentry (errors), and PostHog (analytics).

## Features
- Auth-gated gallery (Clerk)
- Upload images (UploadThing) with rate limit (Upstash)
- Image grid with framed previews
- Per-image modal page with metadata and delete (Server Actions)
- Dark theme by default (Tailwind CSS variables)
- Error tracking (Sentry) and analytics (PostHog)

## Usage
1. Sign in (top-right). The gallery is only visible to authenticated users.
2. Upload images using the upload button in the navbar. A toast shows upload progress.
3. Click an image to open the modal route; see name, uploader, and created date.
4. Delete an image from the modal via the Delete button. The app revalidates and redirects to the gallery.

## Tech stack
- Next.js 15 App Router, Server Components, Server Actions
- Tailwind CSS v4, Sonner toasts
- Drizzle ORM + Postgres (Neon)
- Clerk auth
- UploadThing for file uploads
- Upstash Ratelimit (10 requests / 100s by default)
- Sentry for error tracking
- PostHog for analytics (client + server)

## Roadmap
- [x] Make it deloy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up a database
- [x] Attach database to UI
- [x] Add authentification (w/ clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [X] Routing/image page (parallel route)
- [X] Update upload button to be less cringes
- [X] ShadUIify (specifically toasts)
- [X] Analytics (posthog)
- [X] Delete button (w/ Server Actions)
- [X] Ratelimiting (upstash)

## Additional Features/Tasks
- [ ] Fix the page layout for images of different resolutions
- [ ] Selecting images on gallery page
- [ ] "infinite scoll"
- [ ] Folders/albums

