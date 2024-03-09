import { NgModule, inject } from '@angular/core';
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
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import { NgSpecComponent } from './components/ng-spec/ng-spec.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PriceComponent } from './components/price/price.component';
import { ActivateGuard } from './guards/activate.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { FormsModule } from '@angular/forms';
import { ResolveGuard } from './guards/resolve.guard';
import { AuthGuard } from './guards/auth.guard';

let routes:Routes=[
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[ AuthGuard
      ]  // Functional guard
      ,canDeactivate:[()=>{
        console.log("Leaving home page");
        return false
      }]
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'services',
    component: ServicesComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'profile/:userId/:userName/:userAddress',
    component:ProfileComponent,
    resolve:{data:ResolveGuard}
  },
  {
    path:'contact',
    component:ContactUsComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:'products',
    component:ProductComponent,
    children:[
      {
        path:'detail',
        component:ProductDetailComponent
      },
      {
        path:'spec',
        component:NgSpecComponent
      },
      {
        path:'price',
        component:PriceComponent
      }
    ]
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
    ErrorComponent,
    ProfileComponent,
    ProductComponent,
    NgSpecComponent,
    ProductDetailComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [ActivateGuard,DeactivateGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
