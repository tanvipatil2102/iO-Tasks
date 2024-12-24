import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListsComponent } from './shared/components/todo-lists/todo-lists.component';
import { StdDashboardComponent } from './shared/components/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StsTableComponent } from './shared/components/sts-table/sts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListsComponent,
    StdDashboardComponent,
    StdFormComponent,
    StsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
