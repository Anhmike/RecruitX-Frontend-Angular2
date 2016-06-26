import { Component, Input } from '@angular/core'
import { Candidate } from "../../candidate/candidate.component";
import { DateTimePipe } from "../../common/dateTime.pipe";

@Component({
    selector: 'interview',
    directives: [Candidate],
    pipes: [DateTimePipe],
    template: `<div class="container">
                   <candidate [candidate]="interview.candidate"></candidate>
                   <div class="row">
                        <div class="col-md-4"><strong>Start time</strong></div>
                        <div class="col-md-6"> {{interview.start_time | dateTime}}</div>
                   </div>
                   </div>
                   `
})

export class Interview {
    @Input('interview') interview: Interview;
}