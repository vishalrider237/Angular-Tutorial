import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name:"csPipeDate"
})
export class MyDatePipe implements PipeTransform{
    transform(value: Date, ...args: any[]) {
        return value.toLocaleString()
    }

}