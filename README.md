# turborepo-next-prisma-tailwind-shadcn

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
git clone https://github.com/Pulpss/turborepo-next-prisma-tailwind-shadcn.git
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both applications in the `apps` folder
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `config`: `tsconfig.json`s used throughout the monorepo as well as `tailwind.config.js`s used in `ui` and `web`

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

If you want to build each package/app individually, you can use the workspaces command matching your package manager. For yarn :

````sh
yarn workspace ui build
````

Or you can simply use the included turborepo commands :

````sh
yarn build
````
or
````sh
yarn dev
````

### Utilities

This repo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Shadcn](https://ui.shadcn.com/) for UI/UX components
- [Prisma](https://www.prisma.io/) for easy database manipulations

