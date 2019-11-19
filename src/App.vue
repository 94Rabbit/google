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
  export default {
    name: 'App',
    created () {
      if (localStorage.getItem("cartList") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("cartList"))))
      }
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("cartList",JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style>
</style>
