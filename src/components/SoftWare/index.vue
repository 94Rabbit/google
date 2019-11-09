<template>
	<div class="container">
		 <div class="container-fuild software-box">
		 	<div class="row">
		 		<div class="col-xs-12 col-sm-4 col-md-3">
		 			<div class="software-l-o">
		 				<h4>PRODUCT CATEGORY</h4>
		 				<ul>
		 					<li v-for="(item,index) in protype" :key="index"><a :href="item.href">{{item.name}}</a></li>
		 				</ul>
		 			</div>
		 			<div class="software-l-o">
		 				<h4>CONTACT US</h4>
		 				<div class="software-l-n">
		 				<div v-for="(item,index) in concat" :key="index">
		 					<p>{{item.name}} <br/>{{item.concat}}  </p>
		 					
		 				</div>
		 				<p></p>
		 				</div>
		 			</div>
		 		</div>
		 		<div class="col-xs-12 col-sm-8 col-md-9">
		 			<div class="software-r">
		 				<div class="row">
		 					<div class="col-xs-12 col-sm-6 col-md-3" style="padding-bottom: 10px;">
		 						<div class="software-r-box">
		 							<div class="soft-t">
		 								<a href="##"><img src="../../assets/img/640-220-220.jpg"></a>
		 							</div>
		 							<div class="soft-m"><p><a href="##">Double Cone Powder Mixer blender</a></p></div>
		 							<div class="soft-f">
		 								<button>
		 									<i class="glyphicon glyphicon-camera" aria-hidden="true"></i>Inquire</button>
		 									<a href="##">
		 										<i class="glyphicon glyphicon-share" aria-hidden="true"></i>
		 										<span>Add to Basket</span>
		 									</a>
		 							</div>
		 							<div class="soft-hot"><span></span></div>
		 						</div>
		 					</div>

                            <div class="col-xs-12 col-sm-6 col-md-3" style="padding-bottom: 10px;" v-for="(item,index) in list" :key="index">
		 						<div class="software-r-box">
		 							<div class="soft-t">
		 								<a :href="item.href"><img src="../../assets/img/640-220-220.jpg"></a>
		 							</div>
		 							<div class="soft-m"><p><a :href="item.href">{{item.name}}</a></p></div>
		 							<div class="soft-f">
		 								<button>
		 									<i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>Inquire</button>
		 									<a href="##">
		 										<i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i>
		 										<span>Add to Basket</span>
		 									</a>
		 							</div>
		 							<div class="soft-hot" v-show="item.hot"><span></span></div>
		 						</div>
		 					</div>



		 				</div>
		 			</div>
		 		</div>
		 	</div>
		 </div>
	</div>
</template>
<script>
export default {
    name: "SoftWare",
    data() {
      return {
      	protype:[
      	{name:'Industrial Dryer',href:'###'},
      	{name:'Impact Mill',href:'###'},
      	{name:'Powder Mixer',href:'###'},
      	{name:'Wet Granulator',href:'###'},
      	{name:'Conveying Equipment',href:'###'}
      	],
      	concat:[
      	{name:'WECHAT/WHATSAPP',concat:'18605194068'},
      	{name:'TE',concat:'+86-18605194068'},
      	{name:'W-MAIL',concat:'stone@doingmachine.com'}
      	],
      	list:[
      	{name:'Double Cone Powder Mixer blender',href:'###',hot:true,src:'/static/img/640-220-220.jpg'},
      	{name:'Air Classifying Mill Pulverizer',href:'###',hot:false,src:'/static/img/1-220-220.jpg'},
      	{name:'Rotary Basket Extruding Granulator ',href:'###',hot:true,src:'/static/img/1-220-220(1).jpg'},
      	{name:'Flexible Screw Auger Conveyor',href:'###',hot:false,src:'/static/img/640-220-220(1).jpg'},
      	{name:'Double Cone Powder Mixer blender',href:'###',hot:true,src:'/static/img/1-220-220.jpg'}
      	]
      };
    },
    mounted() {
    	// 传递参数
      console.log(this.$route.query.proId)

    }
  };
