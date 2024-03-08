import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { NgStyleComponent } from '../../components/ng-style/ng-style.component';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit{
 
  @ViewChild("userForm",{static:true}) userForm:NgForm |undefined
  
  user=new User("Vishal","vishal@gmail.com","Male","Patna","Software Engineer",0)

  ngOnInit(): void {
    this.user.name="Testing"
    setTimeout(()=>{
    this.userForm?.setValue(this.user)
  },2000)
  }
  formSubmitted(user:NgForm){
    console.table(user.value)
    console.log(user.valid)
    this.user.name="Vickey"
    this.user.about="Excise inspector"
    this.user.email="vickey@gmail.com",
    this.user.city="Patna"
    this.user.gender="Male"
  }
}
