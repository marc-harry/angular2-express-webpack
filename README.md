# Angular2 Webpack Starter


### Quick start
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
git clone https://github.com/marc-harry/angular2-webpack.git 

# change directory to our repo
cd angular2-webpack

# install the repo with npm
npm install

# start the server
npm start 
```
go to [http://localhost:3000](http://localhost:3000) in your browser

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.1`+ and NPM `2.10.0`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).
 
### server
```bash
npm run server # or either webpack-dev-server or npm run express
```

## Other commands 

### build files
```bash
npm run build  # or webpack
```

### watch and build files
```bash
npm run watch  # or webpack --watch
```

### run tests 
```bash
npm run test  # or karma start
```

### run webdriver (for end-to-end)
```bash
npm run webdriver-start  # or webdriver-manager start
```

### run end-to-end tests
```bash
# make sure you have webdriver running and a sever for the client app
npm run e2e  # or protractor
```

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.5 includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## .d.ts Typings
The TSD typings in `tsd_typings/` are autogenerated.

```
npm install --global tsd
```

 > You may need to require `reference path` for your editor to autocomplete correctly
 ```
 /// <reference path="/src/typings/_custom.d.ts" />
 ```
 
 If your editor only works with reference path here's the convention I'm using
 
`/src/typings/` hand written typings for when you need to create/update one for a library 

`/src/typings/_custom.d.s` main file to require everything (reference path this file)

`/src/typings/tsd.d.ts` requires tsd_typings

`/tsd_typings/` tsd typings (like node_modules these files live and generates at root level)

 Otherwise including them in `tsd.json` is much prefered 

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)


