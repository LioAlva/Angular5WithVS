"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Injectable } from '@angular/core';
var core_1 = require("@angular/core");
var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent() {
    }
    TaskAddComponent.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    TaskAddComponent.prototype.addTask = function () {
    };
    TaskAddComponent = __decorate([
        core_1.Component({
            selector: 'app-task-add',
            templateUrl: './taskadd.component.html',
            styleUrls: ['./taskadd.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TaskAddComponent);
    return TaskAddComponent;
}());
exports.TaskAddComponent = TaskAddComponent;
//# sourceMappingURL=taskadd.component.js.map