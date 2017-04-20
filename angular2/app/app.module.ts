import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events.app.component'
import { EventsListComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toastr.service'
import {AnnyangService} from './common/annyang.service'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {CreateEventComponent} from './events/create-event.component'
import {appRoutes} from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
        EventThumbnailComponent,
        CreateEventComponent,
        NavBarComponent,
        EventDetailsComponent
    ],
    providers:[EventService, ToastrService, AnnyangService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }