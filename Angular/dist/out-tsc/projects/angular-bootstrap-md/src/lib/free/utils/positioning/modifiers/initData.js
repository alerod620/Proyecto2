import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils/index';
export function initData(targetElement, hostElement, position, options) {
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}
//# sourceMappingURL=initData.js.map