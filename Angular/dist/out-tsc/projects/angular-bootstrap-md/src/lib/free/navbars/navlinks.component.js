var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output, } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    __decorate([
        ContentChildren(RouterLinkWithHref, { read: ElementRef, descendants: true }),
        __metadata("design:type", QueryList)
    ], NavlinksComponent.prototype, "links", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavlinksComponent.prototype, "linkClick", void 0);
    NavlinksComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'navlinks',
            template: "\n    <ng-content></ng-content>\n  ",
        }),
        __metadata("design:paramtypes", [NavbarService])
    ], NavlinksComponent);
    return NavlinksComponent;
}());
export { NavlinksComponent };
//# sourceMappingURL=navlinks.component.js.map