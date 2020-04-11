var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    MDBBadgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            var customClassArr = this.color.split(' ');
            customClassArr.forEach(function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            });
        }
    };
    __decorate([
        Input(), HostBinding('class.badge-default'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "default", void 0);
    __decorate([
        Input(), HostBinding('class.badge-primary'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "primary", void 0);
    __decorate([
        Input(), HostBinding('class.badge-success'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "success", void 0);
    __decorate([
        Input(), HostBinding('class.badge-info'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "info", void 0);
    __decorate([
        Input(), HostBinding('class.badge-warning'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "warning", void 0);
    __decorate([
        Input(), HostBinding('class.badge-danger'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "danger", void 0);
    __decorate([
        Input(), HostBinding('class.badge-pill'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "pill", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "classInside", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "class", void 0);
    MDBBadgeComponent = __decorate([
        Component({
            selector: 'mdb-badge',
            templateUrl: './mdb-badge.component.html',
            styleUrls: ['./badge-module.scss'],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MDBBadgeComponent);
    return MDBBadgeComponent;
}());
export { MDBBadgeComponent };
//# sourceMappingURL=mdb-badge.component.js.map