import { Component, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";

@Injectable()
export class DeactivateGuard implements CanDeactivate<ContactUsComponent>{
    canDeactivate(component: ContactUsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
        console.log("Leaving Contact us Page");
        
        return component.changesSaved
    }

}