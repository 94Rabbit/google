<template>
  <div class="tools">
      <ul class="tools-list">
        <li><a href="tel:+86-18605164068" title="+86-18605164068">phone</a></li>
        <li><a href="mailto:stone@doingmachine.com" title="tone@doingmachine.com">email</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=8618605194068" title="wechat">wechat</a></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "Tools"
    }
</script>

<style scoped>
  .tools{
    height:300px;
    width:100px;
    border: 1px solid red;
    position:fixed;
  }
    .tools-list{
      width:300px;
      position:fixed;
      right:0;
      z-index: 999;
    }
    .tools-list li a{
      display: block;
      color:#000;
      text-underline: none;
    }
  @media screen and (max-width: 768px) {
    .tools-list{
      position:fixed;
      bottom:-10px;
      width: 100%;
      list-style:none;
      z-index: 999;
      display: flex;
      background:#eee;
      line-height:4em;
    }
    .tools-list li{
      flex: 1;
      flex-direction: row;
      text-align: center;
      background-color:#fff;
      border:1px solid #ccc;
      box-sizing: border-box;
    }
    .tools-list li a{
      display: block;
      color:#000
    }
  }

</style>
