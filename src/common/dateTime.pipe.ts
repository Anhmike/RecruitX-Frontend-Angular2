import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateTime'})
export class DateTimePipe implements PipeTransform {
    transform(value: string): string {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(value);
        return date.getHours()+ ":" + date.getMinutes() + " " + date.getDate() + "th " + months[date.getMonth()];
    }
}