import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProfileComponent } from "../components/profile/profile.component";
import { Observable, delay, of } from "rxjs";
import { User, UserService } from "../services/user.service";

@Injectable()
export class ResolveGuard implements Resolve<Observable<User[]>>{
    constructor(private userService:UserService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return of(this.userService.getUsers()).pipe(delay(2000))
    }

}