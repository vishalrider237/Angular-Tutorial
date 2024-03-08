import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.css']
})
export class ParentCompoComponent {
  parentCounter=0;
  parentMethod(event:any){
    // alert("alert from parent")
    this.parentCounter=event;
  }
}
