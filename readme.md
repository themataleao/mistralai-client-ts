## TS Mistral AI Library

This repo is based on the javascript library made by [Mistral AI](https://github.com/mistralai/client-js)

##  Installing the library

```bash
npm i @ai-utils/mistral
```

## Run the example files locally and test the library

1. link the library (run in root directory)

```bash
npm link
```

2. install in examples library

```
cd examples && npm link @ai-utils/mistral
```

3. run the example files

```
npx ts-node embeddings.ts
```

##  Build the library

```bash
pnpm run build
```

Build the library for publishing on npm

## Add a changeset

```bash
pnpm changeset
```

Based on the changeset github will automatically create a PR with the new release of the library.
