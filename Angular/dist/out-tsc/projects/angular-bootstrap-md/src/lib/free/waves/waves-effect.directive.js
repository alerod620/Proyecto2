var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener } from '@angular/core';
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var xPos = event.clientX - button.getBoundingClientRect().left;
            var yPos = event.clientY - button.getBoundingClientRect().top;
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var ripple = button.appendChild(tmp);
            var top_1 = yPos + 'px';
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            var scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WavesDirective.prototype, "click", null);
    WavesDirective = __decorate([
        Directive({
            selector: '[mdbWavesEffect]',
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], WavesDirective);
    return WavesDirective;
}());
export { WavesDirective };
//# sourceMappingURL=waves-effect.directive.js.map