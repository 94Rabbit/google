<template>
  <div id="app">
    <Header></Header>
    <Bread></Bread>
    <router-view/>
    <Footer></Footer>
    <Tools></Tools>
<!--    <GoTop></GoTop>-->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
</style>
