var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ascending";
    SortDirection["DESC"] = "descending";
})(SortDirection || (SortDirection = {}));
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    MdbTableSortDirective.prototype.onclick = function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    };
    MdbTableSortDirective.prototype.trimWhiteSigns = function (headElement) {
        return headElement.replace(/ /g, '');
    };
    MdbTableSortDirective.prototype.moveArrayItem = function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    MdbTableSortDirective.prototype.sortDataBy = function (key) {
        var _this = this;
        key = key.split('.');
        this.dataSource.sort(function (a, b) {
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'ascending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'descending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column ascending");
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.sortedInto = !this.sortedInto;
    };
    MdbTableSortDirective.prototype.ngOnInit = function () {
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    __decorate([
        Input('mdbTableSort'),
        __metadata("design:type", Array)
    ], MdbTableSortDirective.prototype, "dataSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbTableSortDirective.prototype, "sortBy", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MdbTableSortDirective.prototype, "sortEnd", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MdbTableSortDirective.prototype, "sorted", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdbTableSortDirective.prototype, "onclick", null);
    MdbTableSortDirective = __decorate([
        Directive({
            selector: '[mdbTableSort]',
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbTableSortDirective);
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
//# sourceMappingURL=mdb-table-sort.directive.js.map