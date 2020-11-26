import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'slicer'
})
export class SlicerPipe implements PipeTransform {
  transform(args: string): string {
    const str = args;
    str.substring(0, 20);
    return `${str}` + '...';
  }
}
