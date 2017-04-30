import { Component, OnInit } from '@angular/core';
// import { Person } from '../event-table/person';
import { Event } from '../event-table/event';

// import { PeopleService } from '../event-table/people.service';
import { EventService } from '../event-table/event.service';


@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

    // people: Person[] = [];
    myevent: Event[] = [];

    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.getAll().subscribe(
            data => {
            this.myevent = data
            }
        );
        // this.peopleService.getAll().subscribe(
        //     data => this.people = data
        // );
    }

}
