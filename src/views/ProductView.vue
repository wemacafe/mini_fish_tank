<template>
    <div class="container">
<div class="row align-items-center">
        <div class="col-md-7">
          <img :src="product.imageUrl" class="d-block w-100" alt="...">
        </div>
        <div class="col-md-5 mb-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" :to="`/`">Home</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-muted" :to="`/products`">Products</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{product.title}}</h2>
          <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">NT${{product.price}}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="minusOne()">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="qty">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="addOne()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <!-- <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2">加入購物車</a> -->
              <button type="button" class="text-nowrap btn btn-dark w-100 py-2" @click="addToCart(product.id,qty)">加入購物車</button>
            </div>
          </div>
        <div class="mt-5">{{ product.description }}</div>
          
        </div>
      </div>
    

      <!-- <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <h3 class="fw-bold mt-5 py-7 mb-5">也許你會感興趣</h3>
        <!-- swiper -->
        <div class="mb-5">
            <swiper :slides-per-view="1" :space-between="50"
            :modules="modules"
            navigation
            :pagination="{ clickable: true }">
            <swiper-slide  v-for="(item) in products" :key=item.id>
                <router-link :to="`/product/${item.id}`"><img :src="item.imageUrl" alt=""></router-link>
            </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import { RouterLink } from 'vue-router'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { mapActions } from 'pinia'
import cartStore from '../stores/cart'
// 1.取得單一產品 /v2/api/{api_path}/product/{id}
const {VITE_URL,VITE_PATH} =import.meta.env
// 2. 渲染
// 3. 購物車pinia //...mapAction


export default {
  data () {
    return {
      modules: [Navigation, Pagination],
      product:{},
      products:[],
      qty:1, 
      category:''
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  methods:{
    getProduct(){
        const { id } =this.$route.params
        this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res=>{
            this.product=res.data.product
            this.category=res.data.product.category
            this.getInterest()
        })
    },
    getInterest(){
      let tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${this.category}`
      this.$http(tar_url)
        .then(res=>{
          this.products=res.data.products
        })
    },
    addOne(){
        this.qty+=1
    },
    minusOne(){
        if (this.qty>1){
            this.qty-=1
        }  
    },
    ...mapActions(cartStore,['addToCart'])
  },
  watch: {
    '$route'() {
      window.location.reload();
    },
  },
  mounted() {
    this.getProduct()
  }
}
</script>
<style scoped>
.swiper {
  width: 800px;
  height: 600px;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
