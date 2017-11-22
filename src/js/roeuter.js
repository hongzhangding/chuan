import VueRouter from 'vue-router'


import home  from  '../component/home.vue'
import news  from  '../component/news.vue'

export default new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/news',component:news},
		{path: '*',redirect: '/home'}
	]

})
