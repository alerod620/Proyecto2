var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input, ChangeDetectorRef, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MdbTableDirective } from '../directives/mdb-table.directive';
var MdbTablePaginationComponent = /** @class */ (function () {
    function MdbTablePaginationComponent(cdRef) {
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.ofKeyword = 'of';
        this.dashKeyword = '-';
        this.paginationAlign = '';
        this.hideDescription = false;
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new Subject();
        this.nextPageClick = new EventEmitter();
        this.previousPageClick = new EventEmitter();
    }
    MdbTablePaginationComponent.prototype.ngOnInit = function () {
        if (this.tableEl) {
            this.allItemsLength = this.tableEl.getDataSource().length;
        }
    };
    MdbTablePaginationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.tableEl) {
            this.tableEl.dataSourceChange().subscribe(function (data) {
                _this.allItemsLength = data.length;
                _this.lastVisibleItemIndex = data.length;
                _this.calculateFirstItemIndex();
                _this.calculateLastItemIndex();
                _this.disableNextButton(data);
                if (_this.searchDataSource) {
                    setTimeout(function () {
                        if (_this.searchDataSource.length !== data.length) {
                            _this.activePageNumber = 1;
                            _this.firstItemIndex = 1;
                        }
                    }, 0);
                }
            });
        }
        this.paginationChange().subscribe(function (data) {
            _this.firstItemIndex = data.first;
            _this.lastVisibleItemIndex = data.last;
        });
    };
    MdbTablePaginationComponent.prototype.ngOnChanges = function (changes) {
        var searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        if (!searchDataSource.isFirstChange() &&
            searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    MdbTablePaginationComponent.prototype.setMaxVisibleItemsNumberTo = function (value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    };
    MdbTablePaginationComponent.prototype.searchTextObs = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            observer.next(_this.searchText);
        });
        return observable;
    };
    MdbTablePaginationComponent.prototype.disableNextButton = function (data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    MdbTablePaginationComponent.prototype.calculateFirstItemIndex = function () {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    MdbTablePaginationComponent.prototype.calculateLastItemIndex = function () {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && this.lastItemIndex > this.searchDataSource.length) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
            this.lastVisibleItemIndex = this.tableEl.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    MdbTablePaginationComponent.prototype.paginationChange = function () {
        return this.pagination;
    };
    MdbTablePaginationComponent.prototype.calculateHowManyPagesShouldBe = function () {
        return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems);
    };
    MdbTablePaginationComponent.prototype.previousPage = function () {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    MdbTablePaginationComponent.prototype.nextPage = function () {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    MdbTablePaginationComponent.prototype.firstPage = function () {
        this.activePageNumber = 1;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
    };
    MdbTablePaginationComponent.prototype.lastPage = function () {
        var lastPage = Math.ceil(this.allItemsLength / this.maxVisibleItems);
        this.activePageNumber = lastPage;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
    };
    MdbTablePaginationComponent.prototype.nextPageObservable = function () {
        var _this = this;
        var obs = new Observable(function (observer) {
            observer.next(_this.firstItemIndex);
        });
        return obs;
    };
    MdbTablePaginationComponent.prototype.previousPageObservable = function () {
        var _this = this;
        var obs = new Observable(function (observer) {
            observer.next(_this.lastVisibleItemIndex);
        });
        return obs;
    };
    MdbTablePaginationComponent.prototype.checkIfNextShouldBeDisabled = function () {
        if (this.searchDataSource && this.lastVisibleItemIndex === this.searchDataSource.length) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    };
    MdbTablePaginationComponent.prototype.checkIfPreviousShouldBeDisabled = function () {
        if (this.activePageNumber === 1) {
            return true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", MdbTableDirective)
    ], MdbTablePaginationComponent.prototype, "tableEl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "searchPagination", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "searchDataSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "ofKeyword", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "dashKeyword", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "paginationAlign", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "hideDescription", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "nextPageClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MdbTablePaginationComponent.prototype, "previousPageClick", void 0);
    MdbTablePaginationComponent = __decorate([
        Component({
            selector: 'mdb-table-pagination',
            templateUrl: './mdb-table-pagination.component.html',
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], MdbTablePaginationComponent);
    return MdbTablePaginationComponent;
}());
export { MdbTablePaginationComponent };
//# sourceMappingURL=mdb-table-pagination.component.js.map