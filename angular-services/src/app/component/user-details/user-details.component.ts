import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  // providers:[UserService]
})
export class UserDetailsComponent {
  //  private userservice:UserService
   users:UserModel[] |undefined
   constructor(private userservice:UserService,private loginService:LoginService){
    // this.userservice=new UserService()
   }
   getUsers(){
    this.users=this.userservice.getUsers()
    this.loginService.login()
   }
}
