import{N as y,P as f,S as k,a as x}from"./navigation.min-65438dfa.js";import{_ as S,a as T,b as V,r as d,o as l,c as _,d as t,e as c,w as n,t as r,k as I,v as P,g as m,F as E,j as q,l as R,p as C,q as L}from"./index-76ebd2e9.js";import{c as N}from"./cart-0df3c93b.js";const{VITE_URL:h,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"harper",BASE_URL:"/mini_fish_tank/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{modules:[y,f],product:{},products:[],qty:1,category:""}},components:{Swiper:k,SwiperSlide:x,RouterLink:T},methods:{getProduct(){const{id:o}=this.$route.params;this.$http.get(`${h}/v2/api/${b}/product/${o}`).then(e=>{this.product=e.data.product,this.category=e.data.product.category,this.getInterest()})},getInterest(){let o=`${h}/v2/api/${b}/products?category=${this.category}`;this.$http(o).then(e=>{this.products=e.data.products})},addOne(){this.qty+=1},minusOne(){this.qty>1&&(this.qty-=1)},...V(N,["addToCart"])},watch:{$route(){window.location.reload()}},mounted(){this.getProduct()}},a=o=>(C("data-v-ea6ee9e5"),o=o(),L(),o),D={class:"container"},O={class:"row align-items-center"},U={class:"col-md-7"},B=["src"],A={class:"col-md-5 mb-3"},H={"aria-label":"breadcrumb"},F={class:"breadcrumb bg-white px-0 mb-0 py-3"},M={class:"breadcrumb-item"},j={class:"breadcrumb-item"},z=a(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1)),G={class:"fw-bold h1 mb-1"},J={class:"mb-0 text-muted text-end"},K={class:"h4 fw-bold text-end"},Q={class:"row align-items-center"},W={class:"col-6"},X={class:"input-group my-3 bg-light rounded"},Y={class:"input-group-prepend"},Z=a(()=>t("i",{class:"fas fa-minus"},null,-1)),tt=[Z],et={class:"input-group-append"},st=a(()=>t("i",{class:"fas fa-plus"},null,-1)),ot=[st],it={class:"col-6"},nt={class:"mt-5"},dt=a(()=>t("h3",{class:"fw-bold mt-5 py-7 mb-5"},"也許你會感興趣",-1)),ct={class:"mb-5"},rt=["src"];function at(o,e,lt,ut,s,u){const g=d("RouterLink"),p=d("router-link"),v=d("swiper-slide"),w=d("swiper");return l(),_("div",D,[t("div",O,[t("div",U,[t("img",{src:s.product.imageUrl,class:"d-block w-100",alt:"..."},null,8,B)]),t("div",A,[t("nav",H,[t("ol",F,[t("li",M,[c(g,{class:"text-muted",to:"/"},{default:n(()=>[m("Home")]),_:1})]),t("li",j,[c(p,{class:"text-muted",to:"/products"},{default:n(()=>[m("Products")]),_:1})]),z])]),t("h2",G,r(s.product.title),1),t("p",J,[t("del",null,"NT$"+r(s.product.origin_price),1)]),t("p",K,"NT$"+r(s.product.price),1),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:e[0]||(e[0]=i=>u.minusOne())},tt)]),I(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":e[1]||(e[1]=i=>s.qty=i)},null,512),[[P,s.qty]]),t("div",et,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:e[2]||(e[2]=i=>u.addOne())},ot)])])]),t("div",it,[t("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",onClick:e[3]||(e[3]=i=>o.addToCart(s.product.id,s.qty))},"加入購物車")])]),t("div",nt,r(s.product.description),1)])]),dt,t("div",ct,[c(w,{"slides-per-view":1,"space-between":50,modules:s.modules,navigation:"",pagination:{clickable:!0}},{default:n(()=>[(l(!0),_(E,null,q(s.products,i=>(l(),R(v,{key:i.id},{default:n(()=>[c(p,{to:`/product/${i.id}`},{default:n(()=>[t("img",{src:i.imageUrl,alt:""},null,8,rt)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])])])}const ht=S($,[["render",at],["__scopeId","data-v-ea6ee9e5"]]);export{ht as default};
