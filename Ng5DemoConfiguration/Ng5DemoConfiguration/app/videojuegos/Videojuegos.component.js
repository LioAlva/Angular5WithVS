"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VideojuegosComponent = /** @class */ (function () {
    function VideojuegosComponent() {
        this.nombre = 'Video juegos 2018';
        this.mejor_juego_retro = 'Super Mario 64';
        this.mejor_juego = "Gt";
        this.mostrar_retro = false;
        this.color = "yellow";
    }
    VideojuegosComponent = __decorate([
        core_1.Component({
            selector: 'videojuegos',
            template: "<h2>Componente de Videojuegos {{nombre}}</h2>\n    <h3 *ngIf=\"mostrar_retro !=true\">\n    El juego retro:{{mejor_juego}}</h3>\n    <h3 [style.background]=\"'red'\" \n    *ngIf=\"mostrar_retro\">\n    El juego retro: {{mejor_juego_retro}} \n    </h3>"
        })
    ], VideojuegosComponent);
    return VideojuegosComponent;
}());
exports.VideojuegosComponent = VideojuegosComponent;
//# sourceMappingURL=Videojuegos.component.js.map