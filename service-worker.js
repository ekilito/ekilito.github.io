if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>c(e,r),f={module:{uri:r},exports:a,require:n};i[r]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c9e22a7f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b0b8c394c033fe5f90512cda916bec79"},{url:"about/index.html",revision:"8f55dc4b61dfe72af98428d704d202d9"},{url:"album/index.html",revision:"20306ce49a44072d3d4cb2397474edd4"},{url:"anzhiyu/random.js",revision:"f6bd4644e6ff96be7d9a09f4eaadd778"},{url:"archives/2023/08/index.html",revision:"a5dfcf81f84456ee172b6ee7d1e7b020"},{url:"archives/2023/index.html",revision:"5d4a9e3a327ba31c3b5ad476dce52a87"},{url:"archives/index.html",revision:"5f187caba8f4c15aeaddd3f3bf349a61"},{url:"bangumis/index.html",revision:"98e5b9880d84f3a9120303bd48ba238b"},{url:"categories/index.html",revision:"70d4417c7fd999b63a30910e972da31f"},{url:"categories/javascript/index.html",revision:"c4c194830b732c124a5dd18257474080"},{url:"categories/技术/index.html",revision:"09cc01a873a4fdf7caf4dd9ed33f819d"},{url:"categories/生活/index.html",revision:"6f092c5dfc3a664776d5057075969069"},{url:"comments/index.html",revision:"3562879ea9782f7bbbec2a2962d4bc4b"},{url:"css/cursur.css",revision:"2c3b0dddcebe9576a736730fdacfa809"},{url:"css/custom.css",revision:"a302d70a47256339159f136a358354e7"},{url:"css/fenleiye.css",revision:"918d173f5193f1d9ff601ae4427452c7"},{url:"css/index.css",revision:"678a0ca1d7ebbb9dd975485d351f08d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"2c2f32f0d076c649d7d58891d3418836"},{url:"equipment/index.html",revision:"2ed4d9b5221019144d804223f9d1ea8b"},{url:"essay/index.html",revision:"c17918060d0b96cdce2cd68c050b3ab2"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"a8607229df0c54308ef4b77bf1463708"},{url:"js/cursur.js",revision:"f9ab37911d9edb00a1fefce938b7bd7d"},{url:"js/gghello.js",revision:"1c0492295b1a00513aed2476bc81540f"},{url:"js/iconfont.js",revision:"0189dcde5eae3f41ee0d3065ffc10103"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"abc188c87ccf64f31fa3d0eb47649a4f"},{url:"js/welcome.js",revision:"e4f6824c9753af498c588a840a4186be"},{url:"kongtiao/index.html",revision:"d35072183903e85b803b02f5ce19009a"},{url:"link/index.html",revision:"a951f83e7257ba48c1b24c0b6123efc8"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"9f8c26343dbf3365d0ec948ffe4cfa43"},{url:"posts/16107.html",revision:"6cf0e744af605f40f96e04a2c6228ae8"},{url:"posts/3927.html",revision:"158ac620dbf1c932519e78e816e1412f"},{url:"posts/882eae4.html",revision:"b86b9d4062876fb087e2a0d58b7c6cd4"},{url:"posts/b313554c.html",revision:"9393dbec378fda3914b35a222ba80af9"},{url:"tags/index.html",revision:"835002f9b1266ac9f13e280c3e74eca6"},{url:"tags/javascript/index.html",revision:"b18c8c0ca63f09c1e808440b19229f3c"},{url:"tags/技术/index.html",revision:"4276c68d13b9d07dd441217e095c704f"},{url:"tags/生活/index.html",revision:"cc0c5446d4736cecfe5d99f0b733705b"},{url:"wordScenery/index.html",revision:"f746bb945db813e9360477c0e7cacc51"},{url:"zaobao/index.html",revision:"e739be8e6adb4ccb9757282d1e58e8e3"}],{})}));
//# sourceMappingURL=service-worker.js.map
