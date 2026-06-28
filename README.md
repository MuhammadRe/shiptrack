# ShipTrack

A mock shipping dashboard built to demonstrate Vue 3 proficiency.

## Live Demo
[shiptrack.vercel.app](https://shiptrack.vercel.app) <!-- update after deploy -->

## Tech Stack
- Vue 3 (Composition API, `<script setup>`)
- TypeScript (strict mode)
- Pinia — global state management
- TanStack Query — server state and data fetching
- Tailwind CSS — styling
- Vite — build tool

## Features
- View a list of shipment orders with real-time filtering
- Search by order ID or customer name
- Filter by status: Pending, In Transit, Delivered
- Click any order to open a detailed side panel
- Fully keyboard-navigable with WCAG-compliant focus management
- Loading and empty states handled

## Why I built this
I built ShipTrack to deepen my Vue 3 knowledge alongside my existing React, Next.js, and Angular experience. The project covers the core Vue ecosystem: reactivity with `ref` and `computed`, state management with Pinia, data fetching patterns with TanStack Query, and component communication with `defineProps` and `defineEmits`.

## Running locally
\`\`\`bash
npm install
npm run dev
\`\`\`

## Deployed app
https://shiptrack-black.vercel.app/
