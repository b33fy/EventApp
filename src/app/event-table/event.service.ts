import { Event } from './event';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class EventService {
    // private baseUrl: string = 'http://api.gtcarclub.com/EventRESTService.svc';
    private baseUrl: string = 'http://localhost/EventService/api';
    // private baseUrl: string = 'http://api.gtcarclub.com/api';



    constructor(private http: Http) {
    }

    getAll(): Observable<any> {
        let event$ = this.http
            .get(`${this.baseUrl}/Events`, { headers: this.getHeaders() })
            // .get(`${this.baseUrl}/GetEventList`, { headers: this.getHeaders() })
            .map(data => data.json())
            .catch(this.errorHandler);
        return event$;
    }

    private errorHandler(error) {
        console.error('CUSTOM ERROR!!!', error);
        return Observable.throw(error);
    }

    // get(id: number): Observable<Event> {
    //     let Event$ = this.http
    //         .get(`${this.baseUrl}/event/${id}`, { headers: this.getHeaders() })
    //         .map(mapEvent);
    //     return Event$;
    // }

    // save(Event: Event): Observable<Response> {
    //     // this won't actually work because the StarWars API doesn't
    //     // is read-only. But it would look like this:
    //     return this.http
    //         .put(`${this.baseUrl}/event/${Event.eventid}`, JSON.stringify(Event), { headers: this.getHeaders() });
    // }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

// function mapEvents(response: Response): Event[] {
//     // uncomment to simulate error:
//     // throw new Error('ups! Force choke!');

//     // The response of the API has a results
//     // property with the actual results
//     return response.json().results.map(toEvent);
// }

// function toEvent(r: Event): Event {
//     const Event = <Event>({
//         eventid: r.EventId,
//         eventname: r.EventName,
//     });
//     console.log('Parsed Event:', Event);
//     return Event;
// }

// to avoid breaking the rest of our app
// I extract the id from the Event url
function extractId(EventData: any) {
    // let extractedId = EventData.url.replace('http://api.gtcarclub.com/EventRESTService.svc/GetEventList/', '').replace('/', '');
    let extractedId = EventData.url.replace('http://api.gtcarclub.com/api/test/', '').replace('/', '');
    return parseInt(extractedId);
}

function mapEvent(response: Response): void {
    // toEvent looks just like in the previous example
    // return toEvent(response.json());
    console.log(response);
}

// this could also be a private method of the component class
function handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}