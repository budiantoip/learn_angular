import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

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
    TextboxesComponent,
    PropertyBindingComponent,
    SwitchCasesComponent,
    ForLoopComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
