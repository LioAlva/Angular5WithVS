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
var core_1 = require("@angular/core");
var Dataservice = /** @class */ (function () {
    function Dataservice() {
        this.tasks = [];
    }
    Dataservice.prototype.getTask = function () {
        if (localStorage.getItem('tasks') === null)
            this.tasks = [];
        else
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        return this.tasks;
    };
    Dataservice.prototype.addTask = function (task) {
        this.tasks.unshift(task); //agrega al inicio
        var tasks = [];
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
            tasks.unshift(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.unshift(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    };
    Dataservice.prototype.removeTask = function (task) {
        for (var i = 0; i < length; i++) {
            if (task == this.tasks[i]) {
                this.tasks.splice(i, 1);
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    };
    Dataservice = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Dataservice);
    return Dataservice;
}());
exports.Dataservice = Dataservice;
//# sourceMappingURL=data.service.js.map