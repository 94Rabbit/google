<template>
  <div class="container">
    <div class="container-fuild">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <img :src="newsInfo.pic" alt="" style="width: 60%;display: block;margin: auto">
          <p v-html="newsInfo.content">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { getNewsDetailAPI } from '@/api'
    export default {
        name: "NewDetail",
        data:()=>{
          return {
            newsInfo:{}
          }
        },
        mounted() {
          this.getNewsDetail()
        },
        methods:{
          async getNewsDetail(){
              let res = await getNewsDetailAPI(this.$route.query.id)
              if(res && res.data && res.data.data){
                this.newsInfo = res.data.data
              }
          }
        }
    }
</script>

<style scoped>

</style>
