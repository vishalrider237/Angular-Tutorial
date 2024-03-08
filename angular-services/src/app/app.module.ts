import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { RandomComponent } from './component/random/random.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostComponent } from './component/post/post.component'
import { OneInterceptor } from './interceptors/one.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    UserDetailsComponent,
    RandomComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:OneInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
