var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
var MdbBtnDirective = /** @class */ (function () {
    function MdbBtnDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    MdbBtnDirective.prototype.ngOnInit = function () {
        var colorClass = 'btn-' + this.color;
        var gradientClass = this.gradient + '-gradient';
        var outlineClass = 'btn-outline-' + this.color;
        var flatClass = 'btn-flat';
        var roundedClass = 'btn-rounded';
        var sizeClass = 'btn-' + this.size;
        var blockClass = 'btn-block';
        var floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, colorClass);
            this.renderer.addClass(this.el.nativeElement, outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, blockClass);
        }
        if (this.floating) {
            this.renderer.removeClass(this.el.nativeElement, 'btn');
            this.renderer.addClass(this.el.nativeElement, floatingClass);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "rounded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "gradient", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "outline", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "flat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "block", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MdbBtnDirective.prototype, "floating", void 0);
    MdbBtnDirective = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbBtn]',
            template: '<ng-content></ng-content>',
            styleUrls: ['./buttons-module.scss'],
            encapsulation: ViewEncapsulation.None,
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbBtnDirective);
    return MdbBtnDirective;
}());
export { MdbBtnDirective };
//# sourceMappingURL=buttons.directive.js.map