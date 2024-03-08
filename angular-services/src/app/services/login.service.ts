import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoginService {
    constructor(){
        console.log("Object created login service");
    }
    login(){
        console.log("Logging user")
    }
}