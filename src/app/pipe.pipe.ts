import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, input: String) {
    if (input) {
      input = input.toLowerCase();
      return value.filter((el: any) => {
        return el.toLowerCase().indexOf(input) > -1;
      });
    }
    return value;
  }
}

