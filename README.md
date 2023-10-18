# smol-cli

<!-- Badges -->

[![license badge](https://img.shields.io/badge/license-mit-blue?style=for-the-badge&labelColor=blue)](https://github.com/GITHUB_USERNAME/smol-cli/blob/main/LICENSE)

> A typescript cli template powered by typescript, prettier, zx, esbuild, and pkg

## Before using this template

Replace the following templated variables globally:

```
YOUR_NAME (author's name)
YOUR_EMAIL (author's email)
GITHUB_USERNAME (github username)
smol-cli (package name)
smol--cli (package name)
```

## Why?

I needed a lightweight approach that had all the tools I preferred using that resulted in smol binaries that worked across all major platforms.

- _Is this the best way to develop a CLI in javascript?_ **Doubtful.**
- _Is it usable?_ **By my standards sure.**
- _Is the output small?_ **No... its `smol` :wink:**.

## How does this work?

### Getting started

Install the dreaded :skull: node_modules :skull: with your package manager of choice:

```
npm i
```

### Developing

1. Run the `watch` script to create a minified CommonJS bundle at `dist/out.cjs` (using [esbuild](https://github.com/evanw/esbuild)) and update it when changes are made to any files in `./src/**/*`.

2. There is no testing framework (yet) so to test it run `node ./dist/out.cjs`.

3. [`zx`](https://github.com/google/zx) utils can be used to run shell commands, get options and arguments, and access common utils (`path`, `fs`, `fetch`, `cd`, `echo`, etc).

4. `src/utils.ts` includes a couple functions for normalizing shorthand argument names and showing a formatted help message.

### Compiling binaries

[`pkg`](https://github.com/vercel/pkg) is used to create binaries for all major platforms. The `package` script will create binaries for windows, macos, and linux from the `./dist/out.cjs` bundle.

## Scripts

| Script    | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `compile` | Bundles the source files from the `src` directory into a single CommonJS module, minifying the output. |
| `watch`   | Runs the `compile` script in watch mode, recompiling automatically on source file changes.             |
| `package` | Packages the compiled CommonJS module into standalone executables for Windows, macOS, and Linux.       |
