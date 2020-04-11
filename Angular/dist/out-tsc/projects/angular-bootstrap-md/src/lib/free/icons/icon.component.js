var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { document } from './../utils/facade/browser';
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fas = true;
        this.sizeClass = '';
    }
    MdbIconComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
            this._renderer.addClass(this._el.nativeElement, 'prefix');
        }
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        var formWrapper = this._getClosestEl(this._el.nativeElement, '.md-form') ||
            this._getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach(function (el) {
                if (el.tagName === 'INPUT') {
                    _this._renderer.listen(el, 'focus', function () {
                        _this._renderer.addClass(_this._el.nativeElement, 'active');
                    });
                    _this._renderer.listen(el, 'blur', function () {
                        _this._renderer.removeClass(_this._el.nativeElement, 'active');
                    });
                }
            });
        }
    };
    MdbIconComponent.prototype._getClosestEl = function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbIconComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbIconComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbIconComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbIconComponent.prototype, "classInside", void 0);
    MdbIconComponent = __decorate([
        Component({
            selector: 'mdb-icon',
            templateUrl: './icon.component.html',
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbIconComponent);
    return MdbIconComponent;
}());
export { MdbIconComponent };
//# sourceMappingURL=icon.component.js.map