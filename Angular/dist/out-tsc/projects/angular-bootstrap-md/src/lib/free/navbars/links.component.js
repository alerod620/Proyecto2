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
var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    LinksComponent.prototype.ngAfterContentInit = function () {
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
    ], LinksComponent.prototype, "links", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LinksComponent.prototype, "linkClick", void 0);
    LinksComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'links',
            template: "\n    <ng-content></ng-content>\n  ",
        }),
        __metadata("design:paramtypes", [NavbarService])
    ], LinksComponent);
    return LinksComponent;
}());
export { LinksComponent };
//# sourceMappingURL=links.component.js.map