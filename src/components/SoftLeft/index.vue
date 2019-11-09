<template>
	<div>
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
</template>
<script>
export default {
    name: "SoftLeft",
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
      	]
      };
    },
    mounted() {
      
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
 </style>