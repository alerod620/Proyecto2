var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var MdbBreadcrumbItemComponent = /** @class */ (function () {
    function MdbBreadcrumbItemComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    MdbBreadcrumbItemComponent.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbBreadcrumbItemComponent.prototype, "fontWeight", void 0);
    MdbBreadcrumbItemComponent = __decorate([
        Component({
            selector: 'mdb-breadcrumb-item',
            templateUrl: './mdb-breadcrumb-item.component.html',
            styleUrls: ['./_breadcrumbs.scss'],
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbBreadcrumbItemComponent);
    return MdbBreadcrumbItemComponent;
}());
export { MdbBreadcrumbItemComponent };
//# sourceMappingURL=mdb-breadcrumb-item.component.js.map