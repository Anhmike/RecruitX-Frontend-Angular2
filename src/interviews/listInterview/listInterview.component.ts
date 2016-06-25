import {Component, Input} from '@angular/core';
import { Interview } from "../interviewDetails/interview.component";

@Component({
    selector: 'interviewList',
    template: `<div>Interview List</div>
               <div *ngFor="let interview of interviewList">
               <interview [interview]="interview"></interview>
               </div> `,
    directives: [Interview]
})

export class ListInterview{
    @Input('interviewList') interviewList: Interview[];
}
