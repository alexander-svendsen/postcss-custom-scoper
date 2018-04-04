import fs from 'fs';
import postcss from 'postcss';
import plugin from '../src/index';

export function run(input, options = {}) {
    return postcss()
        .use(plugin(options))
        .process(input);
}

export function runAndExpectResult(input, output, options = {}) {
    const result = run(input, options);
    expect(result.css).toEqual(output);
    expect(result.warnings().length).toBe(0);
}

export function compareFixtureWithSnapshot(name, options = {}) {
    const { css } = run(
        fs.readFileSync(`${__dirname}/fixtures/${name}`),
        options
    );

    expect(css).toMatchSnapshot();
}
