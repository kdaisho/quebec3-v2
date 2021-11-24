# Quebec3 - Gatsby

Quebec3 Blog - Revamp using Gatsby

## Development

- Run `npm install` (in case of version conflicts, add `--legacy-peer-deps`)
- Run `npm run dev`
- Open `http://localhost:8000`
- GraphQL playground is available at `http://localhost:8000/___graphql`

## How to clear cache

- Stop the development server
- Run `npm run clean` - this removes `.cache` and `public` folder

Make sure to stop the server first, otherwise the clean command cannot remove `public` folder and you won't be able to run the server again
