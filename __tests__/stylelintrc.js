const { semanticOrdering } = require('../src');

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    'order/properties-order': semanticOrdering,
  },
};
