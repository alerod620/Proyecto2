var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var MdbBreadcrumbComponent = /** @class */ (function () {
    function MdbBreadcrumbComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbBreadcrumbComponent.prototype, "customClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbBreadcrumbComponent.prototype, "textTransform", void 0);
    MdbBreadcrumbComponent = __decorate([
        Component({
            selector: 'mdb-breadcrumb',
            templateUrl: './mdb-breadcrumb.component.html',
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], MdbBreadcrumbComponent);
    return MdbBreadcrumbComponent;
}());
export { MdbBreadcrumbComponent };
//# sourceMappingURL=mdb-breadcrumb.component.js.map