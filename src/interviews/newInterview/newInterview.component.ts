import { Component } from '@angular/core';
import { Interview } from "../interviewDetails/interview.component";
import {ControlGroup, FormBuilder, Validators} from "@angular/common";

@Component({
    selector: 'newinterviewcreation',
    template: require('./newInterview.component.html')
})

export class NewInterview{
    private interview: Interview;
    private interviewForm: ControlGroup;
    constructor(fb: FormBuilder) {
        this.interviewForm = fb.group({
            interview: fb.group({
                candidate: fb.group({
                    firstName: ['', Validators.required],
                    lastName: ['', Validators.required]
                })
            })
        })
    }

    createCandidate() {
        console.log(this.interviewForm.value)
    }
}
