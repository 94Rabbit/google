<template>
  <div class="index">
    <div class="swiper">
      <div class="swiper-container banner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" @click="goContactUs(item)">
            <img
              :src="item.pic"
              alt
              srcset
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="hotProduct">
      <div class="container">
        <div class="title">
          <h1>HOT PRODUCTS</h1>
          <h2>We provide good quality machines and services at affordable price</h2>
        </div>
        <div class="banner2 swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in hotProducts" @click="goProductDetail(item)">
              <img
                style="display: block;width:200px;height: 200px;margin: 0 auto"
                :src="item.pic[0]"
                alt
              />
              <div class="info">{{item.name_en}}</div>
            </div>
<!--            <div class="swiper-slide">-->
<!--              <img-->
<!--                src="//5prorwxhmplojik.ldycdn.com/cloud/liBqjKmrRinSpmrjmmlp/640-200-200.jpg"-->
<!--                alt-->
<!--              />-->
<!--              <div class="info">Rotary Vacuum Paddle Dryer</div>-->
<!--            </div>-->
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>

    <div class="introduce">
      <div class="container">
        <div class="title">
          <h1>WELCOME TO DOING MACHINE</h1>
          <h2>
            Changzhou Doing Machine Co., Ltd has been manufacturing, engineering and exporting various kinds of industrial dryers,mixers, granulators and impact mills since 1995, for thousands of satisfied customers.Attention to detail and real production data is critical in the manufacturing of industrial machinery. An unique design for specific material is always made based on real production experiences or trial data.Doing Machine has experienced technicians who has been working in this field for more than 30 years as well as professional pilot plant.Free trial and material study are available for our customers.This is also true after the sale . Doing Machine has skilled and experienced after sales service team who can reach customers in short notice for providing professional installation, commissioning and training services.
            <br />DoingMachine is always your reliable machinery supplier.
          </h2>
          <div class="imgList">
            <img src="//5prorwxhmplojik.ldycdn.com/cloud/imBqjKmrRinSrlpjjjln/gongsi.jpg" style="width: 100%" alt />
            <img src="//5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSrlpjrjln/chejian.jpg" style="width: 100%" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="icon">
      <div class="container">
        <div class="iconList">
          <div class="iconItem">
            <img src="//5ororwxhmplorik.ldycdn.com/cloud/irBqjKmrRinSrlpjkjlo/tubiao1.jpg" alt />
            <p class="iconIntroduce">
              Advanced Pilot Plant
              <br />Free material tests to provide detailed design data
            </p>
          </div>

          <div class="iconItem">
            <img src="//5qrorwxhmploiik.ldycdn.com/cloud/iiBqjKmrRinSrlpjljlo/tubiao2.jpg" alt />
            <p class="iconIntroduce">
              Experienced Technicial Team
              <br /> Has more than 20 year's experiences
            </p>
          </div>

          <div class="iconItem">
            <img src="//5qrorwxhmploiik.ldycdn.com/cloud/ijBqjKmrRinSrlpjnjlo/tubiao3.jpg" alt />
            <p class="iconIntroduce">
              Skilled Workers
              <br /> Specially trained workers pay close attention to details
            </p>
          </div>

          <div class="iconItem">
            <img src="//5ororwxhmplorik.ldycdn.com/cloud/ikBqjKmrRinSrlpjojlo/tubiao4.jpg" alt />
            <p class="iconIntroduce">
              Professional After Service
              <br /> Reach customers in short notice for installation and commissioning
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="container">
        <div class="productList col-md-12">
          <div class="productItem col-md-3" v-for="item in mainProducts" @click="goProductDetail(item, true)">
            <div class="imgBox">
              <img :src="item.pic[0]" alt />
            </div>
            <div class="prodInfo" style="width:95%">
              <div class="title">{{item.name_en}}</div>
              <div class="info">
                {{item.main_introduction}}
              </div>
            </div>
            <div class="readmore col-md-12">
              <div class="more">READ MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { getBannersAPI, getProductAPI } from '@/api'
