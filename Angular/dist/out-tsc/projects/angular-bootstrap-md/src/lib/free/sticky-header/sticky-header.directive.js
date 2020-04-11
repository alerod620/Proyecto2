var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, } from 'rxjs/operators';
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
})(Direction || (Direction = {}));
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    StickyHeaderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map(function () { return window.pageYOffset; }), pairwise(), map(function (_a) {
            var y1 = _a[0], y2 = _a[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        }), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter(function (direction) { return direction === Direction.Up; }));
        this.scrollDown$ = scroll$.pipe(filter(function (direction) { return direction === Direction.Down; }));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout(function () {
            _this.scrollUp$.pipe(skip(0)).subscribe(function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                _this.transitionEnd.emit({ state: 'Visible' });
            });
            _this.scrollDown$.pipe(skip(0)).subscribe(function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                _this.transitionEnd.emit({ state: 'Hidden' });
            });
        }, 0);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], StickyHeaderDirective.prototype, "animationDuration", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], StickyHeaderDirective.prototype, "transitionEnd", void 0);
    StickyHeaderDirective = __decorate([
        Directive({
            selector: '[mdbStickyHeader]',
            exportAs: 'mdbStickyHeader',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], StickyHeaderDirective);
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
//# sourceMappingURL=sticky-header.directive.js.map