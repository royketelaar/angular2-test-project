import {Component} from 'angular2/core';
import {TubeComponent} from './tube.component';

@Component({
	selector: 'my-app',
	templateUrl: '../templates/main.html',
	directives: [TubeComponent]
})

export class MainComponent {}
