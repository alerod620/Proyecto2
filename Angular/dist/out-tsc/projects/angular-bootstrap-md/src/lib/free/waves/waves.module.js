var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { WavesDirective } from './waves-effect.directive';
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    WavesModule_1 = WavesModule;
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule_1, providers: [] };
    };
    var WavesModule_1;
    WavesModule = WavesModule_1 = __decorate([
        NgModule({
            declarations: [WavesDirective],
            exports: [WavesDirective]
        })
    ], WavesModule);
    return WavesModule;
}());
export { WavesModule };
//# sourceMappingURL=waves.module.js.map