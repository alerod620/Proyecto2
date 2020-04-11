/**
 * Get CSS computed property of the given element
 */
export function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
}
//# sourceMappingURL=getStyleComputedProperty.js.map