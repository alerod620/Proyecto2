var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, forwardRef, HostListener, Input, Output, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
export var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true,
};
var defaultIdNumber = 0;
var MdbCheckboxChange = /** @class */ (function () {
    function MdbCheckboxChange() {
    }
    return MdbCheckboxChange;
}());
export { MdbCheckboxChange };
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        this.checkboxClicked = new Subject();
        // Control Value Accessor Methods
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CheckboxComponent.prototype.onLabelClick = function (event) {
        event.stopPropagation();
        this.checkboxClicked.next(true);
    };
    CheckboxComponent.prototype.onDocumentClick = function () {
        this.checkboxClicked.next(false);
    };
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    };
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
        get: function () {
            var newChangeEvent = new MdbCheckboxChange();
            newChangeEvent.element = this;
            newChangeEvent.checked = this.checked;
            return newChangeEvent;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
        this._cdRef.markForCheck();
    };
    CheckboxComponent.prototype.onCheckboxClick = function (event) {
        event.stopPropagation();
        this.toggle();
    };
    CheckboxComponent.prototype.onCheckboxChange = function (event) {
        var _this = this;
        event.stopPropagation();
        timer(0).subscribe(function () { return _this.change.emit(_this.changeEvent); });
    };
    CheckboxComponent.prototype.onBlur = function () {
        var _this = this;
        this.checkboxClicked.pipe(take(1)).subscribe(function (val) {
            if (!val) {
                _this.onTouched();
            }
        });
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.checked = !!value;
        this._cdRef.markForCheck();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "inputEl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "required", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "filledIn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "indeterminate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "rounded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "checkboxPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "default", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "inline", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CheckboxComponent.prototype, "tabIndex", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CheckboxComponent.prototype, "change", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onLabelClick", null);
    __decorate([
        HostListener('document:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onDocumentClick", null);
    CheckboxComponent = __decorate([
        Component({
            selector: 'mdb-checkbox',
            templateUrl: './checkbox.component.html',
            styleUrls: ['checkbox-module.scss'],
            encapsulation: ViewEncapsulation.None,
            providers: [CHECKBOX_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map