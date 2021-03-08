import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban'
})
export class IbanPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const iban: string = value.replace(' ', '').replace(/(.{4})/g, '$1 ');

    return iban;
  }
}