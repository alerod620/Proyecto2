var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MdbCardFooterComponent } from './mdb-card-footer.component';
import { MdbCardTitleComponent } from './mdb-card-title.component';
import { MdbCardTextComponent } from './mdb-card-text.component';
import { MdbCardBodyComponent } from './mdb-card-body.component';
import { MdbCardComponent } from './mdb-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdbCardImageComponent } from './mdb-card-image.component';
import { MdbCardHeaderComponent } from './mdb-card-header.component';
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule_1 = CardsModule;
    CardsModule.forRoot = function () {
        return { ngModule: CardsModule_1, providers: [] };
    };
    var CardsModule_1;
    CardsModule = CardsModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [
                MdbCardComponent,
                MdbCardBodyComponent,
                MdbCardImageComponent,
                MdbCardTextComponent,
                MdbCardTitleComponent,
                MdbCardFooterComponent,
                MdbCardHeaderComponent,
            ],
            exports: [
                MdbCardComponent,
                MdbCardBodyComponent,
                MdbCardImageComponent,
                MdbCardTextComponent,
                MdbCardTitleComponent,
                MdbCardFooterComponent,
                MdbCardHeaderComponent,
            ],
        })
    ], CardsModule);
    return CardsModule;
}());
export { CardsModule };
//# sourceMappingURL=cards.module.js.map