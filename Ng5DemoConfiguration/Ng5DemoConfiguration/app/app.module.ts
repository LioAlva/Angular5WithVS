import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*para formularios*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './Videojuegos/Videojuegos.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TaskAddComponent } from './componentes/task-add/taskadd.component';
import { TasksListComponent } from './componentes/task-list/taskslist.component';
import { TaskComponent } from './componentes/task/task.component';

import { Dataservice } from './services/data.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      VideojuegosComponent,
      NavbarComponent,
      TasksListComponent,
      TaskAddComponent,
      TaskComponent
  ],
  bootstrap: [AppComponent
  ],
  providers: [Dataservice
  ],

})
export class AppModule { }
