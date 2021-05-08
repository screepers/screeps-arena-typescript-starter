# Screeps Arena Typescript Starter

## This repo is a WIP starter template for the current Closed Alpha of [Screeps Arena](https://store.steampowered.com/app/1137320/Screeps_Arena/)

## Screeps Arena is a new game _under active development_, this repo is unoffcial and maintained by the screepers community

### Any issues you experience with this repo should be created as an issue in this repo, _the Screeps Arena devs should NOT be contacted!_

---

TODO:

- [ ] Update readme
- [ ] A way to seperate the code for the different arenas
- [ ] `dist` should have multiple folders, one for each arena and their versions (ctf advanced as an example)
- [ ] A way to push code to a specific arena
  - Will probably be a copy of files to the correct location, depending on what location has been choosen in the arena client.
- [x] Initial typing declarations for Screeps Arena
- [ ] Fletch out typings for Screeps Arena
  - We should probably make a new repo later for `typed-screeps-arena` that can be published to `@types/screeps-arena`

Current Issues:

- ~~Unable to extend existing objects, like adding `initialPos` to `Creep`~~
- Generated rollup result in wrong import statements that are not relative
  - `import { Creep } from "game";` in .ts but it should be `import { Creep } from "/game";` in the `.mjs` output
- ~~How do we share common types between modules? `RoomObjects` as an example~~

~~The initial example code from the steam forum is included with a workaround for `initialPos`~~

---

# Screeps Arena Typescript Starter

Screeps Arena Typescript Starter is a starting point for a Screeps Arena AI written in Typescript. It provides everything you need to start writing your AI whilst leaving `main.ts` as empty as possible.

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

## Typings

The type definitions for Screeps come from [typed-screeps](https://github.com/screepers/typed-screeps). If you find a problem or have a suggestion, please open an issue there.

## Contributing

Issues, Pull Requests, and contribution to the docs are welcome! See our [Contributing Guidelines](CONTRIBUTING.md) for more details.
