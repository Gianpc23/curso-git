import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: any, arg1: number = 0,arg2?:number): number {
    let res = value * 2;
    if(arg1){
      res += arg1;
    }
    if(arg2){
      res -= arg2;
    }
    return res;
  }

}
