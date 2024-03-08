import { Component } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name="Vishal Pandey"
  contact=123455
  list=[
    new Person("Sachin","Mumbai",23345)
  ]
}
