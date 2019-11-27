<template>
  <div class="footer" :class="{'fixed':isFixed}">
    <div class="top">
      <div class="container">
        <div class="main col-md-12">
          <div class="item share col-md-3">
            <div class="log">
<!--              <img src="//5ororwxhmplorik.ldycdn.com/cloud/iiBqjKmrRinSrljnpilo/yejiao.png" alt />-->
              <img src="@/assets/img/logo.png" alt="" style="width:100%;position:relative; left:-30px;">
            </div>
            <div class="shareList">
              <span class="twitter"></span>
              <span class="linkedin"></span>
              <span class="google"></span>
              <span class="facebook"></span>
            </div>
          </div>

          <div class="item col-md-3">
            <div
              class="name"
              v-on:mouseover="changeActive($event)"
              v-on:mouseleave="removeActive($event)"
              v-on:click="slide1"
            >
              <h2>QUICK LINKS</h2>

              <span class="iconfont icon-35_xiangxiajiantou angle" :class="show1?'rotate':''"></span>
            </div>
            <transition name="expand" class="expand">
              <div class="list" v-show="show1">
                <router-link tag="div" class="tab-item listItem" to="/home">
                  <span class="tab-link">Home</span>
                </router-link>
                <router-link tag="div" class="tab-item listItem" to="/products">
                  <span class="tab-link">Products</span>
                </router-link>
                <router-link tag="div" class="tab-item listItem" to="/news">
                  <span class="tab-link">News</span>
                </router-link>
                <router-link tag="div" class="tab-item listItem" to="/aboutus">
                  <span class="tab-link">About Us</span>
                </router-link>
                <router-link tag="div" class="tab-item listItem" to="/contactus">
                  <span class="tab-link">Contact Us</span>
                </router-link>
              </div>
            </transition>
          </div>

          <div class="item col-md-3">
            <div
              class="name"
              v-on:mouseover="changeActive($event)"
              v-on:mouseleave="removeActive($event)"
              v-on:click="slide2"
            >
              <h2>PRODUCTS CATEGORY</h2>
              <span class="iconfont icon-35_xiangxiajiantou angle" :class="show2?'rotate':''"></span>
            </div>
            <transition name="expand" class="expand">
              <div class="list" v-show="show2">
                <div v-for="item in productTypes">
                  <router-link  tag="div" class="tab-item listItem" :to="'/products/'+item.name_en" >
                    <span class="tab-link">{{item.name_en}}</span>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <div class="item col-md-3">
            <div class="name">
              <h2>CONTACT US</h2>
            </div>
            <div class="list">
              <div class="listItem bot">
                <img src="//5prorwxhmplojik.ldycdn.com/cloud/ilBqjKmrRinSilkqprlo/weixin.png" alt />
                <a href="https://api.whatsapp.com/send?phone=13341624188" style="text-decoration: none;color:#fff"><span>13341624188</span></a>
              </div>
              <div class="listItem bot">
                <img src="//5prorwxhmplojik.ldycdn.com/cloud/ikBqjKmrRinSilkqqrlo/dainhua.png" alt />
                <a href="tel:+86-13341624188" style="text-decoration: none;color:#fff"><span>+86-13341624188</span></a>
              </div>
              <div class="listItem bot">
                <img
                  src="//5qrorwxhmploiik.ldycdn.com/cloud/inBqjKmrRinSilkqmrlo/youxiang.png"
                  alt
                  srcset
                />
                <a href="mailto:stone@doingmachine.com" style="text-decoration: none;color:#fff"><span>stone@doingmachine.com</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container">
        <p>Copyright 2018 Changzhou Doing Machine Co., Ltd Support By Youxin Manage Entrance</p>
      </div>
    </div>
    <div class="foot">
      <div class="item">
        <div class="iconfont icon-dianhua1"></div>
        <a style="position:absolute;width: 100%;height: 100%;" href="tel:+86-18605164068"></a>
      </div>
      <div class="item">
        <div class="iconfont icon-youjian"></div>
        <a style="position:absolute;width: 100%;height: 100%;" href="mailto:stone@doingmachine.com"></a>
      </div>
      <div class="item">
        <div class="iconfont icon-dianhua"></div>
        <a style="position:absolute;width: 100%;height: 100%;" href="https://api.whatsapp.com/send?phone=8618605194068"></a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: "Footer",
    data() {
      return {
        show1: false, //控制第一个菜单
        show2: false,//控制第一个菜单,
        isFixed: false
      };
    },
    computed: {
      ...mapState({
        productTypes: state => state.productTypes
      }),
    },
    watch:{
      '$route.path':(el) => {
        console.log(this.isFixed,'dasd')
        return this.isFixed =  document.body.scrollHeight < (window.innerHeight || document.documentElement.clientHeight)
      }
    },
    methods: {
      changeActive($event) {
        $event.currentTarget.className = "name in";
      },
      removeActive($event) {
        $event.currentTarget.className = "name";
      },
      slide1() {
        this.show1 = !this.show1;
      },
      slide2() {
        this.show2 = !this.show2;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../assets/style/varibles.less";
  .footer {
    /*position: fixed;*/
    /*width: 100%;*/
    /*bottom: 0;*/
    padding-top: 20px;
    .top {
      background-color: #7d7d7d;
      padding-top: 20px;
      .container {
        .main {
          .item {
            padding: 10px 0;
            .name {
              margin-bottom: 20px;

              position: relative;
              h2 {
                font-size: 20px;
                color: #fff;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 1.8em;
                text-align: left;
              }
              .angle {
                position: absolute;
                right: 5px;
                height: 20px;
                width: 20px;
                cursor: pointer;
                top: 50%;
                margin-top: -10px;
                line-height: 20px;
                display: none;
                color: white;
                transform: rotate(0);
              }
            }
            .in {
              h2,
              .angle {
                color: #434343;
              }
              .angle {
                color: #434343;
              }
            }
            .rotate {
              transform: rotate(180deg) !important;
            }

            .list {
              .listItem {
                cursor: pointer;
                font-size: 14px;
                color: #fff;
                letter-spacing: 0;
                line-height: 2.2em;
                img {
                  margin-right: 5px;
                }
              }

              .listItem:hover {
                color: red;
              }

              .bot {
                padding-bottom: 20px;
              }
            }
          }
          .share {
            .log {
              margin: 12px 10px 0px;
            }
            .shareList {
              margin-top: 22px;
              display: flex;
              letter-spacing: 12px;
              width: 180px;
              justify-content: space-between;
              span {
                display: block;
                width: 32px;
                height: 32px;
                letter-spacing: 12px;
                line-height: 1.7em;
                cursor: pointer;
                transition: all 0.3s;
              }
              span:hover {
                transition: all 0.3s;
                background-color: #ccc !important;
              }
              .twitter {
                background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                  repeat -24px -256px #00aced;
                background-color: #000;
              }
              .linkedin {
                background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                  repeat -24px -128px #00aced;
                background-color: #000;
              }
              .google {
                background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                  repeat -24px -64px #00aced;
                background-color: #000;
              }
              .facebook {
                background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                  repeat -24px 0px #00aced;
                background-color: #000;
              }
            }
          }
        }
      }
    }

    .bottom {
      background-color: #7d7d7d;
      .container {
        border-top: 1px solid rgb(204, 204, 204);
      }
      p {
        color: #ffffff;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 1.7em;
        margin-top: 10px;
      }
    }

    .foot {
      display: none;
    }
  }

  @media (min-width: 1220px) {
    .footer {
      .top {
        .container {
          .main {
            .item {
              .list {
                display: block !important;
              }
            }
            .share {
            }
          }
        }
      }
    }
  }
  @media (min-width: 990px) {
    .footer {
      .top {
        .container {
          .main {
            .item {
              .list {
                display: block !important;
              }
            }
            .share {
            }
          }
        }
      }
    }
  }

  @media (max-width: 989px) and (min-width: 768px) {
    .expand-enter-active {
      /*定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。*/
      transition: all 0.3s ease;
      height: 150px;
      overflow: hidden;
    }

    .expand-leave-active {
      height: 0px;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .expand-enter {
      height: 0;
      opacity: 0;
    }

    .expand-leave {
      height: 50px;
      opacity: 1;
    }
    .footer {
      .top {
        .container {
          .main {
            .item {
              padding: 5px 0;
              .name {
                .angle {
                  display: block;

                  transition: all 0.5s;
                  -webkit-transition: all 0.5s;
                }
              }
            }
            .share {
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) and (min-width: 1px) {
    .expand-enter-active {
      /*定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。*/
      transition: all 0.3s ease;
      height: 150px;
      overflow: hidden;
    }

    .expand-leave-active {
      height: 0px;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .expand-enter {
      height: 0;
      opacity: 0;
    }

    .expand-leave {
      height: 50px;
      opacity: 1;
    }
    .footer {
      padding-bottom: 56px;
      .top {
        .container {
          .main {
            .item {
              margin: 0 10px;
              padding: 0;
              .name {
                h2 {
                  font-size: 18px !important;
                }
                .angle {
                  display: block;

                  transition: all 0.5s;
                  -webkit-transition: all 0.5s;
                }
              }
              .list {
              }
            }
            .share {
              margin: 12px 10px 0;
              .log {
                margin-left: 0;
                margin-top: 0;
              }
            }
          }
        }
      }

      .bottom {
        p {
          margin: 0 10px;
        }
      }

      .foot {
        display: flex;
        height: 56px;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 99999999;
        .item {
          position: relative;
          width: 33.33%;
          .zjw-center;
          color: #999;
          border: 1px solid #eee;
          font-size: 16px;
          background-color: #fff;
        }
      }
    }
  }
  .fixed{
    position: fixed !important;
    border: 1px solid red;
    width: 100%;
    bottom:0
  }
</style>
