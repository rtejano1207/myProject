import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personNameUpperCase'
})
export class PersonNameUpperCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `${value.toUpperCase()}, have a nice day!`;
  }

}
