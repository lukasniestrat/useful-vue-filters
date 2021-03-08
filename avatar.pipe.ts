import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  /**
   * Transform names into initials "Max Mustermann" -> "MM"
   * @param value string
   * @param args unknown[]
   */
  public transform(value: string, ...args: unknown[]): unknown {
    const names = value.split(' ');
    const firstName = names[0];
    const lastName = names[names.length - 1];

    return `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`;
  }

}