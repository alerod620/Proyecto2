/**
 * Tells if a given input is a number
 */
export function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
//# sourceMappingURL=isNumeric.js.map