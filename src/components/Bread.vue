<template>
  <div>
      <div class="Bread">
        <ol class="breadcrumb">
          <li>You are here:</li>
          <li v-for="(item,index) in breadList"><router-link :to="item.path">{{item.name}}</router-link></li>
        </ol>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'Bread',
    data() {
      return {
        breadList: [] // 路由集合
      };
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    methods: {
      isHome(route) {
        return route.name === "PageView";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        if (matched.length!==0 && !this.isHome(matched[0])) {
          matched = [{ path: "/home", meta: { title: "首页" }, name:'home'}].concat(matched);
        } else if(matched.length!==0 && this.isHome(matched[0])) {
          matched = [{ path: "/home", meta: { title: "首页" }, name:'home'}]
        }
        this.breadList = matched;
      }
    },
    created() {
      this.getBreadcrumb();
    }
  };
</script>

<style scoped>

</style>
