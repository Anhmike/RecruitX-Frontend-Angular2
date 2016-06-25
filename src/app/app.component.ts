import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Interviews } from '../interviews/interviews.component'
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES, TAB_DIRECTIVES, Interviews],
})

export class AppComponent {
    onSubmit() {
      
    }
}
