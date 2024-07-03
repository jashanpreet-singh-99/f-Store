import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice',
  standalone: true
})
export class ProductPricePipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) return '';

    const formattedValue = value.toFixed(2);
    return `$ ${formattedValue}`;
  }

}
