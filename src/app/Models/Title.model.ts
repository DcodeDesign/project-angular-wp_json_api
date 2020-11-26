import {ITitle} from '../Interfaces/ITitle';
import {Deserializable} from '../Interfaces/Deserializable';

export class TitleModel implements Deserializable, ITitle{
  rendered: string;
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
