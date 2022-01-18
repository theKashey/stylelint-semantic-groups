import { logicalProperty } from '../utils';

export default [
  ['grid-area', 'grid-row', 'grid-column', 'grid-column-start', 'grid-column-end', 'grid-row-start', 'grid-row-end'],
  ['position', ...logicalProperty('inset'), 'top', 'left', 'bottom', 'right', 'content', 'z-index'],
  // moved to box
  // ['width', 'height', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],

  ['order'],
];
