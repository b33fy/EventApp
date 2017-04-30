
import { EventListComponent } from './event-list/event-list.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'event/list', pathMatch: 'full' },
    { path: 'event/list', component: EventListComponent },
    { path: 'about', component: AboutComponent }
];
