# stylelint-semantic-groups

Opinionated group based SCSS property ordering for better maintability and perception.

📖 Theory behind: [Harry Potter and the Order of CSS](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)

---

# Usage

- install required packages

```js
yarn add stylelint-order stylelint-semantic-groups
```

- set configuration

```js
const { semanticOrdering } = require('../src');

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    /* optional by recomented */
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    'order/properties-order': semanticOrdering,
  },
};
```

Stylelint config that sorts related property declarations by grouping together following the order:

- (optional) SCSS/CSS variables
- Layout Positioning (Element bound properties, in terms of BEM)
- Positioning
- Box Model
- Typography
- Visual
- Misc
- Animation

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

  /* Box Model */
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

# Licence

MIT
