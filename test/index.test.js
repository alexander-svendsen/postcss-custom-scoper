import { run, runAndExpectResult, compareFixtureWithSnapshot } from './helpers';

it('Basic functionality', () => {
    compareFixtureWithSnapshot('base.css');
});

it('', () => {
    const { css } = run('.foo { color: yellow }');
    expect(css).toEqual('blee { color: yellow }');
});
