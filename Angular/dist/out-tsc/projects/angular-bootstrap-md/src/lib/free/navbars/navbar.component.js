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
import { NavbarService } from './navbar.service';
import { Component, ContentChild, ElementRef, HostListener, Input, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, Inject, NgZone, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LinksComponent } from './links.component';
import { DOCUMENT } from '@angular/common';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService, _cdRef, _ngZone, _document) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this._document = _document;
        this.containerInside = true;
        this.collapseId = 'navbarCollapse';
        this.scrollSensitivity = 120;
        this.scrollableNavbar = false;
        this.shown = false;
        this.duration = 350; // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        this._itemsLength = 0;
        this.ariaExpanded = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) {
            _this.closeNavbarOnClick(navbarLinkClicks);
        });
    }
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    NavbarComponent.prototype.addTogglerIconClasses = function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    NavbarComponent.prototype._listenToScroll = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            fromEvent(_this._document, 'scroll').subscribe(function () {
                if (window.pageYOffset > _this.scrollSensitivity) {
                    _this.renderer.addClass(_this.navbar.nativeElement, 'top-nav-collapse');
                }
                else {
                    _this.renderer.removeClass(_this.navbar.nativeElement, 'top-nav-collapse');
                }
            });
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.containerInside) {
            var childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach(function (child) {
                _this.renderer.appendChild(_this.navbar.nativeElement, child);
                _this.container.nativeElement.remove();
            });
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
        if (this.scrollableNavbar) {
            this.renderer.addClass(this.el.nativeElement, 'collapsed-navbar-scroll');
        }
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            this._listenToScroll();
        }
    };
    NavbarComponent.prototype.toggle = function () {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        this.ariaExpanded = true;
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
        this._cdRef.markForCheck();
    };
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        if (this.shown) {
            this.shown = false;
            this.collapse = false;
            this.showClass = false;
            this.collapsing = true;
            this.ariaExpanded = false;
            setTimeout(function () {
                _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
            }, 0);
            setTimeout(function () {
                _this.collapsing = false;
                _this.collapse = true;
            }, this.duration);
        }
        this._cdRef.markForCheck();
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var breakpoint = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoint = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoint = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoint = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoint = 576;
        }
        else {
            breakpoint = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoint) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.ariaExpanded = false;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    NavbarComponent.prototype.ngAfterContentChecked = function () {
        if (this.el.nativeElement.firstElementChild) {
            if (this._itemsLength !==
                this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
            }
            this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
        }
        this._cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "iconBackground", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "SideClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "containerInside", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "collapseId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "scrollSensitivity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "scrollableNavbar", void 0);
    __decorate([
        ViewChild('navbar', { static: true }),
        __metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "el", void 0);
    __decorate([
        ViewChild('mobile', { static: false }),
        __metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "mobile", void 0);
    __decorate([
        ViewChild('nav', { static: true }),
        __metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "navbar", void 0);
    __decorate([
        ViewChild('container', { static: true }),
        __metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "container", void 0);
    __decorate([
        ViewChild('toggler', { static: false }),
        __metadata("design:type", ElementRef)
    ], NavbarComponent.prototype, "toggler", void 0);
    __decorate([
        ContentChild(LinksComponent, { static: false }),
        __metadata("design:type", LinksComponent)
    ], NavbarComponent.prototype, "links", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    NavbarComponent = __decorate([
        Component({
            selector: 'mdb-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['./navbars-module.scss'],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __param(4, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Renderer2,
            NavbarService,
            ChangeDetectorRef,
            NgZone, Object])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map