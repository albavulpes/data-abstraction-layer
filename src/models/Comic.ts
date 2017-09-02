import {Model} from '../base/Model';
import {Arc} from './Arc';
import {PageImage} from './PageImage';

export class Comic extends Model {
    Title: string;
    Description: string;
    Arcs: Arc[];
    CoverImage: PageImage;
}