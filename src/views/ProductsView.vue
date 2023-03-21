<template lang="">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-position: center center; opacity: 0.8;"
      :style="{'background-image':`url(${seabed})`}"></div>
      <h2 class="fw-bold">小魚缸設備</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    相關產品
                  </h4>
                  <i class="fas fa-chevron-down" :class="{ 'rotate-180': isContentVisible1 }" @click="isContentVisible1 = !isContentVisible1"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse" :class="{ show: isContentVisible1 }" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li class="py-2 d-block text-muted"  @click="getProducts()" >所有產品</li>
                    <li class="py-2 d-block text-muted" @click="getProducts('小魚缸')">小魚缸</li>
                    <li class="py-2 d-block text-muted" @click="getProducts('魚隻')">魚隻</li>
                    <li class="py-2 d-block text-muted" @click="getProducts('設備')">設備</li>
                    <li class="py-2 d-block text-muted" @click="getProducts('DIY')">自己動手做</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    魚知識與自己動手作頻道
                  </h4>
                  <i class="fas fa-chevron-down" :class="{ 'rotate-180': isContentVisible2 }" @click="isContentVisible2 = !isContentVisible2"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" :class="{ show: isContentVisible2 }" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="https://www.youtube.com/@acshop666" target="_blank" class="py-2 d-block text-muted">AC草影水族</a></li>
                    <li><a href="https://www.youtube.com/@user-jb6wy8je5f/videos" target="_blank" class="py-2 d-block text-muted">黑貓騎士</a></li>
                    <li><a href="https://www.youtube.com/@user-hm9rj7py2t" target="_blank" class="py-2 d-block text-muted">水世界水族馆</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    常逛的賣場
                  </h4>
                  <i class="fas fa-chevron-down" :class="{ 'rotate-180': isContentVisible3 }" @click="isContentVisible3 = !isContentVisible3"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" :class="{ show: isContentVisible3 }" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li><a href="https://shopee.tw/peterant2002?categoryId=100631&entryPoint=ShopByPDP&itemId=17920167830" target="_blank" class="py-2 d-block text-muted">皇家水族·RoyalCaridinaTw (乾淨魚)</a></li>
                    <li><a href="https://shopee.tw/chinelw?categoryId=100631&entryPoint=ShopByPDP&itemId=15606500672" target="_blank" class="py-2 d-block text-muted">魚杯杯水族 (設備)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover" style="height:250px" alt="...">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <router-link style="text-decoration: none; color: inherit;" :to="`/product/${product.id}`">
                        {{product.title}}
                    </router-link>
                  </h4>
                  <p class="card-text mb-0">NT$ {{product.price}}</p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            
          </div>
          <!-- pagination -->
          <Pagination :pages="pagination" @emit-pages="updatePage"></Pagination>
          
        </div>
      </div>
    </div>
</template>
<script>
import seabed from '@/assets/seabed.png'
import Pagination from '@/components/PaginationView.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { RouterLink } from 'vue-router'
const {VITE_URL,VITE_PATH} =import.meta.env
export default {
    // 取得產品列表
    data(){
        return{
            seabed,
            products:[],
            isContentVisible1: true,
            isContentVisible2: false,
            isContentVisible3: false,
            pagination: {},
            currentPage: 1
        }
        
    },
    components:{
        RouterLink,
        Pagination
    },
    methods:{
        updatePage(page=1){
          let url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`;
          this.$http(url)
            .then(res=>{
            this.products=res.data.products
            this.pagination = res.data.pagination
            })
        },
        getProducts(cat,page=1){
          let tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products`;
          switch(cat){
            case"小魚缸":
            case"魚隻":
            case"設備":
            case"DIY":
              tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${cat}`
              break;
            default:
              tar_url=`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`;
  
          }
            this.$http(tar_url)
            .then(res=>{
            this.products=res.data.products
            this.pagination = res.data.pagination
            })
        }
    },
    mounted() {
        this.getProducts()
    }
}
</script>
<style>
.rotate-180 {
  transform: rotate(-180deg);
}
</style>