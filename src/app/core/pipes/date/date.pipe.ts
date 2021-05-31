import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   // console.log(value)
    return value;
  }
  // transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
  //   date = new Date(date);  // if orginal type was a string
  //   date.setDate(date.getDate()-day);
  //   return new DatePipe('en-US').transform(date, format);
  // }

}
