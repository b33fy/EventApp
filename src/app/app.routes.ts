
import { EventListComponent } from './event-list/event-list.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'event/list', component: EventListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];
