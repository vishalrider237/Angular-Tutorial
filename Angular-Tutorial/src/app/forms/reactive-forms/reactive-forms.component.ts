import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder, Validators, FormArray} from '@angular/forms';
import { AgeValidator } from '../validators/age.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
    
  constructor(private formBuilder:FormBuilder){

  }
  dynamicFriendName:string=''
  addFriendToList(){
          this.friendList.push({
            id:Number((Math.random()*100).toFixed(0)),
            name:this.dynamicFriendName
          })  
  }
  
  
     userForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      age:new FormControl('',[AgeValidator.age,Validators.required]),
      gender:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      about:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")])
     })
     get name():FormControl{
      return this.userForm.get("name") as FormControl
     }
     get email():FormControl{
      return this.userForm.get('email') as FormControl
     }
     get age():FormControl{
      return this.userForm.get('age') as FormControl
     }

     loginForm=this.formBuilder.group({
      email:['test@gmail.com',[Validators.required,Validators.minLength(4),Validators.email]],
      password:[''],
      address:this.formBuilder.group({
        city:[''],
        street:[''],
        country:['']
      }),
      interest:this.formBuilder.array([]),
     })
      getInterst():FormArray{
        return this.loginForm.get("interest") as FormArray;
      }
      createInterest():FormGroup{
        return this.formBuilder.group({
          name:'',
          timePerDay:''
        })
      }
      friendList=[
        {
          id:1,
          name:'Ram'
        },
        {
          id:2,
          name:'Shyam'
        },
        {
          id:3,
          name:'Bhim'
        },
        {
          id:4,
          name:'Vandana'
        }
      ]
      friendlistModel=this.formBuilder.group({
        friends:[1]// by default 2nd one will be selected
      })
      ngOnInit(): void {
       console.log("Componenet initialed")
       this.loginForm.get("email")?.valueChanges.subscribe(value=>{
        console.log("Email field value changed")
        console.log("New Value "+value)
       })
       this.loginForm.get("password")?.valueChanges.subscribe(newValue=>{
        console.log("New Paasword is "+newValue)
       })
       this.loginForm.valueChanges.subscribe(ob=>{
        console.log("Form Changed"+ob)
       })
       this.loginForm.get("email")?.statusChanges.subscribe(newStatus=>{
        console.log("Validation Status recalculate"+newStatus)
        if(newStatus==="VALID"){
          alert("Now Email is valid")
        }
        else{
          alert("Email is Invalid")
        }
        
       })
  }
      addInterst(){
        return this.getInterst().push(this.createInterest())
      }
      removeInterest(i:number){
        this.getInterst().removeAt(i);
      }
    loginFormSubmitted(){
      console.log(this.loginForm.value)
    }
     formSubmitted(){
         console.log(this.userForm.value)
        console.log(this.userForm)
     }
     friendListFormSubmitted(){
      console.log(this.friendlistModel.value)
     }
}
