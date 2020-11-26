import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'htmlEntities'
})
export class HtmlEntitiesPipe implements PipeTransform {

  transform(args: string): string {
    // &colon;&rpar;
    /*const Regcheck = /\W\s/gi;
    const htmlListObj = {
      '&#8211;': ''
    };

    /!* var a = str.split(" ");
    for(var i = 0;i<a.length;i++){
      if(a[i] === Regcheck )
    }*!/

    for (let i = 0; i < args.length; i++) {
      if (args[i].match(Regcheck) === htmlListObj[i]) {
        args =  args.replace(args[i], htmlListObj[i]);
        console.log('ici');
      }
    }
    return args;*/
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < args.length; i++) {
      args =  args =  args.replace('&#8211;', '–');
    }
    return args;
  }
}
