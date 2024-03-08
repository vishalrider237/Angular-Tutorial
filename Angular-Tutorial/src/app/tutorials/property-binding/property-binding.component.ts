import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
   active=false
   title="This is title from inner HTML <b>This is bold</b>"
   ob={
    color:'black'
   }
   imagePath='https://picsum.photos/200/300'
}
