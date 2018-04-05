import postcss from 'postcss';

const PLUGIN_NAME = 'postcss-custom-scoper';

function plugin(options = {}) {
    const { selectors, ignore = [] } = options;

    // Work with options here

    return root => {
        if (!selectors) {
            return;
        }
        // Will walk through each css selector
        root.walkRules(rule => {
            rule.selectors = rule.selectors.map(selector =>
                selector.replace(selector, 'blee')
            );
        });
    };
}

export default postcss.plugin(PLUGIN_NAME, plugin);
