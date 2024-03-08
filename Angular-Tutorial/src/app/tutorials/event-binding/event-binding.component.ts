import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  ob={
    color:'black'
  }
  active=false
  buttonClick(){
    alert("you have clicked")
    this.ob.color='red'
      // this.active=!this.active
  }
  mouseEntered(){
    alert("Mouse entered")
  }
  counter=1;
  increaseCount(event:MouseEvent){
    // console.log(event.target);
    let button=event.target as HTMLButtonElement;
    console.log(button.textContent);
    
    this.counter++;
  }
  inputType(event:KeyboardEvent,inputField: HTMLInputElement){
     console.log(event.target);
    //  let value=event.target as HTMLInputElement;
    //  console.log(value.value);
     console.log(inputField.value);
     inputField.setAttribute('style','color:red')
  }
  inputType1(event:Event,inputField:HTMLInputElement){
    console.log(event.target);
    
    console.log(inputField.value);
    
  }
}
