import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import DOMPurify from 'dompurify';
@Pipe({
  name: 'htmlEntities'
})
export class HtmlEntitiesPipe implements PipeTransform {
  private txt: any;

  transform(args: string): string {
    return `${args}`;
  }
}
