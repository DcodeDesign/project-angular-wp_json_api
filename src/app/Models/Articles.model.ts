import {Deserializable} from '../Interfaces/Deserializable';
import {TitleModel} from './Title.model';
import {IArticles} from '../Interfaces/IArticles';

export class ArticlesModel implements Deserializable, IArticles {
  id: string;
  title: TitleModel;
  content: {
    rendered: string
  };
  private titleModel: any;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.titleModel = new TitleModel().deserialize(input.car);
    return this;
  }

  test(): string {
    return this.id.toString();
  }
}
