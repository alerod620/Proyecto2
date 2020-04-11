var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    MdbTableDirective.prototype.addRow = function (newRow) {
        this.getDataSource().push(newRow);
    };
    MdbTableDirective.prototype.addRowAfter = function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    MdbTableDirective.prototype.removeRow = function (index) {
        this.getDataSource().splice(index, 1);
    };
    MdbTableDirective.prototype.rowRemoved = function () {
        var rowRemoved = new Observable(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    MdbTableDirective.prototype.removeLastRow = function () {
        this.getDataSource().pop();
    };
    MdbTableDirective.prototype.getDataSource = function () {
        return this._dataSource;
    };
    MdbTableDirective.prototype.setDataSource = function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    MdbTableDirective.prototype.dataSourceChange = function () {
        return this._dataSourceChanged;
    };
    MdbTableDirective.prototype.filterLocalDataBy = function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    };
    MdbTableDirective.prototype.filterLocalDataByFields = function (searchKey, keys) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (keys.includes(key)) {
                    if (obj[key].toLowerCase().includes(searchKey)) {
                        return obj[key];
                    }
                }
            });
        });
    };
    MdbTableDirective.prototype.searchLocalDataBy = function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchLocalDataByFields = function (searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableDirective.prototype.searchDataObservable = function (searchKey) {
        var _this = this;
        var observable = new Observable(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableDirective.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
    };
    MdbTableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            var tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach(function (child) {
                _this.renderer.addClass(child, 'sticky-top');
                if (_this.stickyHeaderBgColor) {
                    _this.renderer.setStyle(child, 'background-color', _this.stickyHeaderBgColor);
                }
                else {
                    _this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (_this.stickyHeaderTextColor) {
                    _this.renderer.setStyle(child, 'color', _this.stickyHeaderTextColor);
                }
                else {
                    _this.renderer.setStyle(child, 'color', '#000000');
                }
            });
        }
    };
    __decorate([
        Input(),
        HostBinding('class.table-striped'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "striped", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-bordered'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "bordered", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-borderless'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "borderless", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-hover'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "hover", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-sm'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "small", void 0);
    __decorate([
        Input(),
        HostBinding('class.table-responsive'),
        __metadata("design:type", Boolean)
    ], MdbTableDirective.prototype, "responsive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderBgColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTableDirective.prototype, "stickyHeaderTextColor", void 0);
    MdbTableDirective = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbTable]',
            exportAs: 'mdbTable',
            template: '<ng-content></ng-content>',
            styleUrls: ['./../tables-module.scss'],
            encapsulation: ViewEncapsulation.None,
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbTableDirective);
    return MdbTableDirective;
}());
export { MdbTableDirective };
//# sourceMappingURL=mdb-table.directive.js.map