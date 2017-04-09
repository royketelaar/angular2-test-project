import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {MainComponent} from './main.component';
import 'rxjs/Rx';

enableProdMode();
bootstrap(MainComponent);
