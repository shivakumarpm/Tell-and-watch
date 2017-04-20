import { Component } from '@angular/core'
//for voice recognization start
@Component ({
    selector: 'voice-listen',
    template: `<div class="row">
        <div class="col-xs-12 col-sm-12 embed-responsive embed-responsive-16by9">
            <video src="video/voice-listen.mp4 width="100%" class="embed-responsive-item" controls></video>
        </div>
    </div>`
})
//voice recogniztion end