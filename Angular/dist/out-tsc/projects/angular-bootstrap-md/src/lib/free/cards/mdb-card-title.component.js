var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
var MdbCardTitleComponent = /** @class */ (function () {
    function MdbCardTitleComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    MdbCardTitleComponent.prototype.ngOnInit = function () {
        this._r.addClass(this._el.nativeElement, 'card-title');
    };
    MdbCardTitleComponent = __decorate([
        Component({
            selector: 'mdb-card-title',
            templateUrl: './mdb-card-title.component.html',
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbCardTitleComponent);
    return MdbCardTitleComponent;
}());
export { MdbCardTitleComponent };
//# sourceMappingURL=mdb-card-title.component.js.map