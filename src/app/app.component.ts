import { Component } from '@angular/core';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Interviews } from '../interviews/interviews.component'
import { MyInterviews } from "../interviews/myInterviews.component";

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [TAB_DIRECTIVES, Interviews, MyInterviews],
})

export class AppComponent {
    onSubmit() {
      
    }
}
