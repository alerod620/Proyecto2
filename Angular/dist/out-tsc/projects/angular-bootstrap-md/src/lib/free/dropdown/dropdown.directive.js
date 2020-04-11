var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownState } from './dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        this.cdRef = cdRef;
        this.dropupDefault = false;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.shown = this._dropdown.shown;
        this.onHidden = this._dropdown.onHidden;
        this.hidden = this._dropdown.hidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "isDropup", {
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        get: function () {
            if (this.dropup) {
                this._isDropupDefault = false;
                return this.dropup;
            }
            else if (this.dropupDefault) {
                this._isDropupDefault = true;
                return this.dropupDefault;
            }
            else if (this.dropupDefault && this.dropup) {
                this._isDropupDefault = false;
                return this.dropup;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
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
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); },
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange.subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu.then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
        this._state.isOpenChange.subscribe(function () {
            setTimeout(function () {
                var dropdownContainer = _this._elementRef.nativeElement.querySelector('.dropdown-menu');
                var left = dropdownContainer.getBoundingClientRect().left;
                if (dropdownContainer.classList.contains('dropdown-menu-right') &&
                    left <= dropdownContainer.clientWidth) {
                    if (left < 0) {
                        _this._renderer.setStyle(dropdownContainer, 'right', left + 'px');
                    }
                    else {
                        _this._renderer.setStyle(dropdownContainer, 'right', '0');
                    }
                }
            }, 0);
        });
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        // const parent = this._elementRef.nativeElement.classList;
        var button = this._elementRef.nativeElement.children[0];
        var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        if (!container.parentNode.classList.contains('btn-group') &&
            !container.parentNode.classList.contains('dropdown') &&
            !this._isDropupDefault) {
            container.parentNode.classList.add('dropdown');
        }
        if (this.dropup && !this._isDropupDefault) {
            container.parentNode.classList.add('dropup-material');
        }
        if (button.tagName !== 'BUTTON') {
            if (button.tagName === 'A') {
                container.classList.add('a-various-dropdown');
            }
            else {
                container.classList.add('various-dropdown');
            }
        }
        else {
            if (button.classList.contains('btn-sm')) {
                container.classList.add('small-dropdown');
            }
            if (button.classList.contains('btn-md')) {
                container.classList.add('medium-dropdown');
            }
            if (button.classList.contains('btn-lg')) {
                container.classList.add('large-dropdown');
            }
        }
        setTimeout(function () {
            container.classList.add('fadeInDropdown');
        }, 0);
        if (this._showInline) {
            this._isInlineOpen = true;
            if (container.parentNode.classList.contains('dropdown') ||
                container.parentNode.classList.contains('dropup-material')) {
                setTimeout(function () {
                    _this.onShown.emit(true);
                    _this.shown.emit(true);
                }, 560);
            }
            else {
                setTimeout(function () {
                    _this.onShown.emit(true);
                    _this.shown.emit(true);
                }, 0);
            }
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu.then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true || _this.dropupDefault === true;
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement,
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        // const parent = this._elementRef.nativeElement.classList;
        var container = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        // if (parent.value.includes('dropdown')) {
        container.classList.remove('fadeInDropdown');
        if (container.parentNode.classList.contains('dropdown') ||
            container.parentNode.classList.contains('dropup-material')) {
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                    _this.cdRef.markForCheck();
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                    _this.cdRef.markForCheck();
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 0);
        }
        // } else {
        //   if (this._showInline) {
        //     this._isInlineOpen = false;
        //     this.onHidden.emit(true);
        //     this.hidden.emit(true);
        //   } else {
        //     this._dropdown.hide();
        //   }
        //   this._state.isOpenChange.emit(false);
        // }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "triggers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "container", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], BsDropdownDirective.prototype, "dropup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BsDropdownDirective.prototype, "dropupDefault", void 0);
    __decorate([
        HostBinding('class.dropup'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BsDropdownDirective.prototype, "isDropup", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "autoClose", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isDisabled", null);
    __decorate([
        HostBinding('class.open'),
        HostBinding('class.show'),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isOpen", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BsDropdownDirective.prototype, "isOpenChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BsDropdownDirective.prototype, "onShown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BsDropdownDirective.prototype, "shown", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BsDropdownDirective.prototype, "onHidden", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], BsDropdownDirective.prototype, "hidden", void 0);
    BsDropdownDirective = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[mdbDropdown],[dropdown]',
            exportAs: 'bs-dropdown',
            template: '<ng-content></ng-content>',
            styleUrls: ['dropdown-module.scss'],
            encapsulation: ViewEncapsulation.None,
            providers: [BsDropdownState],
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            ViewContainerRef,
            ComponentLoaderFactory,
            BsDropdownConfig,
            BsDropdownState,
            ChangeDetectorRef])
    ], BsDropdownDirective);
    return BsDropdownDirective;
}());
export { BsDropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map