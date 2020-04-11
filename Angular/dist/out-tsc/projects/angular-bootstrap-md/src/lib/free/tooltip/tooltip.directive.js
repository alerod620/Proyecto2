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
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { TooltipContainerComponent } from './tooltip.component';
import { TooltipConfig } from './tooltip.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { OnChange } from '../utils/decorators';
import { isPlatformBrowser } from '@angular/common';
import { PositioningService } from '../utils/positioning/positioning.service';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_renderer, _elementRef, _positionService, _viewContainerRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this._positionService = _positionService;
        this.platformId = platformId;
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        this.dynamicPosition = true;
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(this.platformId);
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () {
            return this._tooltip.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); },
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.dynamicPosition,
                },
                preventOverflow: {
                    enabled: this.dynamicPosition,
                },
            },
        });
        var showTooltip = function () {
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.mdbTooltip,
                placement: _this.placement,
            });
        };
        this.showTooltip(showTooltip);
    };
    TooltipDirective.prototype.showTooltip = function (fn) {
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () {
                fn();
            }, this.delay);
        }
        else {
            fn();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    __decorate([
        OnChange(),
        Input(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TooltipDirective.prototype, "tooltipChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "triggers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "container", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TooltipDirective.prototype, "isOpen", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "isDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "dynamicPosition", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TooltipDirective.prototype, "onShown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TooltipDirective.prototype, "shown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TooltipDirective.prototype, "onHidden", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TooltipDirective.prototype, "hidden", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "customHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "fadeDuration", void 0);
    TooltipDirective = __decorate([
        Directive({
            selector: '[mdbTooltip]',
            exportAs: 'mdb-tooltip',
        }),
        __param(6, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            PositioningService,
            ViewContainerRef,
            ComponentLoaderFactory,
            TooltipConfig, String])
    ], TooltipDirective);
    return TooltipDirective;
}());
export { TooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map