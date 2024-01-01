// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e,n){var s,i;if(!t(e))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",e));if(!t(n))throw new TypeError(r("invalid argument. Second argument must be a string. Value: `%s`.",n));if(e.length!==n.length)return-1;for(s=0,i=0;i<e.length;i++)e[i]!==n[i]&&(s+=1);return s}export{e as default};
//# sourceMappingURL=index.mjs.map