</script>
 <style lang="scss" scoped> 
 .software-l-o {
 	margin-top: 30px;
 	margin-bottom: 50px;
 	h4 {
 		padding: 0 15px;
 		margin: 0;
 		font-size: 21px;
    color: #fff;
    letter-spacing: 0;
    line-height: 2.7em;
    text-align: left;
    height: 56px;
    background-color: #7d7d7d;
 	}
 	ul {

 		margin: 0;
    letter-spacing: 0;
    line-height: 2.2em;
    text-align: left;
    border-left: 1px dashed #ddd;
    border-right: 1px dashed #ddd;
    border-top: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    li {
    	padding: 0 15px;
    	border-top: 1px solid #ddd;
    	a {
    		font-size: 16px;
           line-height: 36px;
           color: #333;
           &:hover {
           	color:red;
           }
    	}
    	&:hover {
           	background-color:#f5f5f5;
           }
       }
 	}
 	p {
 		margin: 0;
 		padding: 15px;
 	}
 	.software-l-n {
 		border: 1px dashed #ddd;
 	}
 }
 .software-r {
 	padding-top:30px;
 	.software-r-box {
 		position:relative;
 		padding: 4px;
        border: 1px solid #dcdcdc;
 		.soft-t {
 			width: 100%;
		    height: 200px;
		    display: table;
		    text-align: center;
		     a {
		     	position:relative;
		     	display: block;
		     	width: 100%;
		     	height: 100%;
		     	&:hover {
		     		&:before {
		     			// display: block;
		     			-webkit-transform: scale(1);
					    -moz-transform: scale(1);
					    -ms-transform: scale(1);
					    -o-transform: scale(1);
					    -transform: scale(1);
		     		}
		     	}
		     	&:before {
		     		display: block;
				    content: "";
				    width: 100%;
				    height: 100%;
				    position: absolute;
				    top: 0;
				    left: 0;
				    background-color: #000;
				    opacity: 0.2;
				    background-position: center;
				    background-repeat: no-repeat;
				    background-image: url("../../assets/img/add.png");
				    -webkit-transform: scale(0);
				    -moz-transform: scale(0);
				    -ms-transform: scale(0);
				    -o-transform: scale(0);
				    -transform: scale(0);
				    z-index: 9999;
		     	}
		     	img {
		     		max-width: 100%;
		     		width: 100%;
		     	}
		     }
 		}
 		.soft-m {
 			p {
 				text-align: center;
 				a {
 					height: 37px;
 					font-size: 13px;
				    color: #333;
				    font-weight: bold;
				    letter-spacing: 0;
				    line-height: 1.5em !important;
				    text-align: center;
				    display: block;
 					&:hover{
 						color: red;
 				    }
 				}
 			}
 		}
 		.soft-f {
 			position: relative;
 			button {
 				width: 100%;
 				padding: 0;
			    height: 40px;
			    line-height: 40px;
			    box-sizing: border-box;
			    border-radius: 3px;
			    border: 1px solid #d8dde6;
			    background: #eaedef;
                color: #666;
                text-align: left;
                overflow: hidden;
                &:hover{
 						background-color: rgb(184, 185, 185);
 				    }
                i {
                	width: 40px;
                	height: 40px;
                	line-height: 35px;
                	text-align: center;
                	display: block;
                	margin-right: 30px;
                	float: left;
                }
 			}
 			a {
 				outline: none;
 				text-decoration: none;
			    padding: 0;
			    cursor: pointer;
			    position: absolute;
			    display: block;
			    bottom: 1px;
			    right: 1px;
			    margin: 0;
			    height: 38px;
			    line-height: 38px;
			    width: 40px;
			    overflow: hidden;
			    border-left: 1px solid #d8dde6;
			    color: #333;
			    text-align: center;
			    background: #eaedef;
			    transition: width .5s;
				-moz-transition: width .5s; /* Firefox 4 */
				-webkit-transition: width .5s; /* Safari 和 Chrome */
				-o-transition: width .5s; /* Opera */
			    &:hover{
			    	width: 140px;
 					background-color: rgb(184, 185, 185);

 				}
 				span {
 					display: inline;
 					margin: 10px;
 				}
 			}
 		}
 		.soft-hot {
 			position: absolute;
		    right: -4px;
		    top: 10px;
		    z-index: 3;
		    span {
		    	display: block;
			    width: 27px;
			    height: 29px;
			    margin-bottom: 4px;
			    background: url("../../assets/img/dot.png") no-repeat;
			    background-position: 0 -39px;
		    }
 		}
 	}
 }
</style>
