var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PositioningService } from '../utils/positioning/positioning.service';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownMenuDirective } from './dropdown-menu.directive';
import { BsDropdownToggleDirective } from './dropdown-toggle.directive';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownDirective } from './dropdown.directive';
import { BsDropdownState } from './dropdown.state';
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule_1 = DropdownModule;
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule_1, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    var DropdownModule_1;
    DropdownModule = DropdownModule_1 = __decorate([
        NgModule({
            declarations: [
                BsDropdownMenuDirective,
                BsDropdownToggleDirective,
                BsDropdownContainerComponent,
                BsDropdownDirective
            ],
            exports: [
                BsDropdownMenuDirective,
                BsDropdownToggleDirective,
                BsDropdownDirective
            ],
            entryComponents: [BsDropdownContainerComponent]
        })
    ], DropdownModule);
    return DropdownModule;
}());
export { DropdownModule };
//# sourceMappingURL=dropdown.module.js.map