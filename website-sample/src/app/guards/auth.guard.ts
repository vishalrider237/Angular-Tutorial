import { inject } from "@angular/core";
import { UserService } from "../services/user.service";

export const AuthGuard=()=>{
    const userService=inject(UserService)
    console.log("Executing Functional Guard");
    return userService.isLoggedIn()
}