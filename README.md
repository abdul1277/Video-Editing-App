# FrameForge Studio

A browser-based video editing studio prototype built with Next.js, React, TypeScript and Lucide icons. The goal is to grow this into a capable CapCut-style editor with a polished creator workflow.

## Current prototype

- Import local video, audio and image files into the browser session
- Preview video and image assets; play/pause, seek to start, and jump forward
- Project name editing, canvas aspect-ratio selection and a responsive editing workspace
- Media library, video/text/audio track concepts, visual filter previews, playback speed and volume controls
- Dark, creator-focused UI with timeline and inspector panels

## Important limitations

This is the first UI prototype, not yet a full CapCut replacement. The timeline, trim controls, effects and text overlays are partially visual prototypes. Export currently downloads the selected source file; it does not render a multi-track edited video yet. Media is held in browser memory and is not persisted after the session.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Import this GitHub repository in Vercel and use the default Next.js build settings. Build command: `npm run build`; output settings can remain on automatic detection. No environment variables are required for this prototype.

## Roadmap

1. Real timeline state model with drag/drop, multi-track clips and trim/split operations
2. Reliable browser-based export for supported workflows, followed by an FFmpeg/WASM or server-rendering pipeline
3. Audio waveform, transitions, keyframes, text styling and caption tools
4. Undo/redo, autosave/project persistence, keyboard shortcuts and accessibility
5. Optional AI tools (captions, transcript-based editing and assistive effects)

## Stack

- Next.js App Router
- React + TypeScript
- Lucide React
- HTML media elements and browser object URLs
