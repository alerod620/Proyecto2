var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class =
            'popover-fadeIn popover in popover-' +
                this.placement +
                ' ' +
                this.placement +
                ' bs-popover-' +
                this.placement +
                ' ' +
                this.containerClass;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "title", void 0);
    __decorate([
        HostBinding('class.show'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "show", void 0);
    __decorate([
        HostBinding('attr.role'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "role", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "class", void 0);
    PopoverContainerComponent = __decorate([
        Component({
            selector: 'mdb-popover-container',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <h3 class=\"popover-header\" [ngClass]=\"headerClass\" *ngIf=\"title\">{{ title }}</h3>\n    <div class=\"popover-body\" [ngClass]=\"bodyClass\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styleUrls: ['./popover-module.scss'],
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [PopoverConfig])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());
export { PopoverContainerComponent };
//# sourceMappingURL=popover-container.component.js.map