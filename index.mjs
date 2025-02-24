// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,s){var n,o;if(!r(e))throw new TypeError(t("1n13F",e));if(!r(s))throw new TypeError(t("1n139",s));if(e.length!==s.length)return-1;for(n=0,o=0;o<e.length;o++)e[o]!==s[o]&&(n+=1);return n}export{e as default};
//# sourceMappingURL=index.mjs.map
