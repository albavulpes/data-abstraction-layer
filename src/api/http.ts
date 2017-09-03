///<reference path="../types/superagent-use.d.ts"/>
///<reference path="../types/config.d.ts"/>

import * as superagent from 'superagent';
import * as prefix from 'superagent-prefix';
import * as superagentUse from 'superagent-use';

const http = superagentUse(superagent);

http.use(prefix(config.ApiPath));

export {
    http
};