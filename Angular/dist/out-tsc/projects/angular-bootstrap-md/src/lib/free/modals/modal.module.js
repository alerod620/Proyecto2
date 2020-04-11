var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from '../utils/positioning/positioning.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalService } from './modal.service';
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule_1 = ModalModule;
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule_1, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    var ModalModule_1;
    ModalModule = ModalModule_1 = __decorate([
        NgModule({
            declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
            exports: [ModalBackdropComponent, ModalDirective],
            entryComponents: [ModalBackdropComponent, ModalContainerComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
    ], ModalModule);
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=modal.module.js.map