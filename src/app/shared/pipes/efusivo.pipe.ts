import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'efusivo'
})
export class EfusivoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + '!!!!!';
  }

}
