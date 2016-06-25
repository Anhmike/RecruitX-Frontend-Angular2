import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Interviews } from '../interviews/interviews.component'

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES],
})

@Routes([
    {path: '/interviews', component: Interviews }
])

export class AppComponent {
    onSubmit() {
      
    }
}
