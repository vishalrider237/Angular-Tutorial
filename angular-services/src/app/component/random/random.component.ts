import { Component, OnInit, Optional,SkipSelf} from '@angular/core';
import { RandomSevice } from 'src/app/services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  // providers:[RandomSevice]
})
export class RandomComponent implements OnInit{
  random=0
   constructor(@Optional() private randomSevice:RandomSevice){

   }
  ngOnInit(): void {
    if(this.randomSevice){
    this.random=this.randomSevice.getNumber()
    }
  }

}
