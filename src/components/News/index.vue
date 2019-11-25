<template>
  <div class="container">
    <div class="container-fuild software-box">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-3">
          <div class="software-l-o">
            <h4>NEWS</h4>
            <ul>
              <li v-for="(item,index) in newsType" :key="index" @click="changType(item)" style="cursor:pointer">{{item.name_en}}</li>
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
          <NewList :title="new_title" :newList="newlist"></NewList>
        </div>
        </div>
      </div>
  </div>
</template>
<script>
  import  NewList  from '@/components/News/NewsList'
  import { getNewListAPI, getNewsTypesAPI } from '@/api'
  export default {
    name: "SoftWare",
    components: {
      NewList,
    },
    data() {
      return {
        type: 1, // 默认新闻类型
        new_title: '',
        newlist:[],
        newsType:[
          {name:'COMPANY NEWS', type:1},
          {name:'INDUSTRY NEWS', type:2}
        ],
        concat:[
          {name:'WECHAT/WHATSAPP',concat:'13341624188'},
          {name:'TE',concat:'+86-13341624188'},
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
      // console.log(this.$route.query.proId)
      this.init();
    },
    methods:{
      async init(){
          this.getNews(this.type)
          this.getNewTypes()
      },
      /*
      获取新闻类型列表
       */
      async getNewTypes(){
        let res = await getNewsTypesAPI();
        if(res && res.data && res.data.data){
          this.newsType = res.data.data
        }
      },
      async getNews(_type){
        let res = await getNewListAPI({type:_type});
        this.newlist = res.data.data;
        if(_type===1){
          this.new_title = 'COMPANY NEWS'
        }else{
          this.new_title = 'INDUSTRY NEWS'
        }
      },
      async changType(_item){
        this.type = _item.id
        this.getNews(this.type)
      }
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
