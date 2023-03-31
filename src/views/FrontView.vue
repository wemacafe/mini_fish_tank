<template lang="">
    <div class="position-relative">
      <div class=container>
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand fs-3" :to="`/`">角角流口水</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-item nav-link me-4 active" to="/">首頁</router-link>
              <router-link class="nav-item nav-link me-4" to="/products">產品</router-link>
              <a class="nav-item nav-link me-4" href="https://github.com/wemacafe" target="_blank">關於我</a>
              <router-link class="nav-item nav-link position-relative" to="/carts">
                <i class="bi bi-cart4" style="font-size: 20px"></i>
                <span class="position-absolute top-10 start-100 translate-middle rounded-pill badge bg-danger">
                {{cartNum}}
                </span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- 拆出去HomeView ，要補RouterView來-->
    <router-view></router-view>
    <div id="footer" class="py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <router-link class="text-white h4" style="text-decoration: none; color: inherit;"  :to="`/login`">角角流口水(後台)</router-link>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">供學習使用，無商業用途<br>© 2023 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { RouterView,RouterLink } from 'vue-router'
import cartStore from '../stores/cart';
export default {
  components:{
    RouterView,
    RouterLink
  },
  computed:{
   ...mapState (cartStore,['carts','cartNum'])
  },
  methods:{
    ...mapActions(cartStore,['getCart'])
  },
  mounted(){
    this.getCart()
  }
}
</script>
<style>

</style>