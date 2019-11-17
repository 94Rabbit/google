<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">Feedback</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <div class="col-sm-10 col-xs-12">
                  <input type="text" v-model="feedBackParam.email" class="form-control" id="name" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-10">
                  <input type="text" v-model="feedBackParam.name" class="form-control" id="email" placeholder="Name">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-10">
                  <input type="text" v-model="feedBackParam.message" class="form-control" id="tel" placeholder="Message">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-default btn-block" style="background: red;color:#fff" @click="feedBack">submit</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  import { feedbackAPI } from '@/api'
  export default {
    name: "ContactUs",
    data() {
      return {
        feedBackParam:{
          name: '张三',
          email: 'zmj2345356@gmail.com',
          message: 'qwereklt5yjrktyjk56ljku75jkl7klrgklefjlkskljflksdcnsdnbvksdklfjwerfjklwefklwlk 四大皆空肺热可以绕口令二刚看了让他俩快高考了 234365457上东城附近快速公交2®34',
          production_id:  122
        }
      };
    },
    mounted() {

    },
    methods:{
      async feedBack(){
        let res = await feedbackAPI(this.feedBackParam)
      }
    }
  };
</script>
<style scoped>
  .banner {
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url("../../assets/img/banner_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
  }
  .ContactUs-container {
    padding: 80px 0;
    transition: all ease 0.5s;
    box-sizing: border-box;
  }
  #map {
    width: 100%;
    height: 365px;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }
  @media screen and (max-width: 997px) {
    .ContactUs-container {
      padding: 20px 0;
    }
  }
</style>

