import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CAZX17mT.mjs';
import { manifest } from './manifest_5UWiD3-B.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-me.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/hobbies-interests.astro.mjs');
const _page4 = () => import('./pages/portfolio.astro.mjs');
const _page5 = () => import('./pages/users/add.astro.mjs');
const _page6 = () => import('./pages/users.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-me.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/hobbies-interests.astro", _page3],
    ["src/pages/portfolio.astro", _page4],
    ["src/pages/users/add.astro", _page5],
    ["src/pages/users/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "28de373b-297c-4aa5-8402-c03d3f3bea2c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
