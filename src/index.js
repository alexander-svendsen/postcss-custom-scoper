import postcss from 'postcss'

module.exports = postcss.plugin(
  'postcss-custom-scoper',
  (options = {}) => {
    const {
      someOption,
      ignore = []
    } = options

    // Work with options here

    return (root) => {
      // Will walk through each css selector
      root.walkRules((rule) => {
        rule.selectors = rule.selectors.map(selector =>
          selector.replace(selector, "blee")
        )

      });

    };
});
