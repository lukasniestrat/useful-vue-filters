
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.replace('/', '').replace(' ', '');
  }

}