/**
 * Created by lizhenzhi on 2016/5/25.
 */
'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import importDir from 'import-dir';

const routes = importDir('./routes');

export default function api() {
    const router = new Router({ '/api' });

    Object.keys(routes).forEach(name => routes[name](router));

    return compose([
        router.routes(),
        router.allowedMethods(),
    ]);
}