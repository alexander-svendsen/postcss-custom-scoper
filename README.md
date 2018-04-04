# PostCSS Custom Scoper

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

```css
.foo {
    /* Input example */
}
```

```css
.foo {
    /* Output example */
}
```

## Usage

```js
var postcss = require('postcss'),
    scoper = require('postcss-custom-scoper');

var cssFile = fs.readFileSync('path/to/file.css',  'utf-8').toString();

{
    selectors: {
      'something-to-match' : 'what-to-add',
      '*' : 'matches-all'
    }
    selectors: [
      {'something-to-match' : 'what-to-add'},
      {'*' : 'matches-all'}
    ],
    scope: 'added_to_everything_except_ignore'
    ignore: [ /regex-to-match/, '.class-to-ignore', '#id-to-ignore' ]
}

var output = postcss().use(
    scoper({
        scope: 'namespace'
        ignore: [ /regex-to-match/, '.class-to-ignore', '#id-to-ignore' ]
    })
).process(cssFile);

//postcss([ require('postcss-custom-scoper') ])
```

See [PostCSS] docs for examples for your environment.
