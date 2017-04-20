import { Component,Input, Output,EventEmitter,NgZone } from '@angular/core'
import {EventsListComponent} from './events/events-list.components'
import {NavBarComponent} from './nav/navbar.component'
//import {annyang} from 'annyang'
import {AnnyangService} from './common/annyang.service'
//declare var annyang:any

@Component({
    selector: 'events-app',
    template: `
    <h3 id="text">{{iv}}</h3>    
    <button class="btn btn-primary" (click) = "clickEvent()">click</button>
    <nav-bar [inputval] = "iv"></nav-bar>
    <router-outlet></router-outlet>`
})
export class EventsAppComponent{
    //that:object=this
    
    //  @Input() iv:any
    // @Output() countChange = new EventEmitter<any>();
    iv:any = "nabaraj"
    nameArray:Array<string> = ["a","p","n"]
    constructor(private annyang:AnnyangService, private _ngZone: NgZone){
        
    }
    ngOnInit(){
        //run(){
            //this.iv="nabaraj"
            console.log(this.iv);
    
            
            this.annyang.commands = {
                '*val': (val)=>{
                    console.log("command start")
                   this.updateVar(val)
                   
                    //this.clickEvent(val)
                    
                }
            }
            this.annyang.start();
        //this.callannyang()
    }
    clickEvent = function(){
        let abc = this.nameArray[Math.floor(Math.random() * (this.nameArray.length)) + 0]
        this.updateVar(abc)
        console.log(abc)
    }
    updateVar = function(val){
        console.log(this.iv)
        this._ngZone.runOutsideAngular(() => {
                        //this._increaseProgress(() => {
                            // reenter the Angular zone and display done
                            this._ngZone.run(() => { 
                                console.log('Outside Done!') 
                                this.iv = val
                            });
                        
                        //});
                    });
        //this.iv = val
        //document.getElementById("text").innerHTML=this.iv;
        //this.countChange.emit(this.iv);
        console.log(this.iv)
    }
    //}
}