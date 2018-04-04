import postcss from "postcss";

function plugin(options = {}) {
    const { selectors, ignore = [] } = options;

    // Work with options here

    return root => {
        // Will walk through each css selector
        root.walkRules(rule => {
            rule.selectors = rule.selectors.map(selector =>
                selector.replace(selector, "blee")
            );
        });
    };
}

export default postcss.plugin("postcss-custom-scoper", plugin);
