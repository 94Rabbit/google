<template>
  <div>
    <div class="shoppingBasketIcon" @click="openList">
      <i aria-hidden="true" class="glyphicon glyphicon-shopping-cart"></i>
      <span id="shoppingIconNum" class="shoppingIconNum">{{this.list.length}}</span>
    </div>
	<transition name="fade">
    <div id="prodInquireBasket" class="inquire-basket-listwrap" v-show="prodInquireBasket">
      <form id="basketForm" action="###" method="post">
        <div class="basket-title" @click="hideList">
          <span class="basket-title-clickshow">
            <span class="basket-title-fonts">
              Inquire Basket (
              <span id="selectInquireCount" class="basket-title-pronum">{{this.list.length}}</span>)
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
              <li v-for="(item,index) in list" :key="index">
				  <a href="javaScript:;">
					  <img src="../../assets/img/640-220-220.jpg" height="45"/>
				  </a>
				   <a href="javaScript:;" title class="basket-list-name">{{item.name}}</a>
                   <a href="javaScript:;" title class="basket-list-delate" @click="deletes(item.id)">Delete</a>
			  </li>
            </ul>
          </div>
          <div class="basket-btns fix">
            <button id="basketEmpty" type="button" @click="basketEmpty">Empty</button>
            <button id="basketInquire" class="flr" type="submit">Inquire</button>
          </div>
        </div>
      </form>
    </div>
	</transition>
  </div>
</template>
<script>
export default {
  name: "shop",
  data() {
    return {
	prodInquireBasket:false,
      list: [
        {
		  id:0,
          name: "Double Cone Powder Mixer blender",
          href: "###",
          src: "/static/img/640-220-220.jpg"
        },
        {
			id:1,
          name: "Air Classifying Mill Pulverizer",
          href: "###",
          src: "/static/img/1-220-220.jpg"
        },
        {
			id:2,
          name: "Rotary Basket Extruding Granulator ",
          href: "###",
          src: "/static/img/1-220-220(1).jpg"
        },
        {
			id:3,
          name: "Flexible Screw Auger Conveyor",
          href: "###",
          src: "/static/img/640-220-220(1).jpg"
        },
        {
		  id:4,
          name: "Double Cone Powder Mixer blender",
          href: "###",
          src: "/static/img/1-220-220.jpg"
        }
      ]
    };
  },
  mounted() {},
  methods:{
	  openList(){
		  this.prodInquireBasket = true
	  },
	  hideList(){
		  this.prodInquireBasket = false
	  },
	  deletes(id){
		  let lists = this.list
		  // console.log(id)
		  for(var i=0;i<lists.length;i++) {
			  if(lists[i].id == id){
				  lists.splice(i,1)
				  return
			  }
		  }
	  },
	  basketEmpty(){
		  this.list = []
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