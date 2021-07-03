const { propertyOrdering, selectorOrdering } = require('../src');

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
  },
};
