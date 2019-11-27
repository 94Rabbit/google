<template>
	<div>
	<div class="software-l-o">
		<h4>PRODUCT CATEGORY</h4>
    <ul>
      <router-link v-for="(item,index) in productTypes" :key="index"  :to="'/products/'+item.path">
        <li>{{item.name_en}}</li>
      </router-link>
    </ul>
	</div>
	<div class="software-l-o" v-show="!message">
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
import { mapState } from 'vuex'
export default {
	name: "SoftLeft",
	props: {
    message: {
		 type: String,
		 require: false,
		 default: ""
		},
	},
    data() {
      return {
      	concat:[
          {name:'WECHAT/WHATSAPP',concat:'18605194068'},
          {name:'TE',concat:'+86-18605194068'},
          {name:'W-MAIL',concat:'stone@doingmachine.com'}
      	]
      };
    },
    async mounted() {
      await this.getProductType()
    },
    computed: {
      ...mapState({
        productTypes: state => state.productTypes
      }),
    },
    methods:{
      /*
          获取左侧商品类型
         */
      async getProductType(){
        // let res = await getProductTypeAPI({});
        // if(res.data && res.data.data){
        //   this.productTypes = res.data.data
        //   this.productTypes[0].path = this.productTypes[0].name_en
        //   this.productTypes[1].path = this.productTypes[1].name_en
        //   this.productTypes[2].path = this.productTypes[2].name_en
        //   this.productTypes[3].path = this.productTypes[3].name_en
        //   this.productTypes[4].path = this.productTypes[4].name_en
        //   console.log(this.productTypes,'类型')
        // }
      },
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
