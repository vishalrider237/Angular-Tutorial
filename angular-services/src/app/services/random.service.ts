import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn:'root'
// })
export class RandomSevice{
   getNumber(){
    return Math.random()*100;
   }
}