if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>c(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(s.map((e=>n[e]||f(e)))).then((e=>(d(...e),a)))}}define(["./workbox-c9e22a7f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7a10d23858c0ecfde3e49adf55fd8451"},{url:"about/index.html",revision:"1c036b3dec484f13e3fcdff05f28eb65"},{url:"album/index.html",revision:"4f8bbf1e4d2f8509ae89ec4c5113bfbe"},{url:"anzhiyu/random.js",revision:"3df064d6393c8114c3cbf627d158d9b2"},{url:"archives/2023/08/index.html",revision:"546095cc2611153d966b200789a7e385"},{url:"archives/2023/index.html",revision:"c0c9ec676fd9d58e6839a11b725cbb7f"},{url:"archives/index.html",revision:"277ded1162c1a6e1be29dcdcead72a76"},{url:"bangumis/index.html",revision:"1919e1c7357f106c31b9437d12607426"},{url:"categories/index.html",revision:"8135961b08eaa9ebd57e487c86df25a2"},{url:"categories/前端/index.html",revision:"01c7d5f8ad74659f5efc720e060d4ab0"},{url:"categories/生活/index.html",revision:"bad30e35f16c00e0911071f51f3f3977"},{url:"categories/面试/index.html",revision:"43ef5c9b4c64befa81393b9019f02896"},{url:"comments/index.html",revision:"791a3425bd8d7310476254bb6ddb8c42"},{url:"css/cursur.css",revision:"2c3b0dddcebe9576a736730fdacfa809"},{url:"css/custom.css",revision:"bc351ad74ad69bfdcc9d6685e7f34506"},{url:"css/fenleiye.css",revision:"491d033c2b78a28440edd3a927a191f5"},{url:"css/index.css",revision:"ce3d71938583bd90b22414b7f64f0102"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"a6edadd74b5e6963f4724230f92eb6ea"},{url:"equipment/index.html",revision:"96c8facc615e4d56812882c834fa05f9"},{url:"essay/index.html",revision:"05a0e445ec04340988f23ec00076ceaf"},{url:"fcircle/index.html",revision:"289fe86e96b1b94d39f85f1c045f6253"},{url:"img/32.png",revision:"9a04a81fd550be5350faf27b47ebfa29"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/48.png",revision:"64f7e450049bb0267250f9c36bcb415a"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"0201e6e4bad43209ed5e16cb5df00586"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/cursur.js",revision:"f9ab37911d9edb00a1fefce938b7bd7d"},{url:"js/fps.js",revision:"ca57ef51adff01db804905cff8335ae2"},{url:"js/friend.js",revision:"94c6120deb12400aebb23b63d180c8ec"},{url:"js/gghello.js",revision:"1c0492295b1a00513aed2476bc81540f"},{url:"js/iconfont.js",revision:"0189dcde5eae3f41ee0d3065ffc10103"},{url:"js/main.js",revision:"c808a74df0ccc088c07b38734f2e8ee7"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"9d795b0b1ec3ca6dd9129cd3080ee648"},{url:"js/welcome.js",revision:"e4f6824c9753af498c588a840a4186be"},{url:"kongtiao/index.html",revision:"eeafcee703f96445c65e3008e9091861"},{url:"link/index.html",revision:"b42557077dccf0dee629d3c5412ec6ba"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"577a332f8a52e7639c1d89972c0ae64d"},{url:"posts/3927.html",revision:"b441c2c51388c1366eca6cc0cdbb71f6"},{url:"posts/882eae.html",revision:"927c6d9fd03b1ee8c328c950999540bc"},{url:"posts/882eae4.html",revision:"5820e80194fcca118c8708b3e63fe995"},{url:"posts/882eae5.html",revision:"d3e7f3be374819cf3e719c663461e9d8"},{url:"posts/b313554c.html",revision:"c8f144668f88815efd3aaba1d9449a34"},{url:"posts/f82ea27.html",revision:"8a8f6827f3ca3f3576d379feeb450639"},{url:"posts/undefined.html",revision:"f826c7c3d0c3a1c07cc7dc2b77ec3d9b"},{url:"tags/fetch/index.html",revision:"fc6eb28808a21e3d2e431171ced9c3fd"},{url:"tags/Generato/index.html",revision:"63919b530872b2d3823c2949466522a0"},{url:"tags/index.html",revision:"c078364ee12287207118e2afb2471952"},{url:"tags/js面试题/index.html",revision:"044fe3875da831ff080602940c91d115"},{url:"tags/koa/index.html",revision:"883cd2a7422804db5c355a23ef680e2c"},{url:"tags/this/index.html",revision:"506302fbc3d0670f9ec07cf4e5259c04"},{url:"tags/vue原理/index.html",revision:"140c49d639435d6c7225f5449f40d05f"},{url:"tags/手写/index.html",revision:"fac416e694caf219c6e4290bb37f05fe"},{url:"tags/手写Promise/index.html",revision:"5519ffea507c2bcd603e068ea0219264"},{url:"tags/柯里化/index.html",revision:"01e11a0186e055976a92840250db4113"},{url:"tags/生活/index.html",revision:"e8ae554057029711320e1cc7e478b6b4"},{url:"tags/继承/index.html",revision:"d1cb8af02755eb6d3dcc793568eebf18"},{url:"tags/设计模式/index.html",revision:"6ac61fc34e6bf4f5dffc2be00019cbb1"},{url:"tags/闭包/index.html",revision:"27f53f98e1feb0c6de1bbf61403d2f49"},{url:"wordScenery/index.html",revision:"f7a1c3ba2c38c19e9a5ee632ebc7e3eb"},{url:"zaobao/index.html",revision:"49de12fe0d79f5e6065f645e556fe159"}],{})}));
//# sourceMappingURL=service-worker.js.map
