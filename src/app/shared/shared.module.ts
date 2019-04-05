import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {HeaderComponent} from '~/app/shared/header/header.component';
import { LoadIndicatorComponent } from './load-indicator/load-indicator.component';


@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    exports: [
        HeaderComponent,
        LoadIndicatorComponent
    ],
    declarations: [
        HeaderComponent,
        LoadIndicatorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
