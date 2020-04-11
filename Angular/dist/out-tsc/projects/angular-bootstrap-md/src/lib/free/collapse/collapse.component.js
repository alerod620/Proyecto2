var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, Output, EventEmitter, HostListener, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    CollapseComponent.prototype.onExpandBodyDone = function (event) {
        var _this = this;
        setTimeout(function () {
            if (event.toState === 'expanded') {
                _this.shownBsCollapse.emit(_this);
                _this.expanded.emit(_this);
                _this.overflow = 'visible';
                _this.showCaptions();
            }
            else {
                _this.hiddenBsCollapse.emit(_this);
                _this.collapsed.emit(_this);
            }
        }, 0);
    };
    CollapseComponent.prototype.showCaptions = function () {
        this.captions.forEach(function (caption) { return caption.showCaption(); });
    };
    CollapseComponent.prototype.toggle = function () {
        this.isCollapsed ? this.show() : this.hide();
    };
    CollapseComponent.prototype.show = function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
        this._cdRef.markForCheck();
    };
    CollapseComponent.prototype.hide = function () {
        this.overflow = 'hidden';
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
        this._cdRef.markForCheck();
    };
    CollapseComponent.prototype.initializeCollapseState = function () {
        this.isCollapsed ? this.hide() : this.show();
    };
    CollapseComponent.prototype.ngOnInit = function () {
        this.initializeCollapseState();
    };
    __decorate([
        ContentChildren(FixedButtonCaptionDirective),
        __metadata("design:type", QueryList)
    ], CollapseComponent.prototype, "captions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CollapseComponent.prototype, "isCollapsed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "showBsCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "shownBsCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "hideBsCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "hiddenBsCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "collapsed", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CollapseComponent.prototype, "expanded", void 0);
    __decorate([
        HostBinding('@expandBody'),
        __metadata("design:type", String)
    ], CollapseComponent.prototype, "expandAnimationState", void 0);
    __decorate([
        HostBinding('style.overflow'),
        __metadata("design:type", Object)
    ], CollapseComponent.prototype, "overflow", void 0);
    __decorate([
        HostListener('@expandBody.done', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CollapseComponent.prototype, "onExpandBodyDone", null);
    CollapseComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbCollapse]',
            exportAs: 'bs-collapse',
            template: '<ng-content></ng-content>',
            animations: [
                trigger('expandBody', [
                    state('collapsed', style({ height: '0px' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('500ms ease')),
                ]),
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], CollapseComponent);
    return CollapseComponent;
}());
export { CollapseComponent };
//# sourceMappingURL=collapse.component.js.map