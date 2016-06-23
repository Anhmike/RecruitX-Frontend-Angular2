import 'core-js';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import { PLATFORM_DIRECTIVES } from "@angular/core";
import { HTTP_PROVIDERS } from '@angular/http';
import { Http } from '@angular/http';
import { FORM_PROVIDERS, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {AppComponent} from './app/app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: PLATFORM_DIRECTIVES, multi: true, useValue: ROUTER_DIRECTIVES },
    HTTP_PROVIDERS,
    {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'translations', '.json'),
        deps: [Http]
    },
    TranslateService]);