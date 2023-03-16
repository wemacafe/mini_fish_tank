import{g as A,S as J,a as K,P as Q,N as U}from"./navigation.min-4f0dff63.js";import{_ as W,h as P,r as q,o as F,c as V,d as e,e as L,w as b,f as $}from"./index-95916aaa.js";function X({swiper:t,extendParams:r,on:c,emit:n,params:l}){t.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,u,f=l&&l.autoplay?l.autoplay.delay:3e3,p=l&&l.autoplay?l.autoplay.delay:3e3,o,v=new Date().getTime,S,x,h,j,D,m;function C(a){!t||t.destroyed||!t.wrapperEl||a.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",C),y())}const O=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?S=!0:S&&(p=o,S=!1);const a=t.autoplay.paused?o:v+p-new Date().getTime();t.autoplay.timeLeft=a,n("autoplayTimeLeft",a,a/f),u=requestAnimationFrame(()=>{O()})},H=()=>{let a;return t.virtual&&t.params.virtual.enabled?a=t.slides.filter(s=>s.classList.contains("swiper-slide-active"))[0]:a=t.slides[t.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},T=a=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(u),O();let d=typeof a>"u"?t.params.autoplay.delay:a;f=t.params.autoplay.delay,p=t.params.autoplay.delay;const s=H();!Number.isNaN(s)&&s>0&&typeof a>"u"&&(d=s,f=s,p=s),o=d;const g=t.params.speed,N=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(g,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,g,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(g,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,g,!0,!0),n("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return d>0?(clearTimeout(i),i=setTimeout(()=>{N()},d)):requestAnimationFrame(()=>{N()}),d},k=()=>{t.autoplay.running=!0,T(),n("autoplayStart")},E=()=>{t.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(u),n("autoplayStop")},_=(a,d)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(i),a||(m=!0);const s=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",C):y()};if(t.autoplay.paused=!0,d){D&&(o=t.params.autoplay.delay),D=!1,s();return}o=(o||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&o<0&&!t.params.loop)&&(o<0&&(o=0),s())},y=()=>{t.isEnd&&o<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),m?(m=!1,T(o)):T(),t.autoplay.paused=!1,n("autoplayResume"))},I=()=>{if(t.destroyed||!t.autoplay.running)return;const a=A();a.visibilityState==="hidden"&&(m=!0,_(!0)),a.visibilityState==="visible"&&y()},B=a=>{a.pointerType==="mouse"&&(m=!0,_(!0))},M=a=>{a.pointerType==="mouse"&&t.autoplay.paused&&y()},R=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",B),t.el.addEventListener("pointerleave",M))},Y=()=>{t.el.removeEventListener("pointerenter",B),t.el.removeEventListener("pointerleave",M)},z=()=>{A().addEventListener("visibilitychange",I)},G=()=>{A().removeEventListener("visibilitychange",I)};c("init",()=>{t.params.autoplay.enabled&&(R(),z(),v=new Date().getTime(),k())}),c("destroy",()=>{Y(),G(),t.autoplay.running&&E()}),c("beforeTransitionStart",(a,d,s)=>{t.destroyed||!t.autoplay.running||(s||!t.params.autoplay.disableOnInteraction?_(!0,!0):E())}),c("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){E();return}x=!0,h=!1,m=!1,j=setTimeout(()=>{m=!0,h=!0,_(!0)},200)}}),c("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!x)){if(clearTimeout(j),clearTimeout(i),t.params.autoplay.disableOnInteraction){h=!1,x=!1;return}h&&t.params.cssMode&&y(),h=!1,x=!1}}),c("slideChange",()=>{t.destroyed||!t.autoplay.running||(D=!0)}),Object.assign(t.autoplay,{start:k,stop:E,pause:_,resume:y})}const Z="/mini_fish_tank/assets/h-03-694dd334.png",w="/mini_fish_tank/assets/h-02-de0c1210.png",tt="/mini_fish_tank/assets/h-01-a077b711.png",et="/mini_fish_tank/assets/hb-2-c76e4bbe.png",at="/mini_fish_tank/assets/hb-1-74cbfdb9.png";const nt={methods:{play(){var t=document.getElementById("audio");t.play()}},components:{Swiper:J,SwiperSlide:K},setup(){const t=P(null),r=P(null);return{onAutoplayTimeLeft:(n,l,i)=>{t.value.style.setProperty("--progress",1-i),r.value.textContent=`${Math.ceil(l/1e3)}s`},progressCircle:t,progressContent:r,modules:[X,Q,U]}}},st={class:"position-absolute underwater"},ot=e("div",{class:"fish fish1"},null,-1),lt=e("div",{class:"fish fish2"},null,-1),it=e("div",{class:"fish fish3"},null,-1),dt=e("audio",{id:"audio",class:"bgmusic",src:"https://vgmsite.com/soundtracks/maplestory-music/txpfjmcpot/12-01%20Aquarium.mp3",controls:""},null,-1),ct=$('<div class="container d-flex flex-column" style="min-height:100vh;"><div class="row justify-content-center my-auto"><div class="col-md-4 text-center"><h1 class="py-2 hero-title">角角流口水</h1><p class="fs-4 mb-0">自己的魚、自己養，一起來翻轉小魚缸</p></div></div></div><div class="container py-5"><div class="row mt-5"><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+Z+'" class="card-img-top rounded-0 object-cover" alt="..." style="height:400px;"><div class="card-body text-center"><h4>你心目中的魚</h4><div class="d-flex justify-content-between"><p class="card-text text-muted mb-0"> 你知道魚隻有分淡水和海水嗎？電影場景出現的小丑魚和海葵游玩，是不是很有畫面，新手最好還是從淡水魚開始，話說養魚先講水，這就是一個坑的開始 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+w+'" class="card-img-top rounded-0 object-cover" alt="..." style="height:400px;"><div class="card-body text-center"><h4>水族設備的選購</h4><div class="d-flex justify-content-between"><p class="card-text text-muted mb-0"> 魚缸的種類非常的多，迷你小魚缸特別適合在這個都市養殖，也非常容易融入居家的景玄關場景，作為多用途的它，除了當4D畫布，還能當風水招財物 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-0 mb-4"><img src="'+tt+'" class="card-img-top rounded-0 object-cover" alt="..." style="height:400px;"><div class="card-body text-center"><h4>魚隻的照顧</h4><div class="d-flex justify-content-between"><p class="card-text text-muted mb-0"> 魚是不會吃大便的，但它生活在魚缸，也是它的馬桶，所以每一到二週，要幫它們換1/3水。魚也會感冒哦，它們不會流鼻涕，抵抗力不好的魚兒，身上會長白點 </p></div></div></div></div></div></div>',2),rt={class:"container my-3"},ut=e("div",{class:"row justify-content-center py-7"},[e("div",{class:"col-md-6 text-center"},[e("h3",null,"愛上小魚缸"),e("p",{class:"my-5"},"我們都希望有能力照顧別人，也許可以從不用花費太多心力的小魚缸開始，在繁忙的都市裡，靜下心來看看魚的泳姿，療癒身心。"),e("p",null,[e("small",null,"—角角流口水—")])])],-1),mt=e("div",{class:"row justify-content-center py-7"},[e("div",{class:"col-md-6 text-center"},[e("h3",null,"小魚缸互動"),e("p",{class:"my-5"},"貓貓狗狗很可愛，但養貓貓狗狗整理環境次數太頻繁，要想環境好，就要花時間教化。（愛他就不要放棄他）讓不用太花你時間的小魚缸來陪伴你吧"),e("p",null,[e("small",null,"—角角流口水—")])])],-1),yt=e("div",{class:"row justify-content-center py-7"},[e("div",{class:"col-md-6 text-center"},[e("h3",null,"有時候我們應該靜下來"),e("p",{class:"my-5"},"忙碌的都市，工作回到家裡，只剩追劇、玩game嗎？這是一種不一樣的體會，看著魚兒按步就班的努力著，有種ASMR的感覺~"),e("p",null,[e("small",null,"—角角流口水—")])])],-1),ft={class:"autoplay-progress"},pt={viewBox:"0 0 48 48",ref:"progressCircle"},vt=e("circle",{cx:"24",cy:"24",r:"20"},null,-1),ht=[vt],_t={ref:"progressContent"},gt=$('<div class="container my-7"><div class="row"><div class="col-md-6"><img src="'+et+'" alt="" class="img-fluid"></div><div class="col-md-4 m-auto text-center"><h4 class="mt-4">小魚缸的總花費</h4><p class="text-muted">魚缸和魚隻占水族最大宗比例，魚缸還要考慮到缸體的尺寸，過濾器種類，打氣機，個人欣賞的造景 &quot;OS:你也可以玩裸缸，個人審美觀不同嘛~~&quot;，這些都是魚隻最基本的配備。 小魚缸的架設和花費，一般在千元以內可以解決，在角角裡，將介紹你一些小魚缸的超值設備，希望讓你看了流口水，尤其是一些市面上買不到可以自己DIY的設備，讓喜歡配置 的你，打造一個自己的歡樂小魚缸。推薦新手從小魚缸開始，希望起手式讓你有愉快的體驗，自己造的缸就是獨一無二。 </p></div></div><div class="row flex-row-reverse justify-content-between mt-4"><div class="col-md-6"><img src="'+at+'" alt="" class="img-fluid"></div><div class="col-md-4 m-auto text-center"><h4 class="mt-4">魚缸大小與魚隻數量</h4><p class="text-muted">專業的意見，通常會見意您，1公升的水，約養2隻2cm的魚隻，魚還有分上游中游和下游的功能哦，這裡會介紹一些好上手的燈科魚、工具魚。 還在逛水族店買魚嗎？觀察水族店裡的環境，水質是否乾淨，有無異味？其實，現在很多水族工作室，乾淨養殖，網路商店，也是大家值得考慮的另一種管道，但這一切都是經驗換來的</p></div></div></div>',1);function bt(t,r,c,n,l,i){const u=q("swiper-slide"),f=q("swiper");return F(),V("main",null,[e("div",st,[ot,lt,it,e("div",{class:"diver",onClick:r[0]||(r[0]=p=>i.play())}),dt]),ct,e("div",rt,[L(f,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:n.modules,onAutoplayTimeLeft:n.onAutoplayTimeLeft,class:"mySwiper"},{"container-end":b(()=>[e("div",ft,[(F(),V("svg",pt,ht,512)),e("span",_t,null,512)])]),default:b(()=>[L(u,null,{default:b(()=>[ut]),_:1}),L(u,null,{default:b(()=>[mt]),_:1}),L(u,null,{default:b(()=>[yt]),_:1})]),_:1},8,["modules","onAutoplayTimeLeft"])]),gt])}const Et=W(nt,[["render",bt]]);export{Et as default};
