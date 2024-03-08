import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AgeValidator{
    static age(controls:AbstractControl):ValidationErrors|null{
       let value=controls.value;
       if(isNaN(value)){
        return {age:true,requiredValue:'>18'}
       }
    //    if(value.trim()===''){
    //     // return {age:true,requiredValue:'>18'}
    //     return null;
    //    }
       if(value<18){
        return {'age':true,requiredValue:">18"}
       }
       return null;
    }
}