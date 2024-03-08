import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[csif]'
})
export class CsIf implements OnInit{
    csif:boolean|undefined
    constructor(private container:ViewContainerRef,private template:TemplateRef<any>){

    }
    @Input()
    set csIf(condition:boolean){
        this.csIf=condition;
        this.updateView()
    }
    updateView(){
        if(this.csIf){
            this.container.createEmbeddedView(this.template);
        }
        else{
            this.container.clear()
        }
    }
    ngOnInit(): void {
        
        
    }

}