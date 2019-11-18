<template>
    <div>
      <p class="new-list">{{title}}</p>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="item in newList">
          <div class="thumbnail">
            <img :src="item.pic" alt="">
            <div class="caption">
              <h3 class="new-title">{{item.title_en}}</h3>
              <p class="new-content">{{item.abstract}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Newlist",
        props:['title','newList'],
        data:()=>{
          return {

          }
        },
        mounted() {
          this.getNewList()
        },
        methods:{
          async getNewList(){
              console.log(this.newList, 2222)
          }
        }
    }
</script>

<style scoped>
  .new-list{
    font-family: Open Sans;
    font-size: 24px;
    color: #333;
    letter-spacing: 0;
    line-height: 1.8em;
    text-align: left;
    display: block;
    border-left: 0 solid #000;
    border-right: 0 solid #000;
    border-top: 0 solid #000;
    border-bottom: 1px solid #000;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 20px;
    margin-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 10px;
    padding-left: 0;
  }
  .new-title, .new-content{
    overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    font-size: 30px;
  }
</style>
