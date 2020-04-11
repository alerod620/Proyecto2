var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
var MdbTableService = /** @class */ (function () {
    function MdbTableService() {
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    MdbTableService.prototype.addRow = function (newRow) {
        this.getDataSource().push(newRow);
    };
    MdbTableService.prototype.addRowAfter = function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    MdbTableService.prototype.removeRow = function (index) {
        this.getDataSource().splice(index, 1);
    };
    MdbTableService.prototype.rowRemoved = function () {
        var rowRemoved = new Observable(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    MdbTableService.prototype.removeLastRow = function () {
        this.getDataSource().pop();
    };
    MdbTableService.prototype.getDataSource = function () {
        return this._dataSource;
    };
    MdbTableService.prototype.setDataSource = function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    MdbTableService.prototype.dataSourceChange = function () {
        return this._dataSourceChanged;
    };
    MdbTableService.prototype.filterLocalDataBy = function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                if (obj[key]) {
                    return obj[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchKey);
                }
            });
        });
    };
    MdbTableService.prototype.searchLocalDataBy = function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    MdbTableService.prototype.searchDataObservable = function (searchKey) {
        var _this = this;
        var observable = new Observable(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], MdbTableService);
    return MdbTableService;
}());
export { MdbTableService };
//# sourceMappingURL=mdb-table.service.js.map