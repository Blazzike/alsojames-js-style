# alsojames-js-style

[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)](http://badge.fury.io/js/eslint-config-airbnb-base)

## Usage

Exports two ESLint configurations for your usage.

### alsojames-js-style

The default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "alsojames-js-style@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev alsojames-js-style
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "alsojames-js-style-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=alsojames-js-style;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev alsojames-js-style eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev alsojames-js-style
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev alsojames-js-style eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "alsojames-js-style"` to your .eslintrc.

### alsojames-js-style/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "alsojames-js-style@latest" peerDependencies
  ```

  Linux/OSX users can run
  ```sh
  (
    export PKG=alsojames-js-style;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev alsojames-js-style eslint@^3.0.1 eslint-plugin-import@^1.10.3
  ```

2. Add `"extends": "alsojames-js-style/legacy"` to your .eslintrc

### alsojames-js-style/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
