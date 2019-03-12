import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, args?: string): Array<string> {
    const res = [];
    for(let nombre of value){
      if(nombre.match(new RegExp(args,'i'))){
        res.push(nombre);
      }
    }
    return res;
  }

}
