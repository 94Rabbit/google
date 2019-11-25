<template>
  <div class="contact">

<!--    <zjw-crumbs></zjw-crumbs>-->
    <div class="info">
      <div class="top container">
        <p>CONTACT DOING MACHINE</p>
        <div class="dec">
          <p>Your reliable machinery supplier from China.</p>
        </div>
      </div>

      <div class="itemList container">
        <div class="item col-md-4">
          <div class="itemTop">
            <img src="//5ororwxhmplorik.ldycdn.com/cloud/orBqjKmrRinSjljljrlo/whatsapp.png" alt />
          </div>

          <div class="itemDec">
            WHATSAPP
            <br />18605194068
          </div>
        </div>

        <div class="item col-md-4">
          <div class="itemTop">
            <img src="//5qrorwxhmploiik.ldycdn.com/cloud/omBqjKmrRinSjljlirln/dianhua.png" alt />
          </div>
          <div class="itemDec">
            PHONE
            <br />+86-18605194068
          </div>
        </div>

        <div class="item col-md-4">
          <div class="itemTop">
            <img src="//5prorwxhmplojik.ldycdn.com/cloud/oiBqjKmrRinSjljlkrlo/xinfeng.png" alt />
          </div>
          <div class="itemDec">
            E-MAIL
            <br />stone@doingmachine.com
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="container">
          <div class="feedback col-md-6">
            <h2>Feedback</h2>
            <div class="table">
              <div class="email">
                <input type="text" placeholder="*Email" v-model="feedBackInfo.email"/>
              </div>
              <div class="name">
                <input type="text" placeholder="*name" v-model="feedBackInfo.name"/>
              </div>
              <div class="message">
                <textarea name id cols="30" rows="10" placeholder="*Message" v-model="feedBackInfo.message"></textarea>
              </div>
              <div class="button" @click="feedBack">submit</div>
            </div>
          </div>
          <div class="map col-md-6">
            <img src="../../assets/img/map.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { feedbackAPI } from '@/api'
export default {
  data() {
    return {
      curren_id: 4,
      feedBackInfo:{
        name:'',
        email:'',
        message:'',
        production_id:0
      },
    };
  },
  mounted(){
    this.feedBackInfo.production_id = this.$route.query.id ? this.$route.query.id: 0
  },
  methods: {
    async feedBack(){
      let res = await feedbackAPI(this.feedBackInfo);
      if(res.data && res.data.msg==='success'){
        alert('send successfully')
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";

.contact {
  .info {
    margin-top: 60px;
    .top {
      text-align: center;
      p {
        font-size: 30px;
        color: #545454;
      }
      .dec {
        margin-top: 16px;
        p {
          font-family: Open Sans;
          font-size: 14px;
          color: #545454;
          letter-spacing: 0;
          line-height: 1.7em;
        }
      }
    }
  }

  .itemList {
    margin-top: 82px;
    display: flex;
    .item {
      padding: 10px 0;
      .itemTop {
        .zjw-center;
      }
      .itemDec {
        color: #000000;
        text-align: center;
        font-family: Open Sans;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 1.7em;
      }
    }
  }

  .bottom {
    margin-top: 108px;
    .container {
      display: flex;
      .feedback,
      .map {
        padding: 10px 0;
        margin: 0 10px;
      }
      .feedback {
        h2 {
          font-family: Open Sans;
          font-size: 24px;
          color: #333;
          letter-spacing: 0;
          line-height: 1.8em;
          text-align: left;
        }
        .table {
          margin-top: 10px;
          background-position: left top;
          background-repeat: repeat;
          background-attachment: scroll;
          font-family: Open Sans;
          font-size: 14px;
          color: #545454;
          letter-spacing: 0;
          line-height: 1.7em;
          text-align: left;
          .email,
          .name {
            margin-bottom: 16px;
            width: 50%;
            float: left;
            font-size: 14px;
            color: #545454;
            letter-spacing: 0;
            line-height: 1.7em;
            padding: 0 10px;
            box-sizing: border-box;
            input {
              height: 20px !important;
              width: 100%;
              padding: 4px 0;
              text-indent: 6px;
              box-sizing: content-box;
              border-radius: 0;
              background-color: #fff;
              border: 1px solid #ccc;
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
            }
          }
          .message {
            margin-bottom: 16px;
            padding: 0 10px;
            textarea {
              width: 100%;
              padding: 4px 0;
              text-indent: 6px;
              box-sizing: content-box;
              background-color: #fff;
              border: 1px solid #ccc;
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
              color: #555;
              display: inline-block;
              line-height: 20px;
              height: 80px;
              resize: none;
            }
          }
          .button {
            margin-left: 10px;
            .zjw-center;
            border: 1px solid red;
            border-radius: 4px;
            background: red;
            color: #fff;
            font-size: 14px;
            width: 102px;
            height: 30px;
            cursor: pointer;
          }
        }
      }

      .map {
      }
    }
  }
}

@media (min-width: 990px) {
}
@media (max-width: 989px) and (min-width: 768px) {
  .contact .bottom .container .feedback {
    padding: 5px 0 !important;
    margin: 0 5px !important;
  }
  .contact .bottom .container .feedback .table .message,
  .contact .bottom .container .feedback .table .email,
  .contact .bottom .container .feedback .table .name,
  .contact .bottom .container .feedback .table .button {
    padding: 5px 0 !important;
  }
  .contact {
    .info {
    }

    .itemList {
      display: block;
      .item {
        padding: 5px 0;
      }
    }

    .bottom {
      .container {
        display: block;
        .map {
          padding: 5px 0;
          margin: 0 5px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) and (min-width: 1px) {
  .contact .bottom .container .feedback {
    padding: 5px 0 !important;
    margin: 0 5px !important;
  }
  .contact .bottom .container .feedback .table .message,
  .contact .bottom .container .feedback .table .email,
  .contact .bottom .container .feedback .table .name,
  .contact .bottom .container .feedback .table .button {
    padding: 5px 0 !important;
  }
  .contact {
    .info {
    }

    .itemList {
      display: block;
      .item {
        padding: 5px 0;
      }
    }

    .bottom {
      .container {
        display: block;
        .map {
          padding: 5px 0;
          margin: 0 5px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>>

