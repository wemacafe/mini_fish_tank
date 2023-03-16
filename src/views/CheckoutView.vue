<template lang="">
   <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <router-link class="navbar-brand fs-3" :to="`/`">角角流口水</router-link>
            <ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
              <li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">挑選商品</span></li>
              <li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">加入購物車</span></li>
              <li><i class="fas fa-dot-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">填寫結帳表單</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">結帳</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            
            <div class="d-flex mt-2" v-for="(cart) in carts" :key=cart.id>
              <img :src="cart.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{cart.product.title}}</p>
                  <p class="mb-0">NT{{cart.total}}</p>
                </div>
                <p class="mb-0 fw-bold">x{{cart.qty}}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計金額</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{total}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-2 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-2">信用卡</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-2 pb-4 font-weight-normal">折扣金額</th>
                  <td class="text-end border-0 px-0 pt-2 pb-4">{{discount}}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{final_total}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">

            <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
            <p>聯絡人資料</p>
            <div class="mb-0">
              <label for="ContactMail" class="text-muted mb-0">Email</label>
              <!-- <input type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com"> -->
              <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="ContactName" class="text-muted mb-0">收件人姓名</label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="ContactPhone" class="text-muted mb-0">收件人電話</label>
              <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="ContactPhone" class="text-muted mb-0">收件人地址</label>
              <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="ContactMessage" class="text-muted mb-0">留言</label>
              <textarea name="留言" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            
            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center ">
                <router-link class="text-dark mt-md-0 mt-3" to="/products"><i class="fas fa-chevron-left me-2"></i>回產品列表</router-link>
                <button type="submit" class="btn btn-dark py-3 px-7">送出訂單</button>
            </div>
          </v-form>
          
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import cartStore from '../stores/cart';
const {VITE_URL,VITE_PATH} =import.meta.env
export default {
    data(){
        return{
            form: {
                user: {
                name: '',
                email: '',
                tel: '',
                address: ''
                },
                message: ''
            }
        }
    },
    components:{
        RouterLink
    },
    methods:{
        createOrder(){
            const url = `${VITE_URL}/v2/api/${VITE_PATH}/order`
            const order = this.form
            this.$http.post(url, { data: order }).then((response) => {
                alert(response.data.message)
                // this.$refs.form.resetForm()
                // document.getElementById('message').value = '';
                location.reload();
            }).catch((err) => {
                alert(err.response.data.message)
            })
        }
    },
    computed:{
        ...mapState(cartStore,['carts','total','final_total']),
        discount(){
            return (this.total-this.final_total).toFixed(2)
        }
    }
}
</script>
<style lang="">
    
</style>