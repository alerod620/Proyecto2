/**
 * Get the opposite placement of the given one
 */
export function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) { return hash[matched]; });
}
//# sourceMappingURL=getOppositePlacement.js.map