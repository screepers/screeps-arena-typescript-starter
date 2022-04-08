# Screeps Arena Typescript Starter

## This repo is a WIP starter template for the current Closed Alpha of [Screeps Arena](https://store.steampowered.com/app/1137320/Screeps_Arena/)

## Screeps Arena is a new game _under active development_, this repo is unoffcial and maintained by the screepers community

### Any issues you experience with this repo should be created as an issue in this repo, _the Screeps Arena devs should NOT be contacted!_

---

TODO:

- [ ] A way to push code to a specific arena `npm run push alpha-capture-the-flag`
  - Will probably be a copy of files to the correct location, depending on what location has been choosen in the arena client.
  - If we can't detect the locations, we will probably need a `screeps-arena.json` file where people can set up their desired output destinations

Current Issues:

- eslint warnings
  - Unable to resolve path to module 'game' (.eslintimport/no-unresolved)
- ErrorMapper is not usable
  - `require` is undefined and there doesn't appear to be a way to load the source map.
  - Use named functions where possible for a better debug experience when errors do occur

---

# Screeps Arena Typescript Starter

Screeps Arena Typescript Starter is a starting point for a Screeps Arena AI written in Typescript. It provides everything you need to start writing your AI whilst leaving `main.ts` as empty as possible.

The initial example code from the steam forum is included in `src/alpha-capture_the_flag/main.ts`

## Basic Usage

You will need:

- [Node.JS](https://nodejs.org/en/download) (10.x || 12.x)
- A Package Manager ([Yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/getting-started/installing-node))
- Rollup CLI (Optional, install via `npm install -g rollup`)

Open the folder in your terminal and run your package manager to install the required packages and TypeScript declaration files:

```bash
# npm
npm install

# yarn
yarn
```

Fire up your preferred editor with typescript installed and you are good to go!

- arenas are located in `src/arena_*`any folder you create in `src` with a name starting with `arena_` will result in a `main.mjs` in the `dist/arena_*` folder.
- Run `npm run build` to generate all arenas to `/dist/*`

- `npm run build` - everything is build, the player can change their arena to look at the specific `/dist/arena*` directory
  - this template produces the following as an example `/dist/alpha_capture_the_flag/main.mjs`
- `npm run build capture` - a specific arena is build, the player can change their arena to look at the specific `/dist/arena*` directory knowing only that arena was updated

- Copy the `main.mjs` file to your desired location or change the location in the Screeps Arena client to point to the desired `/dist/*` folder.

~~- `npm run push` builds all arenas, then pushes all arenas to their respective folders where the client is pointed at.~~
~~- `npm run push capture` builds the specific arena, then pushes the capture arena to their respective folders where the client is pointed at.~~

## Typings

It uses the following project for typings https://github.com/screepers/typed-screeps-arena

## Contributing

Issues, Pull Requests, and contribution to the docs are welcome! See our [Contributing Guidelines](CONTRIBUTING.md) for more details.
