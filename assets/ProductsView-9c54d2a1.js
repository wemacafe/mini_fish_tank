import{_ as y,o as d,c as r,d as e,n as l,i as _,F as h,j as f,t as p,a as w,r as m,e as v,w as x,g as C,f as P}from"./index-7410a219.js";const V={props:["pages"],methods:{updatePage(c){this.$emit("emitPages",c)}}},T={"aria-label":"Page navigation example"},E={class:"pagination justify-content-center"},j=e("span",{"aria-hidden":"true"},"«",-1),I=[j],$={key:0,class:"page-link"},D=["onClick"],R=e("span",{"aria-hidden":"true"},"»",-1),S=[R];function B(c,t,i,k,s,a){return d(),r("nav",T,[e("ul",E,[e("li",{class:l([{disabled:!i.pages.has_pre},"page-item"])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=_(n=>a.updatePage(i.pages.current_page-1),["prevent"]))},I)],2),(d(!0),r(h,null,f(i.pages.total_pages,n=>(d(),r("li",{class:l(["page-item",{active:i.pages.current_page===n}]),key:n},[n===i.pages.current_page?(d(),r("span",$,p(n),1)):(d(),r("a",{key:1,class:"page-link",href:"#",onClick:_(g=>a.updatePage(n),["prevent"])},p(n),9,D))],2))),128)),e("li",{class:l(["page-item",{disabled:!i.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=_(n=>a.updatePage(i.pages.current_page+1),["prevent"]))},S)],2)])])}const N=y(V,[["render",B]]);const{VITE_URL:b,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"harper",BASE_URL:"/mini_fish_tank/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},O={data(){return{products:[],isContentVisible1:!0,isContentVisible2:!1,isContentVisible3:!1,pagination:{},currentPage:1}},components:{RouterLink:w,Pagination:N},methods:{getProducts(c){let t=`${b}/v2/api/${u}/products`;switch(c){case"小魚缸":case"魚隻":case"設備":case"DIY":t=`${b}/v2/api/${u}/products?category=${c}`;break;default:t=`${b}/v2/api/${u}/products`}this.$http(t).then(i=>{console.log(i),this.products=i.data.products,this.pagination=i.data.pagination})}},mounted(){this.getProducts()}},L=e("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[e("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url('../mini_fish_tank/src/assets/seabed.png')","background-position":"center center",opacity:"0.8"}}),e("h2",{class:"fw-bold"},"小魚缸設備")],-1),A={class:"container mt-md-5 mt-3 mb-7"},U={class:"row"},F={class:"col-md-4"},H={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},M={class:"card border-0"},Y={class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},z={class:"d-flex justify-content-between align-items-center pe-1"},q=e("h4",{class:"mb-0"}," 相關產品 ",-1),G={class:"card-body py-0"},J={class:"list-unstyled"},K={class:"card border-0"},Q={class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingTwo","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo"},W={class:"d-flex justify-content-between align-items-center pe-1"},X=e("h4",{class:"mb-0"}," 魚知識與自己動手作頻道 ",-1),Z=P('<div class="card-body py-0"><ul class="list-unstyled"><li><a href="https://www.youtube.com/@acshop666" target="_blank" class="py-2 d-block text-muted">AC草影水族</a></li><li><a href="https://www.youtube.com/@user-jb6wy8je5f/videos" target="_blank" class="py-2 d-block text-muted">黑貓騎士</a></li><li><a href="https://www.youtube.com/@user-hm9rj7py2t" target="_blank" class="py-2 d-block text-muted">水世界水族馆</a></li></ul></div>',1),ee=[Z],te={class:"card border-0"},se={class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingThree","data-bs-toggle":"collapse","data-bs-target":"#collapseThree"},oe={class:"d-flex justify-content-between align-items-center pe-1"},ie=e("h4",{class:"mb-0"}," 常逛的賣場 ",-1),ae=e("div",{class:"card-body py-0"},[e("ul",{class:"list-unstyled"},[e("li",null,[e("a",{href:"https://shopee.tw/peterant2002?categoryId=100631&entryPoint=ShopByPDP&itemId=17920167830",target:"_blank",class:"py-2 d-block text-muted"},"皇家水族·RoyalCaridinaTw (乾淨魚)")]),e("li",null,[e("a",{href:"https://shopee.tw/chinelw?categoryId=100631&entryPoint=ShopByPDP&itemId=15606500672",target:"_blank",class:"py-2 d-block text-muted"},"魚杯杯水族 (設備)")])])],-1),ne=[ae],le={class:"col-md-8"},de={class:"row"},re={class:"card border-0 mb-4 position-relative position-relative"},ce=["src"],pe=e("a",{href:"#",class:"text-dark"},[e("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),_e={class:"card-body p-0"},be={class:"mb-0 mt-3"},ue={class:"card-text mb-0"},he=e("p",{class:"text-muted mt-3"},null,-1);function ge(c,t,i,k,s,a){const n=m("router-link"),g=m("Pagination");return d(),r(h,null,[L,e("div",A,[e("div",U,[e("div",F,[e("div",H,[e("div",M,[e("div",Y,[e("div",z,[q,e("i",{class:l(["fas fa-chevron-down",{"rotate-180":s.isContentVisible1}]),onClick:t[0]||(t[0]=o=>s.isContentVisible1=!s.isContentVisible1)},null,2)])]),e("div",{id:"collapseOne",class:l(["collapse",{show:s.isContentVisible1}]),"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},[e("div",G,[e("ul",J,[e("li",{class:"py-2 d-block text-muted",onClick:t[1]||(t[1]=o=>a.getProducts())},"所有產品"),e("li",{class:"py-2 d-block text-muted",onClick:t[2]||(t[2]=o=>a.getProducts("小魚缸"))},"小魚缸"),e("li",{class:"py-2 d-block text-muted",onClick:t[3]||(t[3]=o=>a.getProducts("魚隻"))},"魚隻"),e("li",{class:"py-2 d-block text-muted",onClick:t[4]||(t[4]=o=>a.getProducts("設備"))},"設備"),e("li",{class:"py-2 d-block text-muted",onClick:t[5]||(t[5]=o=>a.getProducts("DIY"))},"自己動手做")])])],2)]),e("div",K,[e("div",Q,[e("div",W,[X,e("i",{class:l(["fas fa-chevron-down",{"rotate-180":s.isContentVisible2}]),onClick:t[6]||(t[6]=o=>s.isContentVisible2=!s.isContentVisible2)},null,2)])]),e("div",{id:"collapseTwo",class:l(["collapse",{show:s.isContentVisible2}]),"aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},ee,2)]),e("div",te,[e("div",se,[e("div",oe,[ie,e("i",{class:l(["fas fa-chevron-down",{"rotate-180":s.isContentVisible3}]),onClick:t[7]||(t[7]=o=>s.isContentVisible3=!s.isContentVisible3)},null,2)])]),e("div",{id:"collapseThree",class:l(["collapse",{show:s.isContentVisible3}]),"aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},ne,2)])])]),e("div",le,[e("div",de,[(d(!0),r(h,null,f(s.products,o=>(d(),r("div",{class:"col-md-6",key:o.id},[e("div",re,[e("img",{src:o.imageUrl,class:"card-img-top rounded-0 object-cover",style:{height:"250px"},alt:"..."},null,8,ce),pe,e("div",_e,[e("h4",be,[v(n,{to:`/product/${o.id}`},{default:x(()=>[C(p(o.title),1)]),_:2},1032,["to"])]),e("p",ue,"NT$ "+p(o.price),1),he])])]))),128))]),v(g,{pages:s.pagination,onEmitPages:a.getProducts},null,8,["pages","onEmitPages"])])])])],64)}const ve=y(O,[["render",ge]]);export{ve as default};
