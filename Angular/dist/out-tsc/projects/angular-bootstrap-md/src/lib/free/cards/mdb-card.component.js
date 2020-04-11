var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
var MdbCardComponent = /** @class */ (function () {
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        set: function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
            else if (!narrower && this._el.nativeElement.classList.contains('narrower')) {
                this._r.removeClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        set: function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
            else if (!reverse && this._el.nativeElement.classList.contains('reserse')) {
                this._r.removeClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        set: function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
            else if (!dark && this._el.nativeElement.classList.contains('card-dard')) {
                this._r.removeClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
        set: function (color) {
            if (color) {
                this._r.addClass(this._el.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
        set: function (color) {
            if (color) {
                this._r.addClass(this._el.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    MdbCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbCardComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MdbCardComponent.prototype, "cascade", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MdbCardComponent.prototype, "wider", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MdbCardComponent.prototype, "imageBackground", void 0);
    __decorate([
        ViewChild('card', { static: true }),
        __metadata("design:type", ElementRef)
    ], MdbCardComponent.prototype, "card", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "narrower", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "reverse", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MdbCardComponent.prototype, "dark", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MdbCardComponent.prototype, "bgColor", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MdbCardComponent.prototype, "borderColor", null);
    MdbCardComponent = __decorate([
        Component({
            selector: 'mdb-card',
            templateUrl: './mdb-card.component.html',
            styleUrls: ['./cards-module.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MdbCardComponent);
    return MdbCardComponent;
}());
export { MdbCardComponent };
//# sourceMappingURL=mdb-card.component.js.map