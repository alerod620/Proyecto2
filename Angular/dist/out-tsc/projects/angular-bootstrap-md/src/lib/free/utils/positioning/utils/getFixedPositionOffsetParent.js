/**
 * Finds the first parent of an element that has a transformed property defined
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
export function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}
//# sourceMappingURL=getFixedPositionOffsetParent.js.map