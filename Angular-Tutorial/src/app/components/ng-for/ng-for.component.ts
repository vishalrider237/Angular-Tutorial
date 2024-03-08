import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  students=[
    new Student("Vishal Pandey",234545,"CSE"),
    new Student("Vickey Pandey",345666,"ECE"),
    new Student("Neha Pandey",8865,"Civil"),
    new Student("Manoj Pandey",299876,"EEE"),
    new Student("Dinesh Pandey",44677,"Mechanical")
  ]
  clearStudents(){
    this.students=[]
  }

}
