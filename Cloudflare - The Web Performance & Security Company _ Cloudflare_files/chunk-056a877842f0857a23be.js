(window.webpackJsonp=window.webpackJsonp||[]).push([[39,40,41],{1198:function(n,e,r){"use strict";r.r(e);var t=r(381),o=r(390);window.addEventListener("load",(function(){Object(t.transformDashLinks)(),Object(o.forceLocaleLinks)()}))},381:function(n,e,r){"use strict";r.r(e),r.d(e,"transformDashLinks",(function(){return t}));var t=function(){var n=window.CFJS.config.serverLang;"en-us"!==n&&document.querySelectorAll('a[href*="dash.cloudflare.com"').forEach((function(e){e.search+=e.search.length?"&lang=".concat(n):"lang=".concat(n)}))}},390:function(n,e,r){"use strict";r.r(e),r.d(e,"forceLocaleLinks",(function(){return i}));var t=["en-us","en-gb","en-ca","en-au","en-in","de-de","es-es","es-la","fr-fr","it-it","ja-jp","pt-br","zh-tw","zh-cn","ko-kr"],o=["resources/assets/","resources/images/"],i=function(){var n=window.CFJS.config.serverLang;"en-us"!==n&&document.querySelectorAll("a").forEach((function(e){if(e.origin===window.location.origin||"https://www.cloudflare.com"===e.origin){var r=e.pathname.split("/").find((function(n){return""!==n}));t.indexOf(r)<0&&!o.find((function(n){return e.pathname.indexOf(n)>=0}))&&(e.pathname=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return("/"===(e[0]||"")[0]?"/":"")+e.filter((function(n){return!["","/","//"].some((function(e){return n===e}))})).map((function(n){var e="/"===n[0]?1:0,r="/"===n[n.length-1]?n.length-1:void 0;return e||r?n.substring(e,r):n})).join("/")}(n,e.pathname))}}))}}},[[1198,0]]]);