import {ITitle} from './ITitle';

export interface IArticles {
  id: string;
  title: ITitle;
  content: {
    rendered: string;
  };
}
