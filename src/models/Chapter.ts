import {Model} from '../base/Model';
import {Page} from './Page';

export class Chapter extends Model {
    Number: number;
    Pages: Page[];
}