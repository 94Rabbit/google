@<template>
  <div class="goodsDetail">
<!--    <h2>Product Detail</h2>-->
    <div>
      <div class="picView">
        <div>
          <div class="picWrap" ref="imgWrap">
            <img
              :src="current.img"
              ref="img"
              @mousemove="imgZoom"
              @mouseout="imgReset"
            />
          </div>
          <div class="thumblist" v-if="clentWidth > 990">
            <div
              class="thumb"
              :class="{ active: i === current.index }"
              @mouseover="
                current.img = v;
                current.index = i;
              "
              v-for="(v, i) in pic"
              :key="i"
            >
              <img :src="v" />
            </div>
          </div>
          <div class="shareThis">
            <span>Share to:</span>
            <ul>
              <li
                v-for="(item, index) in shareThis"
                :key="index"
                :class="item"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductDetailAPI } from '@/api'
export default {
  // props:['pic'],
  data() {
    return {
      shareThis: ["facebook", "twitter", "linkedin", "pinterest", "sharet"],
      pic: [],
      productInfo:{},
      // imgs: [
      //   "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSkpqklqlq/640.jpg",
      //   "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSkpqklqlq/640.jpg",
      //   "//5prorwxhmplojik.ldycdn.com/cloud/liBqjKmrRinSkpqkmqlp/640.jpg",
      //   "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSkpqklqlq/640.jpg",
      //   "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSkpqklqlq/640.jpg",
      //   "//5prorwxhmplojik.ldycdn.com/cloud/liBqjKmrRinSkpqkmqlp/640.jpg"
      // ],
      current: {
        img: "",
        index: 0
      },
      quantity: 0,
      clentWidth: 0
    };
  },
  async mounted() {
    await this.getProductDetail()
    this.current = {
      img: this.pic[0],
      index: 0
    };
    window.addEventListener("resize", this.windowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  },
  methods: {
    imgZoom(e) {
      const { offsetX, offsetY } = e;

      this.$refs.img.style.transformOrigin = `${offsetX / 4}% ${offsetY / 4}%`;
      this.$refs.img.style.transform = "scale(1.8)";
    },
    imgReset() {
      this.$refs.img.style.transform = "scale(1)";
      this.$refs.img.style.transformOrigin = "center";
    },
    windowResize() {
      this.clentWidth = document.body.clientWidth;
    },
    /*
     获取商品图片
    */
    async  getProductDetail(){
      let res = await getProductDetailAPI(this.$route.query.id);
      if(res.data && res.data.data){
        this.productInfo = res.data.data
        this.pic = res.data.data.pic
      }
    },
  }
};
</script>

<style lang="less">
.goodsDetail {
  border-bottom: 1px solid #dfdfdf;
  h2 {
    font-family: Open Sans;
    font-size: 24px;
    color: #333;
    letter-spacing: 0;
    line-height: 52px;
    text-align: left;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }
  & > div {
    display: flex;

    & > div:first-child {
      flex: 58;
    }
    & > div:last-child {
      flex: 42;
    }
    .deal {
      & > h4 {
        font-family: Open Sans;
        font-size: 18px;
        font-weight: normal;
        line-height: 27px;
        color: #545454;
        letter-spacing: 0;
        margin-bottom: 5px;
      }
      & > p {
        margin-bottom: 5px;
        line-height: 19.6px;
        font-family: Open Sans;
        margin-bottom: 10px;
      }

      & > .count {
        display: flex;
        & > span {
          padding: 3px 0;
          min-width: 100px;
          max-width: 40%;
          width: 5px;
        }
        & > div {
          display: flex;
          align-items: center;
          .sub,
          .add {
            width: 25px;
            height: 25px;
            border: 1px solid #adadad;
          }
          input {
            width: 40px;
            height: 25px;
            border: 1px solid #adadad;
            margin: 0 4px;
            text-align: center;
          }
          .sub {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMTEwNkIxRDBBRDFFNDExQTZCQ0ZBQ0U0ODczRTlGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRTdDODczRkQxMEUxMUU0QUFBM0UxMzU1RTJCMDVGNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRTdDODczRUQxMEUxMUU0QUFBM0UxMzU1RTJCMDVGNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMxMTA2QjFEMEFEMUU0MTFBNkJDRkFDRTQ4NzNFOUY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMxMTA2QjFEMEFEMUU0MTFBNkJDRkFDRTQ4NzNFOUY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+htVHtgAAAE1JREFUeNpi/P//PwMlgImBQjBqAAMDC4gwMTGRAFIcIPaZM2ceENIEVK8AZT5jgTJWALE9VJIUBxjCDFgDxBfI8MFrxtGENBwMAAgwAMGrD9xuXht6AAAAAElFTkSuQmCC)
              no-repeat center !important;
          }
          .add {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMTEwNkIxRDBBRDFFNDExQTZCQ0ZBQ0U0ODczRTlGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0REFBOEE1QkQxMEUxMUU0OUU0QjhGRTg2NkZDNDgzMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0REFBOEE1QUQxMEUxMUU0OUU0QjhGRTg2NkZDNDgzMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMxMTA2QjFEMEFEMUU0MTFBNkJDRkFDRTQ4NzNFOUY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMxMTA2QjFEMEFEMUU0MTFBNkJDRkFDRTQ4NzNFOUY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cTbPHAAAAIlJREFUeNpi/P//PwMuYGJiwg+kOIH41ZkzZ/5hU8PEgB/MBOLnQCyGSwEhAwiCYWAACzS0JYAUBxZ5bigtC1SDTf4ZC5SxAojt8Vh0Coe4IcyANUB8AYsCTyBWA+LZQPwNi/xrRgIJCeSycCCWBCakF6PpAE86wAM2AvEDIP6CSwHeWCAGAAQYABnvH++S98utAAAAAElFTkSuQmCC)
              no-repeat center !important;
          }
        }
      }
      & > .btns {
        margin-top: 20px;
        .inquire {
          color: #ab0000;
          background-color: #ffeded;
          border: 1px solid #c40000;
          line-height: 38px;
          height: 38px;
          padding: 0 30px;
          font-size: 16px;
          cursor: pointer;
          display: block;
          margin: 0 10px 10px 0;
        }
        .addToBasket {
          padding: 0 30px;
          padding-left: 60px;
          line-height: 40px;
          height: 40px;
          color: #fff;
          font-size: 16px;
          border-radius: 0;
          border: 0;
          width: auto;
          text-decoration: none;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoCAYAAADpE0oSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU5NTQ0MjkzMEU3MTFFNTk2MUVFRUUzRTc1MDlEMzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU5NTQ0MkEzMEU3MTFFNTk2MUVFRUUzRTc1MDlEMzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTk1NDQyNzMwRTcxMUU1OTYxRUVFRTNFNzUwOUQzNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTk1NDQyODMwRTcxMUU1OTYxRUVFRTNFNzUwOUQzNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpCwdAAAAAGfSURBVHja7Ne/SwJhHMdxLxAJAnEIot+1VaP/Qm0NBkK0NFQE0V40hEM0tPkH5NogNQVtQVAULUYQRNEPsIKyrShs0Ov9wFd4errTOwgkeL7wwsc77/mc3/N81HFdN9KMaok0qWywDbbBNvh/Bm/hQOxjNMTxnXL8B6o4QyrIgQ6LRIbHhDxP4xJj6BKvKMnkesVxjj68oAO1FWcS+brJanXSZFBFN1bcn1XGIwoYxpKxP6KNb4x5fzE3DMqByxhw/asfOS3Q5DYKNj9cdzjCNO5l7FU9uKo1TWtxbXzb8CJ7nM28nHFSG5u1iQSKPq2eCttqJS7XMyuTf3kEV5BCL3bk9aoukG4U6hes5FFCVCZ2fcLX0Q51d8SCBNY4Pr+5xrErj2/YRsznaqn79xrvWJRxoPvYa3sUTzjEbIB5KhIcvOq0I+uGq4m/aLWqNiRVV4KcP05RDvqGnQC/qxcwgg08aNtbsSqha2FCG7VaGdJamTP2zWn7ZsK02euby6wiCvjEnrHvWBaHZ5yEXRYd+xfGBttgG2yDbbBffQswAK2bB5AoA4qsAAAAAElFTkSuQmCC)
            no-repeat 30px 0;
          background-color: #ab0000;
          cursor: pointer;
        }
      }
    }
    .picView {
      .picWrap {
        /*width: 400px;*/
        height: 400px;
        border: 1px solid #ddd;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: auto;
          cursor: crosshair;
        }
      }
      .thumblist {
        display: flex;
        width: 100%;
        margin-top: 14px;
        .thumb {
          width: 60px;
          height: 60px;
          border: 1px solid #ddd;
          cursor: pointer;
          position: relative;
          &::after {
            content: "";
            width: 11px;
            height: 6px;
            position: absolute;
            top: -6px;
            left: 50%;
            margin-left: -3px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABOFBMVEUAAADJycmzs7Pk5OT7+/vAwMDAwMDb29v////29vbu7u7MzMyzs7Pu7u7MzMyzs7Ozs7P////u7u74+Pj4+Pj4+Pju7u7MzMzu7u7MzMzu7u7MzMyzs7Pu7u7MzMzu7u7MzMyzs7Pu7u7MzMyzs7Pu7u7MzMyzs7Ozs7Py8vLMzMyzs7PAwMDAwMD39/f////19fX////////////u7u7MzMyzs7Ozs7Ozs7PEAAD////EAAD////////y8vLy8vL////u7u7MzMzu7u7MzMyzs7PMzMyzs7Pu7u7MzMyzs7PMzMyzs7P////u7u7MzMyzs7Pu7u7MzMz////MzMzMzMzMzMzMzMz+mwr+mwr+mwrEAAD+mwr+mwrEAAD+mwrEAAD+mwru7u7MzMz///+zs7P+mwrEAAAPu6e3AAAAYnRSTlMABfgIEBwUDD8b+Pjt2NjYzec9hlEp8fHs7N/f38/Pvr6+lZWVdXV1PTExMSkjIvCl+MqqgYGBXU4PvriRZUkV2cfHtLS0q6ugoKCKindqamphYVVVS0E6DLzS0rGfn4eHFuy+iXYAAANfSURBVHja7Nl3T9tAGAbwxyEQwnYGG9pCB11pBrQQwuhi773H+94l3/8bVAZHjjkfsishxVF+/+S19CjyK5/P5zPC5f78Ho3g7KJ8cYbwOzsvl8vnDdDJVdlyhbC7Lj+6Rrjdlqtu0dTU1ODm5ufQCOYuK5e6TgrFYnHROYwXciKfQn2am69UKrprkiyVzCLiiUwMAKKmMCHEIerSfMUyD52kiG8LIXJmPm39Qohl+NPWM25X4z1tz+V6++yqr/e5XLR7zK7GuqN46qby6AYaGbGdEQ8yWQGLgD8rPGJXI7wCvVU5alejchV6WRq2q2HK4om7StUdNPLLyAtLe7ArcsB8YpcnzAfQ+SHllF1OSfkDOvtECbtMEO0jsAWRWBCWbNQUwvc98nWAN1G1yQNfdbmI3ELVlozocpl+SqIqSf0ZBBXNlaI5YUlZs9ayvz6MXzxuOEfj/MvwzvXJPkM9UnM/aawmN0Y/DQRVMI2CeJBcQgv8meHOL3B86eQZePkuI65cRH6Hl2nqSMOR7qBpBJUSqXbz26N8MQ0/Tpl3UWuX+RSqqYjcQ609GZmCKkG0g1o7RAkEZJiFaFUMvsRG+A/c/vBITM2Nyr9w+ytHPXLD9Btuv2k4hoBKwpGCH+s81Aa3tiFeV3IbskvJdckNJbdGg0twWxqkNQQUa3e0wIcj5mM8dcx8pM68s0puVp2DU0SLSm6RKIWgFkpxAC3JpK8+Wod4EqpJHmp157rkW6jeyi53Lj5IE1BN0GAcwaSFyFrtCLEAH15zj1fDLT38GrXeyF4DKqNXvkGtV9Tt+X/d9ArBxPK5Q6sf0/QzZ73nzk/w8qmT38PxQUY+w8vniPwAxzvq+AgvHzvoHV6Eerpqi7rThdKi5nSVFl+COoDUQacZQMqg0wwgddC9kEkeaIVO6wBPam5p3TQwQf1x6MT7aQIvhHkGejPMduWsRTQrF7simobeNBGqmlekwe+Rhpm1Guc5Us9P9hrhXmv5E3z1O6tZ/c4GX/0GF+b3kVqhfkN0C+87u1uId1GeCu2+liKkO42qkO79qupxN/6/1OX3kaampn/swYEAAAAAAJD/ayOoqqqqqqqqqqqqtAeHBAAAAACC/r/2hBEAAAAAAAAAAAAAAAAAAAAAAAAA4BY4S+QC5jdjnwAAAABJRU5ErkJggg==)
              no-repeat;
          }
          &.active {
            border: 1px solid #c40000;
            &::after {
              background-position: -170px -10px;
            }
          }
          & + .thumb {
            margin-left: 7px;
          }
          img {
            width: 100%;
          }
        }
      }
      .shareThis {
        display: flex;
        align-items: center;
        margin: 10px 0;
        ul {
          display: flex;
        }
        li {
          width: 16px;
          height: 16px;
          margin-left: 4px;
          background-size: 100%;
        }
        .facebook {
          background-image: url(https://ws.sharethis.com/images/2017/facebook_16.png);
        }
        .twitter {
          background-image: url(https://ws.sharethis.com/images/2017/twitter_16.png);
        }
        .linkedin {
          background-image: url(https://ws.sharethis.com/images/2017/linkedin_16.png);
        }

        .pinterest {
          background-image: url(https://ws.sharethis.com/images/2017/pinterest_16.png);
        }
        .sharet {
          background-image: url(https://ws.sharethis.com/images/2017/sharethis_16.png);
        }
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
@media (max-width: 569px) {
  .goodsDetail {
    & > div {
      flex-wrap: wrap;

      & > div:first-child {
        flex: 1;
      }

      & > div:last-child {
        flex: 1;
      }

      .picView {
        margin: 0 auto;
      }
    }
  }
}
</style>
