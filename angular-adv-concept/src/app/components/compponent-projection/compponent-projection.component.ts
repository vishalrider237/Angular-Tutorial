import { Component } from '@angular/core';

@Component({
  selector: 'app-compponent-projection',
  templateUrl: './compponent-projection.component.html',
  styleUrls: ['./compponent-projection.component.css']
})
export class CompponentProjectionComponent {
  buttonClciked(event:any){
    alert('This is Custom button')
    console.log(event);
    
  }
}
