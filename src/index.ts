/// <reference path="./types/config.d.ts" />

import * as apiComics from './endpoints/comics';

export namespace api {
    export const comics = apiComics.comics;
}
