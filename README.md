# PostCSS Custom Scoper [WIP]

[PostCSS] plugin that adds custom scopes to selectors.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/alexander-svendsen/postcss-custom-scoper.svg
[ci]: https://travis-ci.org/alexander-svendsen/postcss-custom-scoper
[prettier-img]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier]: https://github.com/prettier/prettier
[codecov-img]: https://codecov.io/gh/alexander-svendsen/postcss-custom-scoper/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/alexander-svendsen/postcss-custom-scoper

[![styled with prettier][prettier-img]][prettier]
[![Build Status][ci-img]][ci]
[![codecov][codecov-img]][codecov]

## Installation

Before using the plugin, make sure to have installed the [PostCSS] before:

`npm install postcss`

After installing postcss you can install the plugin:

`npm install postcss-custom-scoper`

## Usage

```js
var postcss = require('postcss'),
    scoper = require('postcss-custom-scoper');

var cssFile = fs.readFileSync('path/to/file.css',  'utf-8').toString();

var output1 = postcss().use(
    scoper({
        {
            //multiple matches
            selectors: {
              'something-to-match' : 'what-to-add',
              '*' : 'matches-all'
            }
            ignore: [ /regex-to-match/, '.class-to-ignore', '#id-to-ignore' ]
        }
    })
).process(cssFile);

// or

var output2 = postcss().use(
    scoper({
        {
            //first match used
            selectors: [
              {'something-to-match' : 'what-to-add'},
              {'*' : 'matches-all'}
            ],
            ignore: [ /regex-to-match/, '.class-to-ignore', '#id-to-ignore' ]
        }
    })
).process(cssFile);
```

See [PostCSS] docs for examples for your environment.

## Example

```css
/* Before */
.foo {
}
```

```css
/* After */
.foo {
}
```

## Credits

Plugin inspired by:

*   [postcss-selector-namespace](https://github.com/topaxi/postcss-selector-namespace) create by [topaxi](https://github.com/topaxi)
*   [postcss-prefixer](https://github.com/marceloucker/postcss-prefixer) created by [marceloucker](https://github.com/marceloucker)
