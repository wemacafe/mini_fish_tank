import { defineStore } from "pinia";
import axios from "axios";
const {VITE_URL,VITE_PATH} =import.meta.env

const cartStore=defineStore('cart',{
    // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      carts: [],
      cartNum:0,
      total:0,
      final_total:0
    }
  },
  // actions 概念同「methods」
  actions: {
    //取得購物車 /v2/api/{api_path}/cart
    getCart() {
        // 不屬於vue，所以沒有http (vue-axios)，要自己載入，利用axios
        axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
            .then(res=>{
            this.carts=res.data.data.carts
            this.cartNum=this.carts.length
            this.total=res.data.data.total
            this.final_total=res.data.data.final_total
            // console.log('目前cart:',this.carts)
            this.renewCartNum()
        })
    },
    deleteAllCarts(){
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/carts`
      axios.delete(url).then((response) => {
        alert(response.data.message)
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    addToCart(product_id, qty=1){
        //第五週作業功能
        const data={
            // 同名不寫2次
            // product_id: product_id,
            // qty:qty
            product_id,
            qty,
        }
        axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`,{data})
        .then(res=>{
            console.log('加入購物車:',res.data);
            //this.$refs.productModal.hide();
            this.getCart();
        });
    },
    renewCartNum(){   
        if(this.cartNum>0){
            this.cartNum=0;
            Object.values(this.carts).forEach((item)=>{
                this.cartNum+=item['qty']
            })
        }
    },
    modifyCart(item, act){
        switch (act){
            case "reduce":
                if(item.qty>1){
                    item.qty-=1;
                }
                break;
            case "increase":
                item.qty+=1;
                break;
        }
        //要送入購物車的id和產品id，送入的一包item裡，就會包函product資料
        let data={
            product_id: item.product.id,
            qty:item.qty,
        }
        // this.loadingItem=item.id;
        axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`,{data})
        .then(res=>{
            console.log('更新購物車:',res.data);
            this.getCart();
            // this.loadingItem='';
        });
    },
    deleteItem(item){
        // this.loadingItem=item.id;
        axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(res=>{
            console.log('刪除購物車:',res.data);
            this.getCart();
            // this.loadingItem='';
        });
    },
    addCouponCode(code) {
        const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
        const coupon = {
          code
        };
        // this.isLoading = true;
        axios.post(url, { data: coupon }).then((response) => {
            console.log(response)
        //   this.$httpMessageState(response, '加入優惠券');
          this.getCart();
        //   this.isLoading = false;
        }).catch((error) => {
            console.log(error)
        //   this.isLoading = false;
        //   this.$httpMessageState(error.response, '加入優惠券');
        });
      }
  },
  // getters 概念同「computed」
  getters: {
    
  }
});

export default cartStore;