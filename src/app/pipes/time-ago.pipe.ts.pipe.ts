import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow, parseISO } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone:true
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: Date | string): string {
    // If date is a string, parse it to a Date object
    const dateObject = typeof date === 'string' ? parseISO(date) : new Date(date);

    // Use formatDistanceToNow to get the relative time
    return formatDistanceToNow(dateObject, { addSuffix: true });
  }
}
