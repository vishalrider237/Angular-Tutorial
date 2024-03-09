import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
    userId12=''
    userName=''
    userAddress=''
  
      constructor(private activatedRoute:ActivatedRoute){

      }
      // component initialize ,this method called
      
  ngOnInit(): void {
    const users=this.activatedRoute.snapshot.data["data"]
    console.log(users);
    
    // one Way of data fetching from url parameter
    const userid=this.activatedRoute.snapshot.paramMap.get("userId")
    console.log(`User Id ${userid}`);
    const userid1=this.activatedRoute.snapshot.params['userId']
    console.log(`User Id ${userid1}`);
    console.log(this.activatedRoute.snapshot.paramMap.getAll("userId"));
    
    // Observable this is best way to use 
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      const userId=paramMap.get("userId")
      const userName=paramMap.get('userName')
      const userAddress=paramMap.get('userAddress')
      console.log(`User Id1 by observable ${userId}`);
      console.log(`User Name by observable ${userName}`);
      console.log(`User Address by observable ${userAddress}`);
      this.userId12=userId ||''
      this.userName=userName || ''
      this.userAddress=userAddress||''
    })
    this.activatedRoute.params.subscribe(params=>{
      const userId=params['userId']
      console.log(`User Id2 by observable ${userId}`);
    })
  }
}
