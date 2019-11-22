<template>
  <div>
    <div v-show="this.$store.state.cartList.length>0" class="shoppingBasketIcon" @click="openList">
      <i aria-hidden="true" class="glyphicon glyphicon-shopping-cart"></i>
      <span id="shoppingIconNum" class="shoppingIconNum">{{count}}</span>
    </div>
	<transition name="fade">
    <div id="prodInquireBasket" class="inquire-basket-listwrap" v-show="prodInquireBasket">
      <form id="basketForm" action="###" method="post">
        <div class="basket-title" @click="hideList">
          <span class="basket-title-clickshow">
            <span class="basket-title-fonts">
              Inquire Basket (
              <span id="selectInquireCount" class="basket-title-pronum">{{count}}</span>)
            </span>
          </span>
          <i class="basket-title-thumb"></i>
          <span class="remove-basket-data hide">
            <i class="glyphicon glyphicon-chevron-down"></i>
          </span>
        </div>
        <div class="basket-lists-animatewrap">
          <div class="basket-lists">
            <ul class="fix">
              <li v-for="(item,index) in this.$store.getters.getCartList" :key="index">
				  <a href="javaScript:;">
					  <img :src="item.pic" height="45"/>
				  </a>
				   <a href="javaScript:;" title class="basket-list-name">{{item.name_en}}</a>
                   <a href="javaScript:;" title class="basket-list-delate" @click="deletes(item)">Delete</a>
                  <i class="basket-list-delate">x <em>{{item.num}}</em></i>
			  </li>
            </ul>
          </div>
          <div class="basket-btns fix">
            <button id="basketEmpty" type="button" @click="basketEmpty">Empty</button>
            <span id="basketInquire" class="flr" type='button' style="background: red;padding:0 10px" @click="goOrderList"><a style="color:#fff;text-decoration: none;cursor: pointer">inquire</a></span>
          </div>
        </div>
      </form>
    </div>
	</transition>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
export default {
  name: "shop",
  data() {
    return {
	      prodInquireBasket:false
    };
  },
  computed:{
      ...mapState({
        cartList:state=>state.cartList
      }),
      count(){
        let count = 0
        this.cartList.forEach(item=>{
          count += item.num
        })
        return count
      }
  },
  methods:{
	  openList(){
		  this.prodInquireBasket = true
	  },
	  hideList(){
		  this.prodInquireBasket = false
	  },
	  deletes(item){
      this.$store.commit('deleteProduct',item)
	  },
	  basketEmpty(){
		  this.$store.commit('clearCart')
	  },
    goOrderList(){
	    this.$router.push({name:'inquire',query:{isCart:true}})
    }
  }
};
</script>
 <style lang="scss" scoped>

.inquire-basket-listwrap {
  position: fixed;
  z-index: 2147483647;
  right: 0;
  bottom: 0;
  width: 230px;
  background-color: #fff;
  border: 1px solid #aaa;
  box-shadow: 0 0 8px #999;
}
.shoppingBasketIcon {
  display: block;
  z-index: 98;
  position: fixed;
  right: 10px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #7a8599;
  text-align: center;
  line-height: 55px;
  font-size: 25px;
  cursor: pointer;
  i {
    color: #fff;
  }
  span {
    &.shoppingIconNum {
      position: absolute;
      top: 0;
      display: block;
      right: -5px;
      width: 20px;
      height: 20px;
      font-size: 16px;
      background: red;
      border-radius: 10px;
      color: #fff;
      text-align: center;
      line-height: 20px;
    }
  }
}
.inquire-basket-listwrap {
    position: fixed;
    z-index: 2147483647;
    right: 0;
    bottom: 0;
    width: 230px;
    background-color: #fff;
    border: 1px solid #aaa;
    box-shadow: 0 0 8px #999;
	ul {
		margin: 0;
		padding: 0;
	}
	.basket-title-pronum {
    color: #ffb629;}
	.basket-title {
		cursor: pointer;
		font-weight: bold;
		font-size: 12px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		background-color: #7a8599;
		.basket-title-clickshow {
			display: inline-block;
			position: relative;
		}
		.basket-title-thumb {
			position: absolute;
			left: 6px;
			height: 26px;
			width: 26px;
			top: 5px;
			cursor: pointer;
			background:url("../../assets/img/n.jpg") top center no-repeat;
		}
		.remove-basket-data {
			position: absolute;
			right: 0;
			height: 36px;
			width: 36px;
			top: 0;
			.fa {
				line-height: 36px;
				font-size: 14px;
				display: block;
			}
		}
	}
	.basket-lists {
		padding: 2px 1px;
		height: 190px;
		overflow-y: auto;
		.fix {
			clear: both;
			zoom: 1;
		}
		 li {
			float: left;
			width: 100%;
			padding: 8px 0;
			height: 55px;
			border-bottom: 1px solid #e8e8e8;
			 a {
				float: left;
				margin-left: 10px;
				font-size: 12px;
				line-height: 16px;
				img {
					height: auto;
					width: 40px;
				}
			}
			.basket-list-name {
				width: 140px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #246bb3;
				text-decoration: none;
			}
			.basket-list-delate {
				display: block;
				margin-top: 8px;
				color: #888;
				text-decoration: none;
			}
		}
	}
	.basket-btns {
		padding: 10px;
		font-size: 12px;
		 #basketEmpty {
			line-height: 16px;
			padding: 4px 10px;
			font-size: 12px;
			color: #e64545;
			border: 0;
			background-color: #f1f1f1;
			border-radius: 3px;
		}
		button[type="submit"] {
			line-height: 16px;
			padding: 4px 10px;
			font-size: 12px;
			color: #fff;
			border: 0;
			background-color: #e64545;
			border-radius: 3px;
		}
	}
	.flr {
			float: right;
	}

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
