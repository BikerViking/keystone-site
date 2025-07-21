# Keystone Notary Group Website

This project serves a static marketing site powered by an Express server. The build step copies the site assets (HTML, CSS, and JS) into `dist/` for deployments such as Vercel.

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

## Troubleshooting

If `npm install` prints `Unknown env config "http-proxy"`, unset the
`npm_config_http_proxy` environment variable before running commands:

```bash
unset npm_config_http_proxy
```

Playwright tests require additional system libraries. Install them once per host:

```bash
npx playwright install --with-deps
```

