import {Deserializable} from '../Interfaces/Deserializable';
import {TitleModel} from './Title.model';
import {IArticles} from '../Interfaces/IArticles';

export class ArticlesModel implements Deserializable, IArticles {
  public id: number;
  public title: TitleModel;
  public content: any;

/*  constructor(id: number, title: any, content: any) {
    this.id = id;
    this.title = title;
    this.content = content;
  }*/

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
