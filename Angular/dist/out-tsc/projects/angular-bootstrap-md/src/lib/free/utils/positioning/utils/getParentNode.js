/**
 * Returns the parentNode or the host of the element
 */
export function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}
//# sourceMappingURL=getParentNode.js.map