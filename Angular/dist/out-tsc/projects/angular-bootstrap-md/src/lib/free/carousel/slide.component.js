var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
// import { CarouselComponent } from './carousel.component';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /** Wraps element by appropriate CSS classes */
        this.el = null;
        // this.carousel = carousel;
        this.el = el;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        // this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        // this.carousel.removeSlide(this);
    };
    __decorate([
        HostBinding('class.active'),
        Input(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        HostBinding('class.animated'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "animated", void 0);
    __decorate([
        HostBinding('class.carousel-item-next'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionNext", void 0);
    __decorate([
        HostBinding('class.carousel-item-left'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionLeft", void 0);
    __decorate([
        HostBinding('class.carousel-item-prev'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionPrev", void 0);
    __decorate([
        HostBinding('class.carousel-item-right'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionRight", void 0);
    __decorate([
        HostBinding('class.carousel-item'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "el", void 0);
    SlideComponent = __decorate([
        Component({
            selector: 'mdb-slide, mdb-carousel-item',
            template: "\n  <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], SlideComponent);
    return SlideComponent;
}());
export { SlideComponent };
//# sourceMappingURL=slide.component.js.map