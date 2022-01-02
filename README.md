# Quebec3 - Gatsby

Quebec3 Blog - Revamp using Gatsby

## Development

- Run `npm install` (in case of version conflicts, add `--legacy-peer-deps`)
- Run `npm run dev`
- Open `http://localhost:8000`
- GraphQL playground is available at `http://localhost:8000/___graphql`

## Deployment

### Github actions

CI/CD using Github actions has been set. Pushing changes to master triggers the runner.

### CI/CD process

1. Pushing your changes to master triggers Github actions
2. Action runner copies `dist/` to `/var/www/quebec3/` after build
3. .env file has been set within `/var/www/quebec3/`

PM2 is set as

```bash
pm2 start --name qc3 /home/ubuntu/actions-runner/deploy/quebec3-v2/quebec3-v2/server/index.js --watch
```

- Run `npm run build` to build UI
- Run `pm2 start --name quebec3 src/server/server.js --watch` to run the server (Required for production)

You cannot complete the deployment only with Git Hooks anyway, as you have to manually build the application.
I've also tried to set up Github actions, but it didn't complete the build process with unknown reason. It may be due to lack of memory as I tried that before creating a swap file.
To increase RAM by creating a swap file, read [this article](<https://github.com/kdaisho/Blog/wiki/How-to-increase-memory-(RAM)-on-DigitalOcean-Droplets-for-free>).

## Eslint

Eslint has been set. To use it, install eslint either locally or globally (globally is recommended)

## Troubleshooting

### I can't see my changes

Sometimes you don't see all changes you make. It's probably the cache. Even in development environment, Gatsby eagerly uses it. You need to clear the cache as well as `public` folder.

- Stop the development server
- Run `npm run clean` - this removes `.cache` and `public` folder

Make sure to stop the server first, otherwise the clean command cannot remove `public` folder and you won't be able to run the server again

### I can't preview my custom 404 page

When developing using `gatsby develop`, Gatsby uses a default 404 page that overrides your custom 404 page. However, you can still preview your 404 page by clicking"Preview custom 404 page". The custom 404 page is available out of box in production.

### `gatsby serve` not working

Before running `npm run serve`, run `npm run build` first.

## Environment variables

`NODE_ENV` ('development' | 'production') is automatically added to Webpack by Gatsby, but only for client-side. For server-side code (e.g. ./server/\*), this has to be explicitly added in `.env` file.
