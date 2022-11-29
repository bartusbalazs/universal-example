import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    date.setHours(date.getHours() + 2);
    return date.getHours() + ":" + ((date.getMinutes()<10?'0':'') + date.getMinutes());
  }

}
