import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeAscii'
})
export class ChangeAsciiPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      const charCode = value.charCodeAt(i);
      result  += charCode + ' ';
    }
    return result;
  }
}