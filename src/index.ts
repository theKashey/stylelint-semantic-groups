import { propertyOrdering } from './properties-order';
import { selectorOrderFactory } from './rules-order';

/**
 * @deprecated replaced {@link propertyOrdering}
 */
export const semanticOrdering = propertyOrdering;

export const selectorOrdering = selectorOrderFactory();

export { propertyOrdering, selectorOrderFactory };
