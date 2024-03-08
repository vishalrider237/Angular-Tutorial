import { Component,EventEmitter,Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit{
  ngOnInit(): void {
    this.customeEventEmitter.emit(this.counter);
  }
  @Input() counter=0;
  @Input('firstName') name=''
  @Output() customeEventEmitter=new EventEmitter<number>()
  increaseCounter(){
    this.counter++;
    this.customeEventEmitter.emit(this.counter)
  }
}
