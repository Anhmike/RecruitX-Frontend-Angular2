import { Component, Input } from '@angular/core'

@Component({
    selector: 'candidate',
    template: require('./candidate.component.html')
})

export class Candidate{
    @Input('candidate') candidate: this;
}