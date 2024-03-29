import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoSum'
})
export class TwoSumPipe implements PipeTransform {

  transform(value:String,n1:number,n2:number): unknown {
    return `${value}:${n1+n2}`;
  }

}
