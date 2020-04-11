var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID, NgZone, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId, _ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            this._ngZone.runOutsideAngular(function () {
                merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), 
                // tslint:disable-next-line: deprecation
                of(0, animationFrameScheduler), _this.update$$).subscribe(function () {
                    _this.positionElements.forEach(function (positionElement) {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            });
        }
    }
    PositioningService.prototype.position = function (options) {
        this.addPositionElement(options);
    };
    PositioningService.prototype.addPositionElement = function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    PositioningService.prototype.calcPosition = function () {
        this.update$$.next();
    };
    PositioningService.prototype.deletePositionElement = function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    PositioningService.prototype.setOptions = function (options) {
        this.options = options;
    };
    PositioningService = __decorate([
        Injectable(),
        __param(1, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [RendererFactory2, Number, NgZone])
    ], PositioningService);
    return PositioningService;
}());
export { PositioningService };
function _getHtmlElement(element) {
    // it means that we got a selector
    if (element && typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=positioning.service.js.map