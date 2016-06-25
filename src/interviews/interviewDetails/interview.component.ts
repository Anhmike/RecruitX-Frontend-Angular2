import {Component, Input, OnInit} from '@angular/core'

@Component({
       selector: 'interview',
        template: `<h4>Name</h4>
                    <div>{{interview.id}}</div>
                    <button (click)="show(interview)"></button>`
})

export class Interview {
    @Input('interview') interview: Interview;

    show(interview: any) {
        console.log(interview)
    }
}