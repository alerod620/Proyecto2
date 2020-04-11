var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MdbIconComponent } from './icon.component';
import { NgModule } from '@angular/core';
import { FabDirective } from './directives/fab.directive';
import { FarDirective } from './directives/far.directive';
import { FasDirective } from './directives/fas.directive';
import { FalDirective } from './directives/fal.directive';
import { CommonModule } from '@angular/common';
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = __decorate([
        NgModule({
            declarations: [
                MdbIconComponent,
                FabDirective,
                FarDirective,
                FasDirective,
                FalDirective
            ],
            imports: [CommonModule],
            exports: [
                MdbIconComponent,
                FabDirective,
                FarDirective,
                FasDirective,
                FalDirective
            ]
        })
    ], IconsModule);
    return IconsModule;
}());
export { IconsModule };
//# sourceMappingURL=icon.module.js.map