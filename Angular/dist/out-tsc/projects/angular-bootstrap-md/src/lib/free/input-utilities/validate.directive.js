var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var MdbValidateDirective = /** @class */ (function () {
    function MdbValidateDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    Object.defineProperty(MdbValidateDirective.prototype, "validate", {
        get: function () {
            return this._validate;
        },
        set: function (value) {
            this._validate = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateSuccess", {
        get: function () {
            return this._validateSuccess;
        },
        set: function (value) {
            this._validateSuccess = value;
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateError", {
        get: function () {
            return this._validateError;
        },
        set: function (value) {
            this._validateError = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    MdbValidateDirective.prototype.updateSuccessClass = function () {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    };
    MdbValidateDirective.prototype.updateErrorClass = function () {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    };
    MdbValidateDirective.prototype.ngOnInit = function () {
        this.updateSuccessClass();
        this.updateErrorClass();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MdbValidateDirective.prototype, "mdbValidate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbValidateDirective.prototype, "validate", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbValidateDirective.prototype, "validateSuccess", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbValidateDirective.prototype, "validateError", null);
    MdbValidateDirective = __decorate([
        Directive({
            selector: '[mdbValidate]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], MdbValidateDirective);
    return MdbValidateDirective;
}());
export { MdbValidateDirective };
//# sourceMappingURL=validate.directive.js.map