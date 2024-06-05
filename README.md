# Coding Challenge

Created by Esteban Arce

## Description

This is the documentacion for the Backend side of the application programming challenge provided by CookUnity. Here you can find the full list of characteristics of the application. e.g. the tech stack, the database implementation, the deployment, caviats, etc.

## Tech Stack

This project was created using [Next.js](https://nextjs.org/) on top of React.js and [TypeScript](https://www.typescriptlang.org/). For state manager I used [Zustand](https://github.com/pmndrs/zustand). For testing i've used [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/). For UI and components, I used [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). For forms I used [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) for schemas. And some other minor librearies.

## Deployment

This backend application is deployed on [Vercel](https://vercel.com/). So the frontend connect directly to it without the need to run locally.
The URL for this repository is [Frontend Production](https://fe-cook-unity.vercel.app).

## Installation

```bash
yarn install
```

## Running the app

For Development Mode:

```bash
yarn dev
```

For Production Mode:

```bash
yarn build
yarn start
```

For Testing

```bash
yarn test
```

## Caviats

There are certain parts of the challenge that I was unable to complete do to time constraints. Some implementations are half way done. So you may encounter issues and code without using.

## Project Structure

I will try to explain the file structure of this project.
On the root of the repository we have all the config files. Also we have the testing allocation folder [**test**](./__test__).
Then we have the source 'src' folder with all the source code. I've split the code in...

[App](./src/app) All the routes with the corresponding pages.
[Components](./src/components) All the complex components.
[Hooks](./src/hooks) All the hooks.
[Auxiliary](./src/libraries) All the auxiliary funct.
[State Management](./src/stores) All the state management.
[Types](./src/types) All the types declarations.
[UI](./src/ui) All the UI components.
[Views](./src/views) All the views components.

This structure is based on different articles combined with experience. For a better control, redability and scalability.
Also I've used index on folders to have a clean export of the components and avoid nesting imports.

Also implemented a FACADE pattern for the state management. This allows me to control all the components hooks with a single interface, regardless of the implementation service, in this case the state management service.

## Nice to have

- Better styles and design.
- Add more test coverage.
- Better data management and parsing.
- Add more features like auth, route filter, middleware for protection, pagination, and more.
