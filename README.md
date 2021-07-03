# stylelint-semantic-groups

Opinionated group based SCSS property ordering for better `maintainability` and `perception`.

📖 Theory behind: [Harry Potter and the Order of CSS](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)

---

# Usage

- install required packages

```bash
yarn add stylelint-order stylelint-semantic-groups
```

- set configuration

### Recommended configuration

```js
// .stylelintrc.js
const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': selectorOrdering, // to fine-tune configuration use selectorOrderFactory
    'order/properties-order': propertyOrdering,
  },
};
```

### Minimal configuration

```js
// .stylelintrc.js
const { propertyOrdering } = require('stylelint-semantic-groups');

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    /* optional by recommended */
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules', // <-- important, `@media` should go before `&:pseudo`
      'rules',
    ],
    /* the actual usage of this package */
    'order/properties-order': propertyOrdering,
  },
};
```

Stylelint config that sorts related property declarations by grouping together following the order:

- (optional) SCSS/CSS variables, handled by `order/order`
- Layout Positioning - Element bound properties (in terms of BEM) such as `grid-area`. Note: in the current implementation it is mostly about grids and grids only.
- Positioning
- Box Model
- Typography
- Visual
- Misc
- Animation
- (optional) at-rules, handled by `order/order`
- (optional) nested rules, handled by `order/order`

```scss
.declaration-order {
  --color: #fff;

  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model */ /* white space between groups is ENFORCED */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

## See also

- this plugin is based on [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)
- this plugin implements ideas from [idiomatic-css](https://github.com/necolas/idiomatic-css)

# Licence

MIT
