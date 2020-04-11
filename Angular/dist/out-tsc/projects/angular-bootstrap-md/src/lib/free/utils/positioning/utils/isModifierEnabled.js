/**
 * Helper used to know if the given modifier is enabled.
 */
export function isModifierEnabled(options, modifierName) {
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
}
//# sourceMappingURL=isModifierEnabled.js.map