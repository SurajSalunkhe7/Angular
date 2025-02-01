import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SeccompComponent } from './seccomp/seccomp.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FirstcompComponent,
        SeccompComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
