var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function getClientRect(offsets) {
    return __assign({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
}
//# sourceMappingURL=getClientRect.js.map