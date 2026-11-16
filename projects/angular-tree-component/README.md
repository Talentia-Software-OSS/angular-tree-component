# @talentia/angular-tree-component

A simple yet powerful tree component for Angular

## Compatibility

| @talentia/angular-tree-component | Angular |
| -------------------------------- | ------- |
| 11.0.13                          | 21.x    |
| 11.0.12                          | 20.x    |
| 11.0.10 - 11.0.11                | 19.x    |
| 11.0.9                           | 18.x    |
| 11.0.8                           | 17.x    |
| 11.0.6 - 11.0.7                  | 16.x    |
| 11.0.5                           | 15.x    |

## Getting started

Install `@talentia/angular-tree-component` and its peer dependency `mobx` (4.14.x):

```bash
npm install @talentia/angular-tree-component mobx@~4.14.1
```

Import `TreeModule`:

```ts
import { TreeModule } from '@talentia/angular-tree-component';

@NgModule({
  declarations: [AppComponent],
  imports: [TreeModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Add the css to the `styles` of your project in `angular.json`:

```json
"styles": [
  "node_modules/@talentia/angular-tree-component/css/angular-tree-component.css"
]
```

## Docs, Demos & More
We are redoing the documentation. You can find the new documentation here:
[https://circlongroup.github.io/angular-tree-component/](https://circlongroup.github.io/angular-tree-component/)

The API Reference is still in our old documentation for now:

[https://angular2-tree.readme.io/docs/](https://angular2-tree.readme.io/docs/)

## Support
[Stackoverflow](https://stackoverflow.com/questions/tagged/angular-tree-component)

[Slack Community](https://angular-tree-component.herokuapp.com/)

## Build & Run

Run `npm run build` to build the library. The build artifacts will be stored in the `dist/angular-tree-component` directory.
Run `npm run start` to build the library and run the demo on [localhost:4200](http://localhost:4200).
Run `npm run watch` to run the library and the demo in watch mode.
Run `npm run lint` to lint the library and the demo.

This project currently uses [Angular CLI](https://github.com/angular/angular-cli) version 21.2.25.

## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/CirclonGroup/angular-tree-component/graphs/contributors"><img src="https://opencollective.com/angular-tree-component/contributors.svg?width=890&button=false" /></a>
