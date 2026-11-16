# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@talentia/angular-tree-component` is a **fork of [CirclonGroup/angular-tree-component](https://github.com/CirclonGroup/angular-tree-component)**
(git remote `upstream`), kept current with Angular by Talentia. It is consumed by `@talentia/components`
(core-components) and by the HCM front-end — check real usage there before changing behavior.
State management is **MobX 4** (peer `mobx ~4.14.1`), not signals or RxJS.

The workspace has two projects: the library (`projects/angular-tree-component`) and a demo app
(`projects/demo`, 18 routes: basic, fields, templates, filter, async, checkboxes, drag, virtual, api,
actions, context-menu, ...). The library version follows the release branch name (e.g. `11.0.13`).

## Commands

```bash
npm run build          # clean:build + build:prod; build:prod = ng build + create:dir + copy:file (CSS)
npm run build:dev      # development build — does NOT copy the CSS into dist
npm start              # build:dev + ng serve demo (http://localhost:4200)
npm run watch          # lib + demo in watch mode
npm run demo:prod      # production build of the demo (also demo:dev); CI runs build:prod + demo:prod
npm run lint           # ng lint (lib + demo)
npm run lint:lib-fix   # ng lint of the library with --fix
npm run update-browserslist
```

There is no test framework (no Jest/Karma, no `*.spec.ts`): verify behavior in the demo or in a
consumer. Node version: `.nvmrc`.

## Architecture

Everything lives in `projects/angular-tree-component/src/lib/`:

- **`models/`** — the tree state: `TreeModel` (root, focus/active/selection, filtering, drag & drop,
  API), `TreeNode`, `TreeOptions` (normalizes `ITreeOptions`), `TreeVirtualScroll`. Observable
  state and actions use MobX 4 through the re-exported decorators in `mobx-angular/mobx-proxy.ts`.
- **`mobx-angular/`** — `mobx-proxy.ts` (MobX `action`/`computed`/`observable` re-exported for AOT) and
  `TreeMobxAutorunDirective` (`[treeMobxAutorun]`): re-renders a template inside a MobX `autorun`.
- **`components/`** — `tree-root`, `tree-viewport`, `tree-node`, `tree-node-collection`,
  `tree-node-children`, `tree-node-wrapper`, `tree-node-content`, `tree-node-expander`,
  `tree-node-checkbox`, `tree-node-drop-slot`, `tree-loading-component`. All `standalone: false`,
  declared in `TreeModule`; templates use `@if`/`@for` and `ngTemplateOutlet` for custom templates.
- **`directives/`** — `treeDrag` (HTML5 dragstart outside the Angular zone), `treeDrop`,
  `treeAnimateOpen`.
- **`defs/api.ts`** — the public interfaces (`ITreeOptions`, `ITreeNode`, `ITreeState`, ...), with
  the option documentation in JSDoc.
- **`angular-tree-component.module.ts`** — `TreeModule`; it imports `CommonModule`, which is needed
  for `ngTemplateOutlet`. `public-api.ts` re-exports the module file.
- **`angular-tree-component.css`** — shipped separately: `build:prod` copies it to
  `dist/angular-tree-component/css/`. The package `exports` don't expose `./css/*`, so consumers add
  `node_modules/@talentia/angular-tree-component/css/angular-tree-component.css` to the `styles` in
  `angular.json` (as core-components and HCM do).

## Working in this codebase

- Angular upgrades are done **without adopting new Angular features**: components stay
  `standalone: false`, the demo keeps zone.js via `provideZoneChangeDetection()`.
- **Change detection is the risky area.** The tree updates through MobX + `NgZone`, so it relies on
  the implicit CheckAlways strategy; no component declares `changeDetection`. In Angular 22 OnPush
  becomes the default for components compiled with v22: before compiling the library with v22 add
  `changeDetection: ChangeDetectionStrategy.Eager` to all components (and raise the peer to
  `^21.2.0` at least, since `Eager` only exists from 21.2) or adapt the library to OnPush. A library
  compiled with v21 keeps Eager even inside a v22 app (decided by the linker from the compile version).
- `uuid` is a devDependency used only by the demo; the library has its own internal `uuid()`.
- `@angular/*` versions are pinned exactly; peer range `^<major>.0.0`. No `overrides` in
  `package.json`: transitive `@angular-devkit/*` are kept on the framework patch only by the lock.
- `tmp/` is git-ignored and may contain task worklogs/scripts (e.g. `tmp/HCM-8031/`, including a
  Playwright test of the demo).
