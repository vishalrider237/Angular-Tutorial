import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"TempConv"
})
export class TempConverterPipe implements PipeTransform{
    transform(value: number,temp:string) {
        if(temp==='C'){
           const c=(value-32)/1.8
           return c.toFixed(2)
        }else if(temp==='F'){
            const f=(value*1.8)+32
            return f.toFixed(2)
        }
        return null;
    }

}