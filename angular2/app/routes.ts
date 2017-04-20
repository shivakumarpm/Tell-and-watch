import {Routes} from '@angular/router'
import {EventsListComponent} from './events/events-list.components'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {CreateEventComponent} from './events/create-event.component'

export const appRoutes=[
    {path:'events/new',component:CreateEventComponent},
    {path:'events',component:EventsListComponent},
    {path:'events/:id',component:EventDetailsComponent},    
    {path:'', redirectTo:'/events', pathMatch:'full'}
]