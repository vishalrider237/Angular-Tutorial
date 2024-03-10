import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { ChildComponent } from './components/child/child.component';
import { CompponentProjectionComponent } from './components/compponent-projection/compponent-projection.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariableComponent,
    ChildComponent,
    CompponentProjectionComponent,
    CustomButtonComponent
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
