import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"toC"
})
export class ToCelPipe implements PipeTransform{
    transform(value: number) {
        const c=(value-32)/1.8;
        return c.toFixed(2);
    }

}