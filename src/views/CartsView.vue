<template lang="">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-position: center center; opacity: 0.8;"
      :style="{'background-image':`url(${seabed})`}"></div>
      <h2 class="fw-bold">購物車清單</h2>
    </div>
    <div class="container py-4">
        <div class="mt-3">
        <h3 class="mt-3 mb-4">內容</h3>
        
        <div class="row">
          <div class="col-md-8">
            <div class="text-end mb-5">
              <button class="btn btn-outline-danger" type="button"
              @click="deleteAllCarts()"
              >清空購物車</button>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0">商品名稱</th>
                  <th scope="col" class="border-0">商品數量</th>
                  <th scope="col" class="border-0">商品價格</th>
                  <th scope="col" class="border-0"></th>
                </tr>
                <tr class="border-bottom"></tr>
              </thead>
              <tbody>
                <tr class="border-bottom" v-for="cart in carts" :key="cart.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="modifyCart(cart,'reduce')">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="cart.qty">
                      <div class="input-group-append">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="modifyCart(cart,'increase')" >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto text-end">NT${{cart.total}}</p></td>
                  <td class="border-0 align-middle"><i class="fas fa-times" @click="deleteItem(cart)"></i></td>
                </tr>
              </tbody>
            </table>
            <div class="input-group w-50 mb-3">
              <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="優惠卷代碼(happy09)" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="code">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2" @click="addCouponCode(code)"><i class="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">訂單內容</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計金額</th>
                    <td class="text-end border-0 px-0 pt-4">NT${{total}}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pt-2 pb-3 font-weight-normal">付款方式</th>
                    <td class="text-end border-0 px-0 pt-0 pt-2 pb-3">信用卡</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">折扣金額</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">NT${{discount}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">總計金額</p>
                <p class="mb-0 h4 fw-bold">NT${{final_total}}</p>
              </div>
              
              <router-link :to="`/checkout`">
                <button type="button" class="btn text-white w-100 mt-4" style="background-color:rgb(89,177,218);">結帳</button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="my-5">
          <h3 class="fw-bold">其它加購</h3>
          <div class="swiper-container mt-4 mb-5">
            <!-- <div class="swiper-wrapper"> -->
            <swiper :slides-per-view="1" :space-between="50"
            :modules="modules"
            navigation
            :pagination="{ clickable: true }">
            <swiper-slide v-for="(item) in products" :key=item.id>
                <div class="card border-0 mb-4 position-relative position-relative">
                  <img :src="item.imageUrl" class="card-img-top rounded-0 object-cover" style="height:500px" alt="...">
                  <a href="#" class="text-dark">
                  </a>
                  <div class="card-body p-0">
                    <h4 class="mb-0 mt-3"><a href="#" @click="addToCart(item.id,1)">{{item.title}}</a></h4>
                    <p class="card-text mb-0">NT${{item.price}}<span class="text-muted "><del>NT${{item.origin_price}}</del></span></p>
                    <p class="text-muted mt-3"></p>
                  </div>
                </div>
            </swiper-slide>

            </swiper>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import seabed from '@/assets/seabed.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cart'
import { RouterLink } from 'vue-router'

const {VITE_URL,VITE_PATH} =import.meta.env

export default {
  data() {
    return{
        modules: [Navigation, Pagination],
        code:"",
        products:[],
        seabed
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  methods:{
    ...mapActions(cartStore,['modifyCart','deleteItem','addCouponCode','deleteAllCarts','addToCart']),
    getProducts(cat){
          let tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products`;
          switch(cat){
            case"小魚缸":
            case"魚隻":
            case"設備":
            case"DIY":
              tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${cat}`
              break;
            default:
              tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products`;
  
          }
            this.$http(tar_url)
            .then(res=>{

            this.products=res.data.products
            })
        }
    
  },
  computed:{
    ...mapState(cartStore,['carts','total','final_total']),
    discount(){
        return (this.total-this.final_total).toFixed(2)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
<style scoped>
.swiper {
  width: 800px;
  height: 600px;
}
.swiper-slide div.img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>