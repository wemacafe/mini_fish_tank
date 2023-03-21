<template lang="">
    <div class="position-relative">
      <div class=container>
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand fs-3" :to="`/`">角角流口水</router-link>
          <p class="navbar-brand fs-5">後台控制頁面</p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-item nav-link me-4 active" to="/admin/adminproducts">後台產品列表</router-link>
              <router-link class="nav-item nav-link me-4" to="/admin/adminorders">後台訂單列表</router-link>
              <router-link class="nav-item nav-link me-4" to="/">回前台</router-link> |
              <a href="" @click.prevent="logout">登出</a>
            </div>
          </div>
        </nav>

      </div>
    </div>
    <!-- 拆出去 ，要補RouterView來-->
    <router-view></router-view>
    <div id="footer" class="py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">角角流口水</a>
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
import { RouterLink,RouterView } from 'vue-router'
const { VITE_URL } = import.meta.env
export default {
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    logout () {
      // 把值拿掉
      document.cookie = `hexToken=;expires=${new Date()}`
      this.$router.push('/login')
    },
    checkAdmin () {
      const url = `${VITE_URL}/v2/api/user/check`
      this.$http.post(url)
        .then((res) => {
          console.log('login:', res)
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    // axios.defaults.headers.common['Authorization'] = token;
    console.log('token:', token)
    this.checkAdmin()
  }
}
</script>
