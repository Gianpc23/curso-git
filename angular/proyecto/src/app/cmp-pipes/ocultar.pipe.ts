import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {
  transform(value: string, arg1: string[]): string {
    let arr: string[] = value.split(" ");
    arr = arr.map((elem) => {
      if (arg1.includes(elem)) 
        return elem.split('').map(() => "*").join('');
      else 
        return elem;
    });
    return (arr.join(' '));
  }

}
