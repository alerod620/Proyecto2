/**
 * Helper to detect borders of a given element
 */
export function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles["border" + sideA + "Width"]) +
        parseFloat(styles["border" + sideB + "Width"]));
}
//# sourceMappingURL=getBordersSize.js.map