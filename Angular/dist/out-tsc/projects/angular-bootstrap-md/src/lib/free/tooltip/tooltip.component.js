var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation, } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, elem) {
        this.containerClass = '';
        this.show = !this.isBs3;
        this.el = elem;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "tooltipClasses", {
        get: function () {
            return "tooltip-fadeIn tooltip in tooltip-" + this.placement + " bs-tooltip-" + this.placement + " " + this.placement + " " + this.containerClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "containerClass", void 0);
    __decorate([
        ViewChild('tooltipInner', { static: true }),
        __metadata("design:type", ElementRef)
    ], TooltipContainerComponent.prototype, "tooltipInner", void 0);
    __decorate([
        ViewChild('tooltipArrow', { static: true }),
        __metadata("design:type", ElementRef)
    ], TooltipContainerComponent.prototype, "tooltipArrow", void 0);
    __decorate([
        HostBinding('class.show'),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "show", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TooltipContainerComponent.prototype, "tooltipClasses", null);
    TooltipContainerComponent = __decorate([
        Component({
            selector: 'mdb-tooltip-container',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div #tooltipArrow class=\"tooltip-arrow arrow\"></div>\n    <div #tooltipInner class=\"tooltip-inner\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styleUrls: ['tooltip-module.scss'],
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [TooltipConfig, ElementRef])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());
export { TooltipContainerComponent };
//# sourceMappingURL=tooltip.component.js.map