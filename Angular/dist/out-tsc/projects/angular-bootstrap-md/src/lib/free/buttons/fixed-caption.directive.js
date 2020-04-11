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
var FixedButtonCaptionDirective = /** @class */ (function () {
    function FixedButtonCaptionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    FixedButtonCaptionDirective.prototype.ngOnInit = function () {
        this.createCaptionElement();
    };
    FixedButtonCaptionDirective.prototype.createCaptionElement = function () {
        var paragraph = this.renderer.createElement('p');
        var text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    };
    FixedButtonCaptionDirective.prototype.showCaption = function () {
        this.renderer.addClass(this.paragraphEl, 'fixed-button-caption');
        this.renderer.setStyle(this.paragraphEl, 'position', 'absolute');
        this.renderer.setStyle(this.paragraphEl, 'right', "60px");
        this.renderer.setStyle(this.paragraphEl, 'top', '10px');
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'visible');
    };
    __decorate([
        Input('mdbFixedCaption'),
        __metadata("design:type", String)
    ], FixedButtonCaptionDirective.prototype, "caption", void 0);
    __decorate([
        Input('collapseButton'),
        __metadata("design:type", Object)
    ], FixedButtonCaptionDirective.prototype, "collapseButtonActivator", void 0);
    FixedButtonCaptionDirective = __decorate([
        Directive({ selector: '[mdbFixedCaption]' }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], FixedButtonCaptionDirective);
    return FixedButtonCaptionDirective;
}());
export { FixedButtonCaptionDirective };
//# sourceMappingURL=fixed-caption.directive.js.map