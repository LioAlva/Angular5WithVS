import { Component } from '@angular/core'

@Component({
    selector: 'videojuegos',
    template: `<h2>Componente de Videojuegos {{nombre}}</h2>
    <h3 *ngIf="mostrar_retro !=true">
    El juego retro:{{mejor_juego}}</h3>
    <h3 [style.background]="'red'" 
    *ngIf="mostrar_retro">
    El juego retro: {{mejor_juego_retro}} 
    </h3>`
})
export class VideojuegosComponent {
    public nombre = 'Video juegos 2018';

    public mejor_juego_retro = 'Super Mario 64';
    public mejor_juego = "Gt";
    public mostrar_retro = false;
    public color = "yellow";
}