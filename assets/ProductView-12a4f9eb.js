import{N as h,P as f,S as w,a as x}from"./navigation.min-4f0dff63.js";import{_ as g,a as v,b as y,r as c,o as k,c as V,d as t,e as n,w as d,t as l,k as D,v as H,g as p,p as S,l as T}from"./index-95916aaa.js";import{c as M}from"./cart-8d167bb9.js";const{VITE_URL:q,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"harper",BASE_URL:"/mini_fish_tank/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{modules:[h,f],product:{},qty:1}},components:{Swiper:w,SwiperSlide:x,RouterLink:v},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`${q}/v2/api/${B}/product/${e}`).then(s=>{this.product=s.data.product})},addOne(){this.qty+=1},minusOne(){this.qty>1&&(this.qty-=1)},...y(M,["addToCart"])},mounted(){this.getProduct()}},i=e=>(S("data-v-2f05054d"),e=e(),T(),e),E={class:"container"},I={class:"row align-items-center"},R={class:"col-md-7"},A=["src"],C={class:"col-md-5 mb-3"},N={"aria-label":"breadcrumb"},G={class:"breadcrumb bg-white px-0 mb-0 py-3"},L={class:"breadcrumb-item"},O={class:"breadcrumb-item"},U=i(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1)),j={class:"fw-bold h1 mb-1"},W={class:"mb-0 text-muted text-end"},Y={class:"h4 fw-bold text-end"},$={class:"row align-items-center"},z={class:"col-6"},F={class:"input-group my-3 bg-light rounded"},J={class:"input-group-prepend"},K=i(()=>t("i",{class:"fas fa-minus"},null,-1)),Q=[K],X={class:"input-group-append"},Z=i(()=>t("i",{class:"fas fa-plus"},null,-1)),tt=[Z],st={class:"col-6"},ot={class:"mt-5"},et=i(()=>t("h3",{class:"fw-bold mt-5 py-7 mb-5"},"也許你會感興趣",-1)),it={class:"mb-5"},nt=i(()=>t("img",{src:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80",alt:""},null,-1)),dt=i(()=>t("img",{src:"https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80",alt:""},null,-1)),at=i(()=>t("img",{src:"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:""},null,-1));function ct(e,s,lt,rt,o,u){const _=c("RouterLink"),m=c("router-link"),r=c("swiper-slide"),b=c("swiper");return k(),V("div",E,[t("div",I,[t("div",R,[t("img",{src:o.product.imageUrl,class:"d-block w-100",alt:"..."},null,8,A)]),t("div",C,[t("nav",N,[t("ol",G,[t("li",L,[n(_,{class:"text-muted",to:"/"},{default:d(()=>[p("Home")]),_:1})]),t("li",O,[n(m,{class:"text-muted",to:"/products"},{default:d(()=>[p("Products")]),_:1})]),U])]),t("h2",j,l(o.product.title),1),t("p",W,[t("del",null,"NT$"+l(o.product.origin_price),1)]),t("p",Y,"NT$"+l(o.product.price),1),t("div",$,[t("div",z,[t("div",F,[t("div",J,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:s[0]||(s[0]=a=>u.minusOne())},Q)]),D(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":s[1]||(s[1]=a=>o.qty=a)},null,512),[[H,o.qty]]),t("div",X,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:s[2]||(s[2]=a=>u.addOne())},tt)])])]),t("div",st,[t("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",onClick:s[3]||(s[3]=a=>e.addToCart(o.product.id,o.qty))},"加入購物車")])]),t("div",ot,l(o.product.content),1)])]),et,t("div",it,[n(b,{"slides-per-view":1,"space-between":50,modules:o.modules,navigation:"",pagination:{clickable:!0}},{default:d(()=>[n(r,null,{default:d(()=>[nt]),_:1}),n(r,null,{default:d(()=>[dt]),_:1}),n(r,null,{default:d(()=>[at]),_:1})]),_:1},8,["modules"])])])}const mt=g(P,[["render",ct],["__scopeId","data-v-2f05054d"]]);export{mt as default};
