import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
  standalone: true
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string ): unknown {
  return value.toLocaleUpperCase();
  
  }

}
