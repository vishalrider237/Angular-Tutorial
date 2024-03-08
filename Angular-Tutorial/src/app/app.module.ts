import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/AboutComponent/about.component';
import { FooterComponenr } from './components/FooterComponent/footer.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomModule } from './modules/custom.module';
import { InterpolationComponent } from './tutorials/interpolation/interpolation.component';
import { PropertyBindingComponent } from './tutorials/property-binding/property-binding.component';
import { EventBindingComponent } from './tutorials/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './tutorials/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentCompoComponent } from './tutorials/parent-compo/parent-compo.component';
import { ChildCompoComponent } from './tutorials/child-compo/child-compo.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { FriendListComponent } from './examples/friend-list/friend-list.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CustomDirective } from './Custom_directive/cs-class.directive';
import { CsIf } from './Custom_directive/cs-if.directive';
import { HighlightDirective } from './Custom_directive/highlight.directive';
import { DatePipesComponent } from './pipes/date-pipes/date-pipes.component';
import { ImpPipesComponent } from './pipes/imp-pipes/imp-pipes.component';
import { UppercasePipe } from './pipes/custom-pipe/uppercase.pipe';
import { MyDatePipe } from './pipes/custom-pipe/myDate.pipe';
import { ToCelPipe } from './pipes/custom-pipe/toCel.pipe';
import { TempConvComponent } from './pipes/temp-conv/temp-conv.component';
import { TempConverterPipe } from './pipes/custom-pipe/tempConv.pipe';
import { TempConverterComponent } from './TempConverterProject/components/temp-converter/temp-converter.component';
import { TempConverter } from './TempConverterProject/pipes/temp-converter.pipe';
import { TwoSumPipe } from './pipes/two-sum.pipe';
import { AsyncPipeComponent } from './pipes/async-pipe/async-pipe.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { AgeValidator1 } from './forms/validators/age1.validator';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponenr,
    NavbarComponentComponent,
    SidebarComponent,
    ServicesComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ParentCompoComponent,
    ChildCompoComponent,
    ProfileComponent,
    FriendListComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    CustomDirective,
    CsIf,
    HighlightDirective,
  DatePipesComponent,
  ImpPipesComponent,
  UppercasePipe,
  MyDatePipe,
  ToCelPipe,
  TempConvComponent,
  TempConverterPipe,
  TempConverterComponent,
  TempConverter,
  TwoSumPipe,
  AsyncPipeComponent,
  TemplateDrivenComponent,
  ReactiveFormsComponent,
  AgeValidator1
  ],
  imports: [
    BrowserModule,CustomModule,FormsModule ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
