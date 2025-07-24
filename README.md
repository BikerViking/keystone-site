# Keystone Notary Group Website

This project serves a static marketing site powered by an Express server. The build step copies the site assets (HTML, CSS, and JS) into `dist/` for deployments such as Vercel.

## Requirements

- Node.js 20 LTS (the CI environment uses this version). Run `nvm use` to match the version in `.nvmrc`.

## Development

Install dependencies and run the server:

```bash
npm install
npm start
```

## Testing

Run unit tests and build validation:

```bash
npm test
npm run build
```

## Formatting

Ensure source files follow the project's style guide:

```bash
npm run format
```

## Viewing the Site

After running `npm run build`, open `dist/index.html` in your browser to preview the compiled site.
