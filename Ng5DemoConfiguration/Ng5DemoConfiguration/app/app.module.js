"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var Videojuegos_component_1 = require("./Videojuegos/Videojuegos.component");
var navbar_component_1 = require("./componentes/navbar/navbar.component");
var taskadd_component_1 = require("./componentes/task-add/taskadd.component");
var taskslist_component_1 = require("./componentes/task-list/taskslist.component");
var task_component_1 = require("./componentes/task/task.component");
var data_service_1 = require("./services/data.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                app_component_1.AppComponent,
                Videojuegos_component_1.VideojuegosComponent,
                navbar_component_1.NavbarComponent,
                taskslist_component_1.TasksListComponent,
                taskadd_component_1.TaskAddComponent,
                task_component_1.TaskComponent
            ],
            bootstrap: [app_component_1.AppComponent
            ],
            providers: [data_service_1.Dataservice
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map