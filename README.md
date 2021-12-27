# Quebec3 - Gatsby

Quebec3 Blog - Revamp using Gatsby

## Development

- Run `npm install` (in case of version conflicts, add `--legacy-peer-deps`)
- Run `npm run dev`
- Open `http://localhost:8000`
- GraphQL playground is available at `http://localhost:8000/___graphql`

## Deployment

- Run `npm run build` to build UI
- Email service is provided by daishodesign

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

`NODE_ENV` ('development' | 'production') is automatically added to Webpack by Gatsby, but only for client-side. For server-side code (e.g. ./services/\*), this has to be explicitly added in `.env` file.
