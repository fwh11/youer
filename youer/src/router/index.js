import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import Cebian from '../pages/cebian/cebian.vue'
import Ting from '../pages/ting/ting.vue'
import Kan from '../pages/kan/kan.vue'
import Chang from '../pages/chang/chang.vue'
import Sousuo from '../pages/sousuo/sousuo.vue'
import Grzx from '../pages/grzxs/grzx.vue'
import Bofang from '../pages/bofang/bofang.vue'
import Fenxiang from '../pages/fenxiang/fenxiang.vue'

/*tingchild*/
import Faxian from '../components/tingchild/faxian'
import Mine from '../components/tingchild/mine'
import Diantai from '../components/tingchild/diantai'
/*fanxianchild*/
import Sirenfm from '../components/tingchild/faxian/sirenfm'
import Gedan from '../components/tingchild/faxian/gedan'
import Meirituijian from '../components/tingchild/faxian/meirituijian'
import Paihang from '../components/tingchild/faxian/paihang'

/*kanchild*/
import Zhibo from '../components/kanchild/zhibo'
import Duanshipin from '../components/kanchild/duanshipin'
import Mv from '../components/kanchild/mv'

/*mvchild*/
import Neidi from '../components/kanchild/mvchild/neidi'
import Oumei from '../components/kanchild/mvchild/oumei'
import Gangtai from '../components/kanchild/mvchild/gangtai'
import Rihan from '../components/kanchild/mvchild/rihan'
import Qita from '../components/kanchild/mvchild/qita'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '',
			name: 'Ting',
			component: Ting,
			children: [{
				path: '',
				name: 'Faxian',
				component: Faxian
			}
			]
		}, {
			path: '/ting',
			name: 'Ting',
			component: Ting,
			children: [{
				path: 'faxian',
				component: Faxian
			}, {
				path: 'mine',
				component: Mine
			}, {
				path: 'diantai',
				component: Diantai
			}]
		}, {
			path: '/kan',
			name: 'Kan',
			component: Kan,
			children: [{
				path: '',
				component: Zhibo
			}, {
				path: 'zhibo',
				component: Zhibo
			}, {
				path: 'duanshipin',
				component: Duanshipin
			}, {
				path: 'mv',
				component: Mv,
				children: [{
					path: '',
					component: Neidi
				}, {
					path: 'neidi',
					component: Neidi
				}, {
					path: 'oumei',
					component: Oumei
				}, {
					path: 'gangtai',
					component: Gangtai
				}, {
					path: 'rihan',
					component: Rihan
				}, {
					path: 'qita',
					component: Qita
				}, ]
			}]
		}, {
			path: '/chang',
			name: 'Chang',
			component: Chang
		},
		/* {
		   path: '/cebian',
		   name: 'Cebian',
		   component: Cebian
		 },*/
		{
			path: '/sousuo',
			name: 'Sousuo',
			component: Sousuo
		}, {
			path: '/grzx',
			name: 'Grzx',
			component: Grzx
		}, {
			path: '/bofang',
			name: 'Bofang',
			component: Bofang
		}, {
			path: '/fenxiang',
			name: 'Fenxiang',
			component: Fenxiang
		}, {
			path: '/sirenfm',
			name: 'Sirenfm',
			component: Sirenfm
		}, {
			path: '/meirituijian',
			name: 'Meirituijian',
			component: Meirituijian
		}, {
			path: '/gedan',
			name: 'Gedan',
			component: Gedan
		}, {
			path: '/paihang',
			name: 'Paihang',
			component: Paihang
		}
	]
})