import { AboutComponent } from './about/about.component';
import { PeopleService } from './event-table/people.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event-table/event.service';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
