import {ITitle} from './ITitle';

export interface IArticles {
  id: number;
  title: ITitle;
  content: {
    rendered: string;
  };
  deserialize(input: any): this;
}
