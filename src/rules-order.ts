/**
 * confuigures `order/order` (stylelint order) to sort selectors in more maintainable way
 * @param [modifiersSelector] - selector for "modifier" selector, defaults to BEM one ('^&--')
 */
export const selectorOrderFactory = (modifiersSelector = '^&--') => [
  'custom-properties',
  'dollar-variables',
  'declarations',
  {
    // modifiers
    type: 'rule',
    selector: modifiersSelector,
  },
  'at-rules',
  {
    type: 'rule',
    selector: '^&:(before|after)',
  },
  {
    type: 'rule',
    selector: '^&::(before|after)',
  },
  {
    type: 'rule',
    selector: '^&:(first-child|last-child|nth-child|last-of-type|first-of-type|nth-of-type)',
  },
  {
    type: 'rule',
    selector: '&:hover',
  },
  {
    type: 'rule',
    selector: '&:focus',
  },
  {
    type: 'rule',
    selector: '&:active',
  },
  {
    type: 'rule',
    selector: '&:disabled',
  },

  'rules',
];
