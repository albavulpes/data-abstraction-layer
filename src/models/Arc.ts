import {Model} from '../base/Model';
import {Chapter} from './Chapter';

export class Arc extends Model {
    Title: string;
    Number: number;
    Chapters: Chapter[];
}