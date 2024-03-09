import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable()
export class ActivateGuard implements CanActivate{
    constructor(private router:Router,private userservice:UserService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // const isActive=false
        console.log("Activated Guard Executed");
        if(this.userservice.isLoggedIn()){
            return true;
        }
        this.router.navigate(['/about'])
        return false
    }
}