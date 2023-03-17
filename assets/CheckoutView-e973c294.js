import{_ as w,a as V,m as g,r as m,o as u,c as p,d as e,e as t,w as f,F as y,j as k,t as n,f as T,g as v,n as _,l as j,v as E}from"./index-6203771a.js";import{c as C}from"./cart-6220864a.js";const{VITE_URL:S,VITE_PATH:U}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"harper",BASE_URL:"/mini_fish_tank/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},N={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{RouterLink:V},methods:{createOrder(){const d=`${S}/v2/api/${U}/order`,s=this.form;this.$http.post(d,{data:s}).then(i=>{alert(i.data.message),location.reload()}).catch(i=>{alert(i.response.data.message)})}},computed:{...g(C,["carts","total","final_total"]),discount(){return(this.total-this.final_total).toFixed(2)}}},R={class:"container"},q={class:"row justify-content-center"},D={class:"col-md-10"},L={class:"navbar navbar-expand-lg navbar-light px-0"},P=T('<ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">挑選商品</span></li><li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">加入購物車</span></li><li><i class="fas fa-dot-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">填寫結帳表單</span></li></ul>',1),B=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"結帳")])],-1),I={class:"row flex-row-reverse justify-content-center pb-5"},M={class:"col-md-4"},O={class:"border p-4 mb-4"},A=["src"],F={class:"w-100"},H={class:"d-flex justify-content-between"},z={class:"mb-0 fw-bold"},G={class:"mb-0"},J={class:"mb-0 fw-bold"},K={class:"table mt-4 border-top border-bottom text-muted"},Q=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計金額",-1),W={class:"text-end border-0 px-0 pt-4"},X=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-2 font-weight-normal"},"付款方式"),e("td",{class:"text-end border-0 px-0 pt-2"},"信用卡")],-1),Y=e("th",{scope:"row",class:"border-0 px-0 pt-2 pb-4 font-weight-normal"},"折扣金額",-1),Z={class:"text-end border-0 px-0 pt-2 pb-4"},$={class:"d-flex justify-content-between mt-4"},ee=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),se={class:"mb-0 h4 fw-bold"},te={class:"col-md-6"},oe=e("p",null,"聯絡人資料",-1),le={class:"mb-0"},ae=e("label",{for:"ContactMail",class:"text-muted mb-0"},"Email",-1),ne={class:"mb-2"},de=e("label",{for:"ContactName",class:"text-muted mb-0"},"收件人姓名",-1),ie={class:"mb-2"},ce=e("label",{for:"ContactPhone",class:"text-muted mb-0"},"收件人電話",-1),re={class:"mb-2"},me=e("label",{for:"ContactPhone",class:"text-muted mb-0"},"收件人地址",-1),_e={class:"mb-2"},ue=e("label",{for:"ContactMessage",class:"text-muted mb-0"},"留言",-1),pe={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center"},fe=e("i",{class:"fas fa-chevron-left me-2"},null,-1),he=e("button",{type:"submit",class:"btn btn-dark py-3 px-7"},"送出訂單",-1);function be(d,s,i,ve,o,h){const b=m("router-link"),c=m("v-field"),r=m("error-message"),x=m("v-form");return u(),p("div",R,[e("div",q,[e("div",D,[e("nav",L,[t(b,{class:"navbar-brand fs-3",to:"/"},{default:f(()=>[v("角角流口水")]),_:1}),P])])]),B,e("div",I,[e("div",M,[e("div",O,[(u(!0),p(y,null,k(d.carts,l=>(u(),p("div",{class:"d-flex mt-2",key:l.id},[e("img",{src:l.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,A),e("div",F,[e("div",H,[e("p",z,n(l.product.title),1),e("p",G,"NT"+n(l.total),1)]),e("p",J,"x"+n(l.qty),1)])]))),128)),e("table",K,[e("tbody",null,[e("tr",null,[Q,e("td",W,"NT$"+n(d.total),1)]),X,e("tr",null,[Y,e("td",Z,n(h.discount),1)])])]),e("div",$,[ee,e("p",se,"NT$"+n(d.final_total),1)])])]),e("div",te,[t(x,{ref:"form",onSubmit:h.createOrder},{default:f(({errors:l})=>[oe,e("div",le,[ae,t(c,{id:"email",name:"email",type:"email",class:_(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>o.form.user.email=a)},null,8,["class","modelValue"]),t(r,{name:"email",class:"invalid-feedback"})]),e("div",ne,[de,t(c,{id:"name",name:"姓名",type:"text",class:_(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>o.form.user.name=a)},null,8,["class","modelValue"]),t(r,{name:"姓名",class:"invalid-feedback"})]),e("div",ie,[ce,t(c,{id:"tel",name:"電話",type:"text",class:_(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:o.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>o.form.user.tel=a)},null,8,["class","modelValue"]),t(r,{name:"電話",class:"invalid-feedback"})]),e("div",re,[me,t(c,{id:"address",name:"地址",type:"text",class:_(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>o.form.user.address=a)},null,8,["class","modelValue"]),t(r,{name:"地址",class:"invalid-feedback"})]),e("div",_e,[ue,j(e("textarea",{name:"留言",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=a=>o.form.message=a)},null,512),[[E,o.form.message]])]),e("div",pe,[t(b,{class:"text-dark mt-md-0 mt-3",to:"/products"},{default:f(()=>[fe,v("回產品列表")]),_:1}),he])]),_:1},8,["onSubmit"])])])])}const Ve=w(N,[["render",be]]);export{Ve as default};