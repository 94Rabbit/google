// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
/* 路由 */
import router from './router'

/* 导入字体库 */
// import "./assets/style/font-awesome.css";
import "./assets/fonts/style.css";

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'



/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)

/* 尾部组件 */
// import Footer from './components/Footer'
// Vue.component(Footer.name,Footer)

/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

/* Tips组件 */
import Tips from './components/Tips'
Vue.component(Tips.name, Tips)

/* 动态面包屑 */
import Bread from './components/Bread'
Vue.component(Bread.name,Bread)

/* 侧边栏 */


/* 工具组建 */
import Tools from './components/Tools'

import VeeValidate,{ Validator } from 'vee-validate'

Vue.component(Tools.name,Tools)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
});
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
