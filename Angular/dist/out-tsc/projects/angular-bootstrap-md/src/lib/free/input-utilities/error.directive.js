var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, HostBinding, ElementRef, Renderer2, ViewEncapsulation, Component, } from '@angular/core';
var defaultIdNumber = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = "mdb-error-" + defaultIdNumber++;
        this.errorMsg = true;
        this.messageId = this.id;
    }
    MdbErrorDirective.prototype._getClosestEl = function (el, selector) {
        for (; el && el !== document; el = el.previousElementSibling) {
            if (el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    MdbErrorDirective.prototype._calculateMarginTop = function () {
        var parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        var heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            var margin = heightParent / 12.5;
            this.el.nativeElement.style.top = heightParent + heightParent / margin + "px";
        }
    };
    MdbErrorDirective.prototype.ngOnInit = function () {
        var _this = this;
        var textarea = this._getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            var height_1 = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', function () {
                height_1 = textarea.offsetHeight + 4 + 'px';
                _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
            });
        }
    };
    MdbErrorDirective.prototype.ngOnDestroy = function () {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbErrorDirective.prototype, "id", void 0);
    __decorate([
        HostBinding('class.error-message'),
        __metadata("design:type", Object)
    ], MdbErrorDirective.prototype, "errorMsg", void 0);
    __decorate([
        HostBinding('attr.id'),
        __metadata("design:type", Object)
    ], MdbErrorDirective.prototype, "messageId", void 0);
    MdbErrorDirective = __decorate([
        Component({
            selector: 'mdb-error',
            template: '<ng-content></ng-content>',
            styleUrls: ['./input-utilities-module.scss'],
            encapsulation: ViewEncapsulation.None,
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbErrorDirective);
    return MdbErrorDirective;
}());
export { MdbErrorDirective };
//# sourceMappingURL=error.directive.js.map