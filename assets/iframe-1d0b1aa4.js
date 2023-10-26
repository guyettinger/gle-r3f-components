import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(i,_){return new URL(i,_).href},O={},o=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/components/TileGallery/TileGallery.stories.tsx":async()=>o(()=>import("./TileGallery.stories-9b64e97a.js"),["./TileGallery.stories-9b64e97a.js","./react-three-fiber.esm-4fee7c38.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./extends-98964cd2.js","./index-0332b2ed.esm-4227e939.js","./client-e770a681.js"],import.meta.url),"./src/components/Stars/Stars.stories.tsx":async()=>o(()=>import("./Stars.stories-0d091a2d.js"),["./Stars.stories-0d091a2d.js","./react-three-fiber.esm-4fee7c38.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./extends-98964cd2.js","./index-0332b2ed.esm-4227e939.js"],import.meta.url),"./src/components/Macbook/Macbook.stories.tsx":async()=>o(()=>import("./Macbook.stories-b400052c.js"),["./Macbook.stories-b400052c.js","./react-three-fiber.esm-4fee7c38.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./extends-98964cd2.js","./client-e770a681.js"],import.meta.url)};async function w(i){return R[i]()}const{composeConfigs:T,PreviewWeb:P,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const i=await Promise.all([o(()=>import("./config-bf31e67a.js"),["./config-bf31e67a.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./_getPrototype-b3ba11f7.js","./client-e770a681.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-83ce6104.js"),[],import.meta.url),o(()=>import("./preview-f6b6715a.js"),[],import.meta.url),o(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-6751e51d.js"),["./preview-6751e51d.js","./_commonjsHelpers-de833af9.js"],import.meta.url),o(()=>import("./preview-1e5c59db.js"),[],import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{o as _};
//# sourceMappingURL=iframe-1d0b1aa4.js.map
