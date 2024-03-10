import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {
  printElement(heading:HTMLHeadingElement,inputElement:HTMLInputElement,container:HTMLDivElement){
          // console.log(heading);
          //   console.log(inputElement);
           console.log(inputElement.value);
           console.log(inputElement.type);
           console.log(heading.innerHTML);
           heading.innerHTML="This is changed text"
            console.log(heading.innerHTML);
            console.log(container.innerHTML);
            container.innerHTML='<div>This is new elememnt</div>'
            container.style.backgroundColor='red'
  }
}
