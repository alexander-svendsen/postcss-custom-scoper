import { run, runAndExpectResult, compareFixtureWithSnapshot } from './helpers';

describe('Basic functionality', () => {
    it('should work', () => {
        compareFixtureWithSnapshot('base.css', {
            selectors: {
                '*': 'custom-scope'
            }
        });
    });

    it('should do nothing if not properly configured', () => {
        compareFixtureWithSnapshot('base.css');
    });

    it('should work with more advanced options', () => {
        compareFixtureWithSnapshot('base.css', {
            selectors: {
                '.a': 'custom-scope',
                '*': 'scope-for-everything'
            },
            ignore: ['#a']
        });
    });
});
