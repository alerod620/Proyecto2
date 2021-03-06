var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MdbBtnDirective } from './buttons.directive';
import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';
import { FixedButtonCaptionDirective } from './fixed-caption.directive';
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule_1 = ButtonsModule;
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule_1, providers: [] };
    };
    var ButtonsModule_1;
    ButtonsModule = ButtonsModule_1 = __decorate([
        NgModule({
            declarations: [
                ButtonCheckboxDirective,
                ButtonRadioDirective,
                MdbBtnDirective,
                FixedButtonCaptionDirective,
            ],
            exports: [
                ButtonCheckboxDirective,
                ButtonRadioDirective,
                MdbBtnDirective,
                FixedButtonCaptionDirective,
            ],
        })
    ], ButtonsModule);
    return ButtonsModule;
}());
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map