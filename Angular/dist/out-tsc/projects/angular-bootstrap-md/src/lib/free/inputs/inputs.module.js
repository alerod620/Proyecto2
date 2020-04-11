var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EqualValidatorDirective } from './equal-validator.directive';
import { MdbInputDirective } from './mdb-input.directive';
import { MdbInput } from './input.directive';
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    InputsModule_1 = InputsModule;
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule_1, providers: [] };
    };
    var InputsModule_1;
    InputsModule = InputsModule_1 = __decorate([
        NgModule({
            declarations: [MdbInput, MdbInputDirective, EqualValidatorDirective],
            exports: [MdbInput, MdbInputDirective, EqualValidatorDirective],
            schemas: [NO_ERRORS_SCHEMA],
        })
    ], InputsModule);
    return InputsModule;
}());
export { InputsModule };
//# sourceMappingURL=inputs.module.js.map