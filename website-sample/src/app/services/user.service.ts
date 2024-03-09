import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[
    new User("Vishal",123),
    new User("Vickey",132),
    new User("Neha",113)
]

  constructor() { }
  isLoggedIn(){
    return true
  }
  getUsers(){
    return this.users;
  }
}
export class User{
  constructor(public name:string,public userid:number){

  }
}
