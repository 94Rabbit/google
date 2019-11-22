<template>
    <div>
        <div class="container">
		 <div class="container-fuild software-box">
		 	<div class="row">
                 <div class="col-xs-12 col-sm-8 col-md-9">
                     <div class="list-table">
                         <table class="table">
                             <thead>
                                 <tr>
                                     <td>Product Picture</td>
                                     <td>Product Name</td>
                                     <td>Quantity</td>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr v-for="(item,index) in list" :key="index">
                                     <td height="135" style="textAlign:center"><a href="##"><img :src="item.pic"></a></td>
                                     <td><a href="##">{{item.name_name}}</a></td>
                                     <td><input type="number" class="form-control" :value="item.num" disabled></td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                     <div class="row form-style">
                         <form class="form-inline" ref="form" id="formSubmit">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group">
                                  <input type="text" class="form-control" v-model="orderInfo.name" v-validate="'required'" name="name" placeholder="*Name">
                                  <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group">
                                <input type="email" class="form-control" v-model="orderInfo.email" v-validate ="'required|email'" name="email" placeholder="*E-mail">
                                <span v-show="errors.has('email')" class="help">{{ errors.first('email') }}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group">
                                <input type="text" class="form-control" name="company" v-model="orderInfo.company"  placeholder="Company Name">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group">
                                <input type="tel" class="form-control" name="tel" v-model="orderInfo.cell" placeholder="Tel">
                                </div>
                            </div>
                             <div class="col-xs-12 col-sm-12 col-md-12">
                                 <div class="form-group" style="height:auto;padding-bottom:10px">
                                 <textarea name="message" class="form-control" cols="30" v-validate="'required'" v-model="orderInfo.message" rows="5" placeholder="*Message"></textarea>
                                 <span v-show="errors.has('message')" class="help">{{ errors.first('message') }}</span>
                                 </div>
                             </div>
<!--                             <div class="col-xs-12 col-sm-12 col-md-12">-->
<!--                                 <div class="form-group code">-->
<!--                                    <input type="text" name="code" class="form-control" v-validate="'required'" v-model="code" placeholder="*Verify Code">-->
<!--                                    <span v-show="errors.has('code')" class="help">{{ errors.first('code') }}</span>-->
<!--                                </div>-->
<!--                                <div class="form-group" style="width:60%;height:30px;vertical-align: top;">-->
<!--                                    <a href="###"><img src="@/assets/img/code.png" alt=""></a>-->
<!--                                </div>-->
<!--                             </div>-->
                             <div class="col-xs-12 col-sm-12 col-md-12">
                                 <p><button type="button" class="btn btn-primary" @click="submits">Submit</button></p>
                             </div>
                            </form>
                     </div>
		 		</div>
		 		<div class="col-xs-12 col-sm-4 col-md-3">
                     <soft-left message='1'></soft-left>
		 		</div>
                  <div class="col-xs-12 col-sm-12 col-md-12">
                         <h3>You May Also Be Interested</h3>
                         <hr/>
                  </div>
                  <p>&nbsp;</p>
		 	</div>
		 </div>
        </div>
    </div>
</template>
<script>
import SoftLeft from "@/components/SoftLeft"
import { postOrderAPI } from '@/api'
export default {
  name: "inquire",
  components: {
      "soft-left": SoftLeft,
    },
  data() {
      return {
        list:[],
        orderInfo:{
          production: [],
          name: '',
          email: '',
          company: '',
          cell:'',
          message: ''
        }
      }
  },
  mounted(){
      let isCart = this.$route.query.isCart
      this.list = isCart ? this.$store.getters.getCartList : [this.$route.query.product]
  },
  methods:{
     //  submits(){
     //      console.log(this.$validator.validateAll())
     //     this.$validator.validateAll().then((res) => {
     //        if(res) {
     //            a
     //        } else {
     //            return;
     //        }
     //        }).catch(() => {
     //        alert('Correct them errors!');
     //    });
     // }
      async submits(){
        let products = []
        this.list.forEach(item=>{
          products.push({
            id:item.id,
            num:item.num
          })
        })
        this.orderInfo.production = products
        let res = await postOrderAPI(this.orderInfo)
        alert(res.data.msg)
      }
  }
}
</script>
 <style lang="scss" scoped>
 .list-table {
     margin-top: 30px;
     table {
         border: 1px solid #ccc;
         color: #545454;
         thead {
             tr {
                 td {
                      border:1px solid rgb(221, 221, 221);
                      background-color: #f3f3f3;
                 }
             }
         }
         tbody {
             tr {
                td {
                    height: 135px;
                    line-height: 135px;
                    vertical-align: middle;
                    font-size: 14px;
                    border:1px solid rgb(221, 221, 221);
                    a {
                        color: #545454;
                        &:hover {
                            color: #0079c3;
                        }
                    }
                    img {
                        height: 100%;
                        max-height: 150px;
                        display: inline-block;
                    }
                    input {
                        width: 60%;
                        // vertical-align: middle;
                        // height: 30px;
                    }

                }
            }
         }
     }
 }
 .help {
     font-family: Open Sans;
     width: 100%;
     line-height: 20px;
     background:#c00;
     color: #fff;
     display: inline-block;
     font-size: 12px;
     text-align: center;
 }
 .form-style {
     .form-group {
         width: 100%;
         height: 60px;
         overflow: hidden;
         input {
             width: 100%;
         }
         textarea {
             width: 100%;
         }
     }
 }
 .code {
     width: 30% !important;
 }
 @media screen and (max-width: 997px) {
     .code {
         width: 100% !important;
         height: 50px !important;
         margin-bottom: 0 !important;
     }
     .list-table {
         td {
            line-height: 20px !important;
        }
     }
    .form-style {
       .form-group {
           height: 50px !important;
       }
     }
 }
 </style>
