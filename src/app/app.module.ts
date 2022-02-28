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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PassDataToChildComponent } from './pass-data-to-child/pass-data-to-child.component';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';
import { SendDataToParentComponent } from './send-data-to-parent/send-data-to-parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { RoutingSourceComponent } from './routing-source/routing-source.component';
import { RoutingDestinationComponent } from './routing-destination/routing-destination.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomDirectiveDirective } from './custom-directive/custom-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

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
    SimpleFormComponent,
    HeaderComponent,
    FooterComponent,
    StyleBindingComponent,
    PassDataToChildComponent,
    ReusableComponentComponent,
    SendDataToParentComponent,
    PipeComponent,
    RoutingSourceComponent,
    RoutingDestinationComponent,
    PageNotFoundComponent,
    CustomDirectiveDirective,
    CustomDirectiveComponent
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
