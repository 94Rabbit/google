<template>
	<div class="container">
		 <div class="container-fuild software-box">
		 	<div class="row">
		 		<div class="col-xs-12 col-sm-4 col-md-3">
		 			<soft-left></soft-left>
		 		</div>
		 		<div class="col-xs-12 col-sm-8 col-md-9">
		 			<div class="pro-detail-box">
		 				<div class="pro-detail-header">
			 				<h3>Product Detail</h3>
			 				<hr/>
			 			</div>
			 			<!--pic-->
			 			<div v-if="!isReadMore" class="row">
			 				<div class="col-xs-12 col-sm-12 col-md-6">
			 					<div class="pro-pic-list">
<!--			 						  轮播图-->
<!--                   <div class="swiper-container gallery-top">-->
<!--									    <div class="swiper-wrapper">-->
<!--									            <div class="swiper-slide"-->
<!--									      v-for="(item,index) in swiperList"-->
<!--									      :key="index"-->
<!--									      :style="{backgroundImage:'url('+item.img+')',height:'300px'}"-->
<!--									      ></div>-->
<!--									    </div>-->
<!--									    &lt;!&ndash; Add Arrows &ndash;&gt;-->
<!--									    <div class="swiper-button-next swiper-button-white"></div>-->
<!--									    <div class="swiper-button-prev swiper-button-white"></div>-->
<!--									  </div>-->
<!--									 <div class="swiper-container gallery-thumbs">-->
<!--									    <div class="swiper-wrapper">-->
<!--									      <div class="swiper-slide"-->
<!--									      v-for="(item,index) in swiperList"-->
<!--									      :key="index"-->
<!--									      :style="{backgroundImage:'url('+item.img+')'}"-->
<!--									      ></div>-->
<!--									    </div>-->
<!--									  </div>-->
<!--                  <goodsDetail :pic="productPics"/>-->
                  <goodsDetail/>
								</div>
			 				</div>
			 				<div class="col-xs-12 col-sm-12 col-md-6">
			 					<div class="pro-de-rf">
			 						<div class="p-h-t">
				 						<h4>{{productInfo.name_en}}<span @click="openCode"><img src="https://www.doingmachine.com/phoenix/admin/prod/qrcode/21326924"></span></h4>
                      <div v-show="currPic"><div id="qrcode"></div></div>
