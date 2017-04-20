import {Component} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'
//import {AnnyangService} from '../common/annyang.service'
@Component({
    template:`
        <div>
            <h1>Upcoming angular2 Events</h1>
            <hr/>
            <div class="row">
                <div class="col-sm-6 col-xs-12" *ngFor="let event of events" (click)="handleThumbnailClick()">
                    <events-thumbnail [event]="event" ></events-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent {
    events:any[]

    constructor(private eventService:EventService, private toastr:ToastrService){
        
    }
    handleThumbnailClick(name){
        this.toastr.warning(name, "Toastr Title");
    }
    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}
