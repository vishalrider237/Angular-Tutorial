import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  exportAs:'child'
})
export class ChildComponent implements OnInit{
   ngOnInit(): void {
     setTimeout(()=>{
      this.students.push({
        name:"Sachin",
        id:323
      })
     },3000)
   }
   students=[
    {
      name:"John",
      id:34
    },
    {
      name:"Peter",
      id:43
    }
   ]
}
