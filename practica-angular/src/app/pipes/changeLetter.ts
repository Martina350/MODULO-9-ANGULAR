import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeLetter'
})
export class ChangeLetterPipe implements PipeTransform {
  transform(value: string, mayus: boolean = false): string {
    let result = value.replaceAll("e", "3").replaceAll("i", "1");
    if (mayus) {
      result = result.toUpperCase();
    }
    return result;
  }
}