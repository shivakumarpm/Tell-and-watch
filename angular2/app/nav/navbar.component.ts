import {Component, Input} from '@angular/core'
import {EventService} from '../events/shared/event.service'

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav{font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width:1200px){#searchForm{display:none;}}
        `
    ]
})
export class NavBarComponent {
    events:any[]
    @Input() inputval

    constructor(private eventService:EventService){
        
    }
    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}