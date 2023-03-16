<script>
import { RouterView } from 'vue-router'
// const {VITE_URL,VITE_PATH} =import.meta.env
export default{
  components:{
    RouterView
  },
  mounted(){
    // this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
    // .then(res=>{
    //   console.log(res)
    // })
  }
}
</script>

<template>
  <header>
   
  </header>
  <RouterView></RouterView>
</template>


