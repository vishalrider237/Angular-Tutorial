import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  firstName="Vishal";
  LastName="Pandey";
  FullName=this.firstName+this.LastName;
  address="Buxar";
  laptops=['Macbook','Dell','Hp']
  flag=false
  currentDate=new Date()

  getFullName(){
    return this.firstName+" "+this.LastName;
  }
  getNameInCap(){
    return (this.firstName+" "+this.LastName).toUpperCase();
  }
}
