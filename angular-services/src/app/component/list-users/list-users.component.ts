import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  // providers:[UserService]
})
export class ListUsersComponent {
  // userService:UserService;
  users:UserModel[]|undefined
  constructor(private userService:UserService,private http:HttpClient){
    // this.userService=new UserService()
  }
   
  getUsers(){
   /// this.users=this.userService.getUsers()
  }
}
