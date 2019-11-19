<template>
  <div class="tips">
    <div class="tipsList">
      <div
        class="tipItem"
        @mouseenter="enter($event)"
        @mouseleave="leave($event)"
        @click="changeOn(1)"
        :class="on==1?'on':''"
      >
        <a style="position:absolute;width: 100%;height: 100%;" href="tel:+86-18605164068"></a>
        <div class="iconfont icon-dianhua1"></div>
        <span>Phone</span>
        <p>+86-18605194068</p>
      </div>
      <div
        class="tipItem"
        @mouseenter="enter($event)"
        @mouseleave="leave($event)"
        @click="changeOn(2)"
        :class="on==2?'on':''"
      >
        <a style="position:absolute;width: 100%;height: 100%;" href="mailto:stone@doingmachine.com"></a>
        <div class="iconfont icon-youjian"></div>
        <span>Email</span>
        <p>stone@doingmachine.com</p>
      </div>
      <div
        class="tipItem"
        @mouseenter="enter($event)"
        @mouseleave="leave($event)"
        @click="changeOn(3)"
        :class="on==3?'on':''"
      >
        <a style="position:absolute;width: 100%;height: 100%;" href="https://api.whatsapp.com/send?phone=8618605194068"></a>
        <div class="iconfont icon-dianhua"></div>
        <span>WhatsApp</span>
        <p>+86-18605194068</p>
      </div>
    </div>
    <div class="top" v-if="btnFlag" @click="backTop"></div>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data() {
    return {
      on: "",
      btnFlag: ""
    };
  },
  methods: {
    enter(e) {
      console.log(e);
      e.currentTarget.className = "tipItem on";
    },
    leave(e) {
      console.log(e);
      e.currentTarget.className = "tipItem";
    },
    changeOn(ind) {
      this.on = ind;
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/varibles.less";
.tips {
  .tipsList {
    position: fixed;
    z-index: 99;
    top: 30%;
    right: 0;
    border-radius: 10px 0 0 10px;
    .tipItem {
      width: auto;
      min-width: 64px;
      height: auto;
      position: relative;
      line-height: 28px;
      text-align: center;
      line-height: 28px;
      background-color: #fff;
      border: 1px solid #eee;
      font-size: 18px;
      /*opacity: 0.7;*/
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #999;

      cursor: pointer;
      span {
        font-size: 14px;
        box-sizing: border-box;
        border-bottom: 0;
      }
      div {
        padding: 8px 0 4px;
      }
      p {
        padding: 5px 8px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: absolute;
        right: 78px;
        top: 6px;
        -webkit-transform: translateX(250%);
        transform: translateX(250%);
        -webkit-transition: all 0.6s;
        transition: all 0.6s;
        z-index: -9;
        white-space: nowrap;
        color: #999;
      }
    }
    .on {
      p {
        transform: translateX(0);
        transition: all 0.6s;
      }
    }
    .tipItem:hover {
      color: red;
    }
  }

  .top {
    position: fixed;
    bottom: 56px;
    right: 12px;
    height: 38px;
    width: 38px;
    overflow: hidden;
    line-height: 38px;
    background: url("../assets/img/toppng.png") no-repeat;
    text-align: center;
    text-indent: -99em;
    text-decoration: none;
    z-index: 9;
  }
}

@media (max-width: 767px) and (min-width: 1px) {
  .tipsList {
    display: none;
  }
}
</style>

