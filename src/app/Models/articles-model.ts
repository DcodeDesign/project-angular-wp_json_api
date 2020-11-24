import {Deserializable} from '../Interfaces/Deserializable';

export class ArticlesModel implements Deserializable {
  id: number;
  title: {
    rendered: string;
  };

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

}
