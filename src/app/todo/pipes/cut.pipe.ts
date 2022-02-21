import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, lenght: number = 10): string {
    if (value.length > lenght) {
      return `${value.substring(0, lenght)}...`;
    }

    return value;
  }

}
