var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PositioningService } from '../utils/positioning/positioning.service';
import { PopoverConfig } from './popover.config';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule_1 = PopoverModule;
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule_1,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    var PopoverModule_1;
    PopoverModule = PopoverModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [PopoverDirective, PopoverContainerComponent],
            exports: [PopoverDirective],
            entryComponents: [PopoverContainerComponent]
        })
    ], PopoverModule);
    return PopoverModule;
}());
export { PopoverModule };
//# sourceMappingURL=popover.module.js.map