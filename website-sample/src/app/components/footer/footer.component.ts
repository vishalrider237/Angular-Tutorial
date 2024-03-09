import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router:Router){}
  gotoHome(){
       this.router.navigate(['/home']).then((data)=>{
        console.log(data);
        
        console.log("Navigated");
        
       }).catch((error)=>{
        console.log("Navigation failed");
        
       })
  }
  gotoProfile(){
    this.router.navigate(['/profile',21,"Vickey","Raghunathpur"])
  }
  gotoGoogle(){
    // this.router.navigateByUrl("https://www.google.com")
    window.location.href='https://www.google.com'
  }
}
