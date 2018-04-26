<template>
<div>
	<div>
		
		<!--<Myheader></Myheader>-->

		<router-link to="/home">
			<div  class="ppp" id="box" v-if="bol">
				<button>跳过</button>
				</div>
		</router-link>
	</div>
	<Home></Home>
</div>
</template>

<script>
	import Myheader from '../../components/header'
	import Home from '../Home/home.vue'
	
	export default{
		components:{
			Myheader,
			Home
		},
		data: function(){
			return {
				bol: true
			}
		},
		mounted: function(){
			var That=this;
			setTimeout(function(){
				That.bol=false;
			},3000)
		}
	
	}
	
</script>

<style>
	.ppp{
		width: 100%;
		height: 100%;
		background: url(../../assets/img/hui.png);
		background-size: 100%;
		position: absolute;
		top: 0;
		z-index: 999;
		
	}
	.ppp button{
		background: rgba(0,0,0,0.3);
		display: inline-block;
		border-radius: 20px;
		width: 50px;
		height: 26px;
		border: 1px solid transparent;
		position: absolute;
		right: 3px;
		top: 10px;
		color: white;
	}
</style>