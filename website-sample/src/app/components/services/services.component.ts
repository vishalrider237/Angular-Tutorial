import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  name=''
  userid=''
  address=''
     constructor(private activated:ActivatedRoute){}
  ngOnInit(): void {
    this.activated.queryParamMap.subscribe(queryMap=>{
      const userid=queryMap.get("userId")
      const username=queryMap.get('name')
      const address=queryMap.get('address');
      console.log(userid+" "+username+" "+address);
      this.name=username||''
      this.address=address||''
      this.userid=userid||''
    })
    this.activated.queryParams.subscribe(queryParams=>{
      this.name=queryParams['name']
      console.log(this.name);
      
    })
  }
}
