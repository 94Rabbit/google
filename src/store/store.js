import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cartList:[]
  },
  getters:{
    getCartList(state){
      return state.cartList
    }
  },
  mutations: {
    /*
    添加到购物车
     */
    addCart (state, product){
      if (state.cartList && state.cartList.length){
        if (state.cartList.find(el=> el.id === product.id)) {
            let item = state.cartList.find(el=> el.id === product.id)
            item.num = item.num + product.num
        }
        else{
          state.cartList.push(product)
        }
      }
      else{
        state.cartList.push(product)
      }
    },
    /*
    清空购物车
     */
    clearCart(state){
      state.cartList = []
    },
    /*
    指定删除商品
    */
    deleteProduct(state,product){
      if(state.cartList && state.cartList.length){
        state.cartList = state.cartList.filter(item=>{
          return item.id !== product.id
        })
      }
    }
  }
})
export default store
