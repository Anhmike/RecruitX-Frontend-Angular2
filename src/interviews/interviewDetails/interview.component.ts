import { Component, Input } from '@angular/core'
import { Candidate } from "../../candidate/candidate.component";

@Component({
        selector: 'interview',
        directives: [Candidate],
        template: `<div class="container">
                   <candidate [candidate]="interview.candidate"></candidate>
                   <div class="row">
                        <div class="col-md-4"><strong>Start time</strong></div>
                        <div class="col-md-6"> {{interview.start_time}}</div>
                   </div>
                   </div>
                   `
})

export class Interview {
    @Input('interview') interview: Interview;
}