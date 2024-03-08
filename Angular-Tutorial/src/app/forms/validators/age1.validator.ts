import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:"[age1Validator]",
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:AgeValidator1,
            multi:true
            
        }
    ]
})
export class AgeValidator1 implements Validator{
    @Input() validatorName:string=''
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const value=control.value
        if(value<18){
            return {age:true,requiredValue:'>18'}
        }
        return null;
    }
   

}