<!--                    <img src="https://www.doingmachine.com/phoenix/admin/prod/qrcode/21326924">-->
				 					</div>
			 						<p v-html="productInfo.introduction"></p>
			 						<div class="row" style="padding: 10px 0">
			 							<div class="col-xs-4 col-sm-4 col-md-4">
			 								quitity:
			 							</div>
			 							<div class="col-xs-8 col-sm-8 col-md-8">
			 								<div class="">
											  <button type="button" class="btn btn-default" @click="decrease">-</button>
											  <input type="number" name="" v-model="num" class="form-control input-s" min="1">
											  <button type="button" class="btn btn-default" @click="add">+</button>
											</div>
			 							</div>
			 						</div>
			 						<div class="row" style="padding: 15px 0;">
			 							<div class="col-xs-12 col-sm-12 col-md-3">
			 								<button type="button" style='margin-bottom:10px;' class="btn btn-default btn-pro-s"><a @click="goOrderList" style="color:#d9534f">inquire</a></button>
			 							</div>
			 							<div class="col-xs-12 col-sm-12 col-md-9">
			 								<button type="button" class="btn btn-danger btn-group-lg" @click="addCart"><i class="glyphicon glyphicon-shopping-cart"></i>&nbsp;&nbsp;Add To Basket</button>
			 							</div>
			 						</div>
			 					</div>

			 				</div>
			 			</div>
			 			<!--font-->
			 			<div v-if="!isReadMore" class="pro-d-p">
			 				<h3><span>Product Description</span></h3>
			 				<div class="pro-font-pic">
			 				<div class="pro-d-h">
			 					<h4><span>Overview</span></h4>
			 				</div>
			 				<p v-html="productInfo.overview"></p>
			 				<div class="pro-d-h">
			 					<h4><span>Product Description</span></h4>
			 				</div>
              <p v-html="productInfo.description"></p>
              <div class="pro-d-h">
                <h4><span>Typical Applications</span></h4>
              </div>
              <p v-html="productInfo.applications"></p>
              <div class="pro-d-h">
                <h4><span>FAQ</span></h4>
              </div>
              <p v-html="productInfo.faq"></p>
			 			  </div>
			 			</div>
			 			<div v-if="!isReadMore" class="pro-nex-btn">
			 				<a href="###">Next:  Air Classifying Mill Pulverizer</a>
			 			</div>
			 			<div>
			 				<h3>Feedback</h3>
			 				<form class="form-horizontal" role="form">
			 				<div class="form-group">
				                <label for="email" class="col-sm-2 control-label">
				                	<span style="color: red">*</span>Email</label>
				                <div class="col-sm-10">
				                  <input type="text" class="form-control" id="email"  v-model="feedBackInfo.email" placeholder="">
				                </div>
				              </div>
				              <div class="form-group">
				                <label for="name" class="col-sm-2 control-label">Name</label>
				                <div class="col-sm-10 col-xs-12">
				                  <input type="text" class="form-control" id="name" v-model="feedBackInfo.name" placeholder="">
				                </div>
				              </div>
				              <div class="form-group">
				                <label for="content" class="col-sm-2 control-label"><span style="color: red">*</span>Message</label>
				                <div class="col-sm-10">
				                  <textarea class="form-control" id="content" rows="8" placeholder="" v-model="feedBackInfo.message"></textarea>
				                </div>
				              </div>
				              <div class="form-group">
				                <div class="col-sm-offset-2 col-sm-3">
				                  <button @click="feedBack" class="btn btn-danger btn-block">提交</button>
				                </div>
				              </div>
				            </form>
			 			</div>
		 			</div>
		 			<br/>
		 			<div class="pro-d-relat">
		 				<h3>Related Products</h3>
		 				<div class="row">
              <div class="product-banner swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in relatedProduct" @click="goProductDetail(item)">
                    <img
                      style="display: block;width:200px;height: 200px;margin: 0 auto"
                      :src="item.pic[0]"
                      alt
                    />
                    <div class="info" style="text-align: center">{{item.name_en}}</div>
                  </div>
                </div>
<!--                <div class="swiper-pagination"></div>-->
                <div class="swiper-button-next control-direction">＞</div>
                <div class="swiper-button-prev control-direction">＜</div>
              </div>
		 				</div>
            <h3>Related News</h3>
            <div class="row">
              <div class="news-banner swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in relatedNews">
                    <img
                      style="display: block;width:200px;height: 200px;margin: 0 auto"
                      :src="item.pic"
                      alt
                    />
                    <div class="info" style="text-align: center">{{item.title_en}}</div>
                  </div>
                </div>
<!--                <div class="swiper-pagination"></div>-->
                <div class="swiper-button-next control-direction">＞</div>
                <div class="swiper-button-prev control-direction">＜</div>
              </div>
            </div>
		 			</div>
		 			<p>&nbsp;</p>
		 		</div>
		 	</div>
		 </div>
		 <shop-note></shop-note>
	</div>
</template>
<script>
	import SoftLeft from "@/components/SoftLeft"
	import Swiper from "swiper";
  import { WOW } from 'wowjs';
  import  ShopNote  from '@/components/ShopNote'
  import goodsDetail from "./GoodsDetail";
  import { getProductDetailAPI, feedbackAPI, getRelatedProductAPI, getRelatedNewsAPI } from '@/api'
  import QRCode from 'qrcodejs2'
