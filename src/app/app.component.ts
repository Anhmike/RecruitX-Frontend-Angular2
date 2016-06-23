import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { NewInterview } from '../interviews/newInterview.component'

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES],
})

@Routes([
    {path: '/interview/create', component: NewInterview }
])
export class AppComponent {}
