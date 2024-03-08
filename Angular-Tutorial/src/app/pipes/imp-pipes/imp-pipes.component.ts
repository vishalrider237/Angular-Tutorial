import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-pipes',
  templateUrl: './imp-pipes.component.html',
  styleUrls: ['./imp-pipes.component.css']
})
export class ImpPipesComponent {
     name="Ankit Kumar"
     description="He is famous singer"
      itemPrice=2145.451245
      percentage=0.3478;
      amount=45600;
      csDate=new Date()
     convertUppercase(value:string){
      return value.toUpperCase()
     }
}
