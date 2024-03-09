import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes ,RouterModule} from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

let routes:Routes=[
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
