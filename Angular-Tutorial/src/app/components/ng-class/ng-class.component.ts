import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  primary=false
  ob={
    primary: this.primary,
   
    fontstyle:true
  }
  offPrimary(){
   
    this.primary=!this.primary
  }
  offFontStyle(){
    this.ob.fontstyle=false;
  }
}
