<template>
  <div id="app">
    <Header></Header>
    <Bread></Bread>
    <router-view/>
    <Footer></Footer>
<!--    <Tools></Tools>-->
    <Tips></Tips>
<!--    <GoTop></GoTop>-->
  </div>
</template>

<script>
  import { getProductTypeAPI } from '@/api'
  export default {
    name: 'App',
    created () {
      this.getProductType({})
      if (localStorage.getItem("cartList") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("cartList"))))
      }
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("cartList",JSON.stringify(this.$store.state))
      })
    },
    methods:{
      /*
       获取商品类型(路由定义)
      */
      async getProductType(){
        let res = await getProductTypeAPI({});
        if(res.data && res.data.data){
          this.productTypes = res.data.data
          this.productTypes[0].path = this.productTypes[0].name_en
          this.productTypes[1].path = this.productTypes[1].name_en
          this.productTypes[2].path = this.productTypes[2].name_en
          this.productTypes[3].path = this.productTypes[3].name_en
          this.productTypes[4].path = this.productTypes[4].name_en
          this.$store.commit('initProductTypes',this.productTypes)
        }
      }
    }
  }
</script>

<style>
</style>
