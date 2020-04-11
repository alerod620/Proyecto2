var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var CloudComponent = /** @class */ (function () {
    function CloudComponent() {
        this.treeData = [
            {
                nodeId: '1', nodeText: 'Documents',
                nodeChild: [
                    { nodeId: '11', nodeText: 'Team management.docx' },
                    { nodeId: '12', nodeText: 'Entity Framework Core.pdf' },
                ]
            },
            {
                nodeId: '2', nodeText: 'Downloads',
                nodeChild: [
                    { nodeId: '21', nodeText: 'Sales report.ppt' },
                    { nodeId: '22', nodeText: 'Introduction to Angular.pdf' },
                    { nodeId: '23', nodeText: 'Paint.exe' },
                    { nodeId: '24', nodeText: 'TypeScript sample.zip' },
                ]
            },
            {
                nodeId: '3', nodeText: 'Music',
                nodeChild: [
                    { nodeId: '31', nodeText: 'Crazy tone.mp3' }
                ]
            },
            {
                nodeId: '4', nodeText: 'Videos',
                nodeChild: [
                    { nodeId: '41', nodeText: 'Angular tutorials.mp4' },
                    { nodeId: '42', nodeText: 'Basics of Programming.mp4' },
                ]
            }
        ];
        this.treeFields = {
            dataSource: this.treeData,
            id: 'nodeId',
            text: 'nodeText',
            child: 'nodeChild'
        };
    }
    CloudComponent.prototype.ngOnInit = function () {
    };
    CloudComponent = __decorate([
        Component({
            selector: 'app-cloud',
            templateUrl: './cloud.component.html',
            styleUrls: ['./cloud.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CloudComponent);
    return CloudComponent;
}());
export { CloudComponent };
//# sourceMappingURL=cloud.component.js.map