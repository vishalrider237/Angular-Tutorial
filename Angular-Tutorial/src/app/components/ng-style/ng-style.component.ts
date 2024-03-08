import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  ob={
    color:'red',backgroundColor:'black',padding:'10px',borderRadius:'10%'
  }
  changeStyle(){
    this.ob.borderRadius='0px'
    this.ob.backgroundColor='#e2e2e2'
  }
}
