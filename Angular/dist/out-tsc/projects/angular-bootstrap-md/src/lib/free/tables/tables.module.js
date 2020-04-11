var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTableDirective } from './directives/mdb-table.directive';
import { MdbTableSortDirective } from './directives/mdb-table-sort.directive';
import { MdbTableScrollDirective } from './directives/mdb-table-scroll.directive';
import { MdbTableRowDirective } from './directives/mdb-table-row.directive';
import { MdbTableService } from './services/mdb-table.service';
import { MdbTablePaginationComponent } from './components/mdb-table-pagination.component';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [
                MdbTablePaginationComponent,
                MdbTableRowDirective,
                MdbTableScrollDirective,
                MdbTableSortDirective,
                MdbTableDirective
            ],
            exports: [
                MdbTablePaginationComponent,
                MdbTableRowDirective,
                MdbTableScrollDirective,
                MdbTableSortDirective,
                MdbTableDirective
            ],
            entryComponents: [MdbTablePaginationComponent],
            providers: [MdbTableService]
        })
    ], TableModule);
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=tables.module.js.map