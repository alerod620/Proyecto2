/**
 * Gets the scroll value of the given element in the given side (top and left)
 */
export function getScroll(element, side) {
    if (side === void 0) { side = 'top'; }
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
//# sourceMappingURL=getScroll.js.map