export default {
    name: "ProDetail",
    components: {
	  "soft-left": SoftLeft,
	  "shop-note": ShopNote,
    goodsDetail
    },
    data() {
      return {
        productPics:[],
        productInfo:{},
        feedBackInfo:{
          name:'',
          email:'',
          message:'',
          production_id: 0
        },
      	swiperList: [
          {
          	id:'0',
            img: require("@/assets/img/banner1.png"),
            path: "",
            title: '您身边的IT专家1',
            content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
          },
          {
          	id:'1',
            img: require("@/assets/img/banner2.jpg"),
            path: "",
            title: '您身边的IT专家2',
            content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
          },
          {
          	id:'2',
            img: require("@/assets/img/banner1.png"),
            path: "",
            title: '您身边的IT专家3',
            content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
          },
          {
          	id:'3',
            img: require("@/assets/img/banner2.jpg"),
            path: "",
            title: '您身边的IT专家4',
            content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
          }
        ],
        currPic:false,
        num:1,
        qrcode: null,
        relatedProduct:[],
        relatedNews: [],
        isReadMore:false
      };
    },
    async mounted() {
      this.isReadMore = this.$route.query.isMore;
      await this.getProductDetail();
      await this.getRelatedProduct();
      await this.getRelatedNews();
    /* banner-swiper */
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observeParents:false,   //注意这里！！
			observer:true, //也要注意这里！
    });
	    /*相关产品*/
      new Swiper(".product-banner", {
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
      });
      /*相关新闻*/
      new Swiper(".news-banner", {
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
      });
      new Swiper('.gallery-top', {
	      spaceBetween: 1,
	      loop:true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      observeParents:false,   //注意这里！！
			observer:true, //也要注意这里！！

	      thumbs: {
	        swiper: galleryThumbs
	      },
	      slideThumbActiveClass: 'swiper-slide-thumb-active',
	    });

      /* wowjs动画 */
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      })
      wow.init();
    },
    methods:{
    	openCode(){
    		this.currPic=!this.currPic
        if(this.qrcode){
          this.qrcode.clear() //清除二维码
        }
        else{
          this.createQrcode();
        }
    	},
    	add(){
    		this.num = Number(this.num) + 1
    	},
      decrease(){
    		if(this.num > 0) {
    			this.num = Number(this.num) - 1
    		}
    	},
      /*
       获取商品详情
      */
      async  getProductDetail(){
        let res = await getProductDetailAPI(this.$route.query.id);
        if(res.data && res.data.data){
          this.productInfo = res.data.data
          this.productPics = res.data.data.pic
        }
      },
      /*
       提交反馈
      */
      async  feedBack(){
        this.feedBackInfo.production_id = this.productInfo.id
        let res = await feedbackAPI(this.feedBackInfo);
        debugger
        if(res.data && res.data.data){
          console.log(res);
        }
      },
      /*
      添加购物车
     */
      async addCart(){
        const { id,name_en } = this.$route.query
        let product = {
          id,
          name_en,
          num:this.num,
          pic:this.productPics[0]
        }
        this.$store.commit('addCart',product)
      },
      /*
     生成二维码地址
    */
      createQrcode() {
        this.qrcode = new QRCode('qrcode', {
          width:120,
          height:120,
          text: 'https://www.baidu.com', // 需要二维码跳转的地址
          colorDark : "black", //前景色
          colorLight : "#fff", //背景色
        })
      },
      /*
       获取相关商品
      */
      async getRelatedProduct() {
        let id = this.$route.query.id
        let res = await getRelatedProductAPI(id)
        this.relatedProduct = res.data.data
      },
      /*
      获取相关商品
     */
      async getRelatedNews() {
        let id = this.$route.query.id
        let res = await getRelatedNewsAPI(id)
        this.relatedNews = res.data.data
        console.log(this.relatedNews, '相关新闻')
      },
      /*
      进入订单信息
     */
      goOrderList(){
        const { id,name_en } = this.$route.query
        let product = {
          id,
          name_en,
          num:this.num,
          pic:this.productPics[0]
        }
        this.$router.push({name:'inquire',query:{isCart:false,product}})
      },
      /*
      去商品商品详情
      */
      async  goProductDetail(item){
        this.$router.push({name: 'productDetail', query:{id:item.id}})
      }
    },
    watch:{
      num(newVal,oldVal){
         if(Number(newVal) === 0 && Number(newVal) < 0){
          this.num = 0
         }
        }
      }
  };
