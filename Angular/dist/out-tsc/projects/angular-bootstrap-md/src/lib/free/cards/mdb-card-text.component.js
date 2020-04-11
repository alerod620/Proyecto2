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
var MdbCardTextComponent = /** @class */ (function () {
    function MdbCardTextComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbCardTextComponent.prototype, "class", void 0);
    MdbCardTextComponent = __decorate([
        Component({
            selector: 'mdb-card-text',
            templateUrl: './mdb-card-text.component.html',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], MdbCardTextComponent);
    return MdbCardTextComponent;
}());
export { MdbCardTextComponent };
//# sourceMappingURL=mdb-card-text.component.js.map