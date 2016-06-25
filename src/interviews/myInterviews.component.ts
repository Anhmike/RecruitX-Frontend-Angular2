import {Component, OnInit} from '@angular/core';
import { HttpService } from './../service/httpService'
import { ListInterview } from './listInterview/listInterview.component'

@Component({
    selector: 'myinterviews',
    template: `<interviewList [interviewList]=interviews></interviewList>`,
    providers: [HttpService],
    directives: [ListInterview]
})

export class MyInterviews implements OnInit {
    private interviews;
    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getMyInterviews().subscribe(data => this.interviews = data.interviews);
    }
}