export default {
  data() {
    return {
      curren_id: 0,
      bannerList:[],
      itemList: [
        {
          imgSrc:
            "//5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSilmilqlo/lunbo.jpg",
          id: "0",
          text:
            "//5ororwxhmplorik.ldycdn.com/cloud/ioBqjKmrRinSillirnln/lunbo3-zi.png"
        },
        {
          imgSrc:
            "//5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSilmilqlo/lunbo.jpg",
          id: "1",
          text:
            "//5ororwxhmplorik.ldycdn.com/cloud/ioBqjKmrRinSillirnln/lunbo3-zi.png"
        },
        {
          imgSrc:
            "//5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSilmilqlo/lunbo.jpg",
          id: "2",
          text:
            "//5ororwxhmplorik.ldycdn.com/cloud/ioBqjKmrRinSillirnln/lunbo3-zi.png"
        },
        {
          imgSrc:
            "//5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSilmilqlo/lunbo.jpg",
          id: "3",
          text:
            "//5ororwxhmplorik.ldycdn.com/cloud/ioBqjKmrRinSillirnln/lunbo3-zi.png"
        }
      ],
      productList: [],
      hotProducts: [],
      mainProducts: []
    };
  },
  created() {},
  async mounted() {
    await this.getProduct({});
    await this.getBanners();
    var swiper = new Swiper(".banner1", {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    var swiper2 = new Swiper(".banner2", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true
      // autoplay: {
      //   delay: 3000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: true
      // }
    });

  },
  methods:{
    async getBanners(){
      let res = await getBannersAPI({});
      if(res && res.data && res.data.data){
        this.bannerList = res.data.data
      }
    },
    async getProduct(_param){
      let res = await getProductAPI(_param);
      this.productList = res.data.data
      this.hotProducts  = res.data.data.filter(el=>{
        return el.is_hot === '是'
      })
      this.mainProducts = res.data.data.filter(el=>{
        return el.is_main === '是'
      })
      if(this.mainProducts.length>=4){
        this.mainProducts.splice(3,1)
      }
      console.log(this.hotProducts, this.mainProducts)
      },
      /*
        去商品商品详情
       */
      async  goProductDetail(item, isMore = false){
        this.$router.push({name: 'productDetail', query:{id:item.id,isMore}})
      },
      /*
         联系我们
      */
      async  goContactUs(item){
        this.$router.push({name: 'contactus', query:{id:item.id}})
      },
      /*
        去新闻详情
       */
      async  goNewsDetail(item){
        this.$router.push({name: 'newsDetail', query:{id:item.id}})
      }
    },
};
</script>

<style lang="less" >
@import "../../assets/style/varibles.less";

.index {
  .swiper {
    // height: 595px;
    .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 0.5rem !important;
    }

    .swiper-pagination-bullet {
      background-image: none !important;
      background-color: transparent !important;
      border: 2px solid #fff !important;
      border-radius: 50% !important;
      width: 12px !important;
      height: 12px !important;
      margin-right: 5px !important;
      opacity: 1 !important;
      border-color: #f00 !important;
    }

    .swiper-pagination-bullet-active {
      opacity: 1 !important;
      background: #f00 !important;
    }

    .swiper-container {
      width: 100%;
      // height: 595px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      // background: red;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img {
        width: 100%;
        // position: absolute;
        // left: 0;
        // top: 0;
      }
      .text {
        position: absolute;
        left: 15%;
        top: 20%;
        width: 100%;
        img {
          // position: relative;
          width: 35%;
          // height: 2.86rem;
          padding: 0px;
          border-width: 0px;

          transform-origin: 50% 50% 0px;
          transform: matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            -0.002,
            0,
            0,
            0,
            1
          );
          visibility: visible;
          opacity: 1;
          filter: none;
          display: block;

          margin-left: 0px;
        }
        .more {
          width: auto;
          height: auto;
          font-size: 0.5%;
          line-height: 26.2345px;
          padding: 1% 1%;

          margin-left: 0px;
          margin-top: 0px;
          color: rgb(255, 255, 255);
          background-color: rgb(235, 3, 3);
          border-color: rgb(0, 0, 0);
          border-style: solid;
          border-width: 0px;
          border-radius: 0px;
          // visibility: hidden;
          opacity: 1;
          filter: none;
          z-index: 9;
          position: absolute;
          left: 0;
          margin-top: 3%;
          cursor: pointer;
        }

        .more:hover {
          background-color: black;
          transition: all 1s;
        }
      }
    }
  }

  .hotProduct {
    margin-top: 55px;
    .title {
      text-align: center;
      h1 {
        color: #000000;
        font-size: 25px;
        font-family: Open Sans;
      }
      h2 {
        font-family: Open Sans;
        font-size: 18px;
        color: #545454;
        letter-spacing: 0;
        line-height: 1.7em;
      }
    }
    .banner2 {
      margin-top: 18px;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-wrapper {
      padding-bottom: 58px;
    }
    .swiper-slide {
      /*width: 226px;*/
      width: 100%;
      text-align: center;
      font-size: 14px;
      background: #fff;
      cursor: pointer;
      .info {
        margin-top: 5px;
        font-size: 18px;
        color: #545454;
        /*overflow: hidden;!*超出部分隐藏*!*/
        /*text-overflow:ellipsis;!* 超出部分显示省略号 *!*/
        /*white-space: nowrap;!*规定段落中的文本不进行换行 *!*/
      }
      .info:hover {
        color: red;
      }

      /* Center slide text vertically */
    }
  }

  .introduce {
    background-color: #e5e5e5;
    padding-bottom: 41px;
    .container {
      .title {
        margin-top: 44px;
        h1 {
          text-align: center;
          color: #000000;
          font-size: 25px;
          font-family: Open Sans;
        }
        h2 {
          font-family: Open Sans;
          font-size: 14px;
          color: #545454;
          letter-spacing: 0;
          line-height: 1.7em;
          text-align: center;
        }
        .imgList {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
          img {
            margin: 0 10px;
          }
        }
      }
    }
  }

  .icon {
    margin-top: 54px;
    padding-bottom: 60px;
    .iconList {
      display: flex;
      .iconItem {
        padding: 10px 0;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
        max-width: 100%;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
        }
        p {
          text-align: center;
          line-height: 1.6em;
        }
      }
    }
  }

  .products {
    /*background: url(https://5ororwxhmplorik.ldycdn.com/cloud/ipBqjKmrRinSilmrjiln/SHICHA.jpg)*/
    background: url('../../assets/img/main_product.jpg')
      no-repeat fixed center center;
    background-size: 200% 200%;
    border-left: 0 solid #000;
    border-right: 0 solid #000;
    border-top: 0 solid #000;
    border-bottom: 0 solid #000;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    .productList {
      .productItem {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // background: #fff;
        .imgBox {
          margin: 0 10px;
          img {
            transition: all 0.6s; //过渡属性完成时间
            max-width: 100%;
          }
          img:hover {
            transform: scale(1.1); //放大倍数
          }
        }

        .prodInfo {
          background-color: #fff;
          border-left: 1px solid #545454;
          border-right: 1px solid #545454;
          border-top: 1px solid #999;
          border-bottom: 1px solid #545454;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          margin-top: 0;
          margin-right: 0;
          margin-bottom: 0;
          margin-left: 0;
          padding-top: 10px;
          padding-right: 20px;
          padding-bottom: 10px;
          padding-left: 20px;
          margin: 0 10px;
          .title {
            font-size: 16px;
            color: #333;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 1.8em;
            text-align: left;
            padding: 20px 0;
          }
          .info {
            letter-spacing: 0;
            line-height: 1.7em;
            text-align: left;
            font-size: 14px;
            color: #999;
            padding-bottom: 20px;
            overflow: hidden;/*超出部分隐藏*/
            text-overflow:ellipsis;/* 超出部分显示省略号 */
            white-space: nowrap;/*规定段落中的文本不进行换行 */
          }
        }
      }
    }

    .readmore {
      background-position: left top;
      background-repeat: repeat;
      background-attachment: scroll;
      .more {
        margin: 0 10px;
        font-size: 14px;
        color: #545454;
        letter-spacing: 0;
        line-height: 1.7em;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: #5d5d5d;
        color: #fff;
        border-radius: 0;
        border-color: #333;
        border-style: solid;
        border-width: 0;
        cursor: pointer;
      }
      .more:hover {
        background-color: black;
      }
    }
  }
}

@media (max-width: 989px) and (min-width: 768px) {
  .index .introduce .container .title .imgList {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 30px;
    }
  }
  .index .icon .iconList {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .index .products .productList .productItem .imgBox{
    width: 94.5%;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  .index .products .readmore{
     width: 94.5%;
    display: flex;
    justify-content: center;
    // background-color: #fff;
    .more{
      width: 100%;
      margin: 0;
    }
  }
}

@media (max-width: 768px) and (min-width: 1px) {
  .index .introduce .container .title .imgList {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 30px;
    }
  }
  .index .icon .iconList {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .index .products .productList .productItem .imgBox{
    width: 96%;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
  .index .products .readmore{
     width: 96%;
    display: flex;
    justify-content: center;
    // background-color: #fff;
    .more{
      width: 100%;
      margin: 0;
    }
  }
}
@media (min-width: 600px) {
  .more {
    transition: all 0.3s ease-in-out;
  }
}
</style>
