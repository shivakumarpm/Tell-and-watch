import {Component, Input, EventEmitter, Output} from '@angular/core'
@Component({
    selector:'events-thumbnail',
    template:`<div>
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Date: {{event.date}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, <span class="pad-left">{{event.location.country}}</span></span>
        </div>
        
    </div>
</div>`,
    styles:[`
        .green{
            color:#8BC34A !important;
        }
        .orange{
            color:#FFEB3B !important;
        }
        .rad{
            color:#ff5722 !important;
        }
        .bold{
            font-weight:bold;
        }
        .thumbnail{
            min-height:210px;
        }
    `]
})
export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter();
    getStartTimeClass(){
        if(this.event&&this.event.time==='8:00 am'){
            return ['green','bold']
        }else if(this.event&&this.event.time==='10:00 am'){
            return ['rad','bold']
        }else{
            return ['orange','bold']
        }
    }
}