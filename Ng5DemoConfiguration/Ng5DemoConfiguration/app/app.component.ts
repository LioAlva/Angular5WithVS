import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html' ,
})

export class AppComponent
{
    public name = 'Angular';

    public descripcion = "Clase Número 1";

    public descripcion2 = "Clase N&uacute;mero 2";
}
