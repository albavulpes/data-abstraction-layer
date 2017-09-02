import {Model} from '../base/Model';
import {PageImage} from './PageImage';

export class Page extends Model {
    Number: number;
    Image: PageImage;
    Description: string;
}