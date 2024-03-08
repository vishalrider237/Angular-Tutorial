import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {
  counter=0;
  EventEmiiter=new EventEmitter<string>();
  booleanOb=new Observable((observe)=>{
    setTimeout(()=>{
      observe.next(true)
    },2000)
  })
    asyncPipe=new Observable((observe)=>{
      // let i=0;
      // setInterval(()=>{
      //   observe.next("hello "+i)
      //   i++;
      // },2000)
      observe.next("Initial Value")
      
    })
    emitValue(){
        this.EventEmiiter.emit("This is event emitter "+this.counter)
        this.counter++;
    }
}
