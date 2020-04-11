var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
var MdbTableRowDirective = /** @class */ (function () {
    function MdbTableRowDirective(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    MdbTableRowDirective.prototype.ngOnInit = function () {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    };
    MdbTableRowDirective.prototype.ngOnDestroy = function () {
        this.rowRemoved.emit({ removed: true });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MdbTableRowDirective.prototype, "rowCreated", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MdbTableRowDirective.prototype, "rowRemoved", void 0);
    MdbTableRowDirective = __decorate([
        Directive({
            selector: '[mdbTableRow]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], MdbTableRowDirective);
    return MdbTableRowDirective;
}());
export { MdbTableRowDirective };
//# sourceMappingURL=mdb-table-row.directive.js.map