</script>
 <style lang="scss" scoped>
 .pro-pic-list {
 	padding-bottom:20px;
 }
 .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 50%;
      width: 100%;
    }
    .gallery-thumbs {
    	width: 100%;
      height: 50%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 50px;
      // height: 100%;
      opacity: 0.4;
      background-color:#000;
      background-position:center center;
      background-size:cover;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
    .control-direction{
      background-image: none;
      width:30px;
      height: 30px;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
      outline: none;
      color:#fff;
      background: #869791;
      opacity: .5;
    }
@media screen and (max-width: 997px) {
  .gallery-thumbs {
  	display: none;
  }
}
 .pro-detail-box {
 	padding-top: 20px;

 	.pro-detail-header {
 		hr { border-color: #333;}
 	}
 	.control-label {
 		font-weight: normal;
 	}
 .pro-d-p {
 	border:1px solid #ccc;
 	 // padding: 15px;
 	padding-top:0;
 	word-wrap:break-word;
 	h3 {
 			height: 35px;
	 		background-color: #dddddd;
	 		border-bottom:2px solid #dddddd;
	 		padding:0 !important;
	 		margin: 0 !important;
	 		span {
 			padding:0 10px;
 			line-height: 35px;
 			border-top:2px solid #0688ba;
	 		background-color:#fff;
	 		display: inline-block;
	 		font-size: 14px;
	 		color:#0688ba;
	 		}
	 	}
	 	.pro-font-pic {
	 		padding:15px;
	 	}
	 	.pro-d-h {
	 		margin-bottom: 20px;
	 		padding-bottom:2px;
	 		border-bottom:2px solid #dddddd;
	 		h4 {
	 			height: 30px;
		 		background-color: #fff;
		 		border-bottom:2px solid #dddddd;
		 		padding:0 !important;
		 		margin: 0 !important;
	 		span {
	 			padding:0 10px;
	 			line-height: 30px;
		 		background-color:#dddddd;
		 		display: inline-block;
		 		}
		 	}
	 	}
	 	p {
	 		line-height: 25px;
	 		color: #0688ba;
	 	}
	 	img {
	 		width: 100%;
	 		max-width: 100%;
	 	}

 }
 }
 .pro-nex-btn {
 	width: 100%;
 	padding:20px 0;
 	height: 50px;
 	clear: both;
 	text-align: right;
 	a {
 		background-color: #efefef;

    padding: 10px;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #545454;
    letter-spacing: 0;

    text-align: left;
}

 }
 	.pro-d-relat {
 		padding-bottom:20px;
 		a {
 			text-align: center;
 			width: 90%;
 			display: block;
 			&:nth-child(1){
 				// height: 113px;
 			}
 			img {
 			width: 100%;
 			max-width: 100%;
 			height: 100%;
 			display: block;
 		   }
 		}

 	}
 	.pro-de-rf {
 		.p-h-t {
 			position: relative;
 			div {
 				position:absolute;
 				right: 0px;
 				/*top: 30px;*/
 				width: 120px;
 				height: 120px;
 				z-index: 99;
 				border:1px solid #ccc;
 				img {
 					width: 100%;
 					max-width: 100%;
 				}
 			}
 			h4 {
 				span {
 					float: right;
 					display: inline-block;
 					img {width: 30px;height: 30px;display: inline-block;}
 				}
 			}
 		}
 	}
 	.input-s {
 		display: inline-block;
    text-align: center;
 		width: 60px;
 	}
 	.btn-pro-s {
 		color: #d43f3a;
 		border-color: #d43f3a;
 	}
 </style>
