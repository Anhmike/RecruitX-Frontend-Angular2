import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NewInterview} from './newInterview/newInterview.component'
import { ListInterview } from './listInterview/listInterview.component'

@Component({
    template: `<div>Interviews</div>
    <router-outlet></router-outlet>`
})

@Routes([
    {path: '/',      component: ListInterview },
    {path: '/create',      component: NewInterview },
])

export class Interviews{}
