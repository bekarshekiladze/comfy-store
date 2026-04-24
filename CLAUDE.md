# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (flat config, ESLint 9)
```

No test runner is configured.

## Tech Stack

- **React 18** + **Vite 7** + **React Router DOM 6** (loaders pattern)
- **Tailwind CSS v4** + **DaisyUI v5**; custom `.align-element` utility (`max-w-6xl mx-auto px-8`) for centered containers
- **Axios** against a Strapi v4 backend at `https://strapi-store-server.onrender.com/api`
- **Redux Toolkit** — wired up; `store.js` mounts a `cart` reducer from `entities/cart`
- **react-toastify** — `<ToastContainer>` is mounted in `main.jsx`
- Theme toggle: `winter` (light) ↔ `dracula` (dark), persisted in `localStorage`, applied via `data-theme` on `<html>`

## Architecture — Feature Sliced Design (FSD)

This project follows **Feature Sliced Design**. The layer order (high → low, imports only go downward):

```
app → pages → widgets → features → entities → shared
```

```
src/
├── app/          # Entry point, router, Redux store, global CSS
├── pages/        # Route segments; each may contain ui/, api/, loader.js
├── widgets/      # Composite UI sections assembled from lower layers
├── features/     # User interactions / use-case logic (e.g. auth)
├── entities/     # Business objects with their models (e.g. cart slice)
└── shared/       # Framework-agnostic: api client, ui primitives, utils, assets
```

Every layer folder uses barrel `index.js` exports — always import from the barrel, never from internal paths of another slice.

### Data Flow

1. Route loaders (co-located in `pages/<slice>/loader.js`) call `shared/api/` and return data.
2. Page components read data with `useLoaderData()` and pass it down to widgets as props.
3. Cart state is global via Redux (`entities/cart/model/cartSlice`); actions: `addItem`, `removeItem`, `editItem`, `clearCart`.

### Routing

`app/App.jsx` builds a `createBrowserRouter` tree. `HomeLayout` (header + navbar + `<Outlet>`) wraps all in-app routes. `/login` and `/register` sit outside `HomeLayout`. Route-level error boundaries use the shared `ErrorElement`.

### Strapi Response Shape

Product data is nested under `.attributes` (Strapi v4 convention): `product.attributes.{ title, price, image, description, colors, company }`.

### Pages with loaders

| Route | Loader location |
|---|---|
| `/` (Landing) | `pages/landing/loader.js` |
| `/products` | `pages/products/api/loader.js` |
| `/products/:id` | `pages/singleProduct/loader.js` |
