# PostCSS Custom Scoper [![Build Status][ci-img]][ci]

[PostCSS] plugin that adds custom scopes to selectors.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/alexander-svendsen/postcss-custom-scoper.svg
[ci]:      https://travis-ci.org/alexander-svendsen/postcss-custom-scoper

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
