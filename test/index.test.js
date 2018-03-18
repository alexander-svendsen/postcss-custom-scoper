var postcss = require('postcss');

var plugin = require('../src');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Basic functionality', () => {
    return run('.foo { color: yellow }', 'blee { color: yellow }', { });
});
