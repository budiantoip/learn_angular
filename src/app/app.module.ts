import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FunctionsComponent } from './functions/functions.component';
import { EventsComponent } from './events/events.component';
import { TextboxesComponent } from './textboxes/textboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent,
    ConditionsComponent,
    InterpolationComponent,
    FunctionsComponent,
    EventsComponent,
    TextboxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
