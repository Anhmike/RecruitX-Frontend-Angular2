import {Component, OnInit} from '@angular/core';
import { HttpService } from './../service/httpService'
import { ListInterview } from './listInterview/listInterview.component'

@Component({
    selector: 'interviews',
    template: `<interviewList [interviewList]=interviews></interviewList>`,
    providers: [HttpService],
    directives: [ListInterview]
})

export class Interviews implements OnInit {
    private interviews;
    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getInterviews().subscribe(data => this.interviews = data);
    }
}
