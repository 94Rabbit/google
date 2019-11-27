import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)
import { getProductTypeAPI } from '@/api'
const store = new Vuex.Store({
  state: {
    cartList:[],
    productTypes:[],
    dynamicRoutes:[]
  },
  getters:{
    getCartList(state){
      return state.cartList
    },
    getProductTypes(state){
      return state.productTypes
    },
    getDynamicRoutes(state){
      return state.dynamicRoutes
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
    },
    /*
    获取商品类型
     */
    initProductTypes(state,types){
      state.productTypes = types
    },
    /*
    获取动态路由
     */
    getDynamicRoutes(state,types){
      state.dynamicRoutes = types
    },
  },
  actions:{
    async getDynamicRoutes(context,options){
      let res = await getProductTypeAPI({})
        context.commit('getDynamicRoutes', res.data.data)
    }
  }
})
export default store
