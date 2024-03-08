import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { LoginService } from "./login.service";

@Injectable({
  providedIn:'root'
})
export class UserService{
    users:UserModel[];
    constructor(private loginSevice:LoginService){
      console.log("Creating object...")
        // Fake datas
      this.users=[
        new UserModel("Vishal","vishal@gmail.com",'Software Engineer'),
        new UserModel("Ankit","ankit@gmail.com",'Software Engineer1'),
        new UserModel("Ramu","ramu@gmail.com",'Software Engineer2')
      ]
    }
    getUsers():UserModel[]{
      this.loginSevice.login()
      return this.users
    }
    
}