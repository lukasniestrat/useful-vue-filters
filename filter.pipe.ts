import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  /**
   * Transform
   * @param items Array to be searched
   * @param searchText Search String
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }
}