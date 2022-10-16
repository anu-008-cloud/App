import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome'
})
export class CustomePipe implements PipeTransform {

  transform(value: string,name:string): string {
    return 'first name : '+name;
  }

}
