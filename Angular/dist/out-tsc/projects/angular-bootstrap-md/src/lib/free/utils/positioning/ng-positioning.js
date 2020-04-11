import { getReferenceOffsets, setAllStyles } from './utils/index';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers/index';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    };
    Positioning.prototype.offset = function (hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, position, _appendToBody, options) {
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
var positionService = new Positioning();
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=ng-positioning.js.map