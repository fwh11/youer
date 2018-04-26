<template>
	<div class="mv">
		<div class='banners'>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div slot='swiper-con' class='swiper-slide'>
						<img src='../../assets/tingimg/MV.png' />
					</div>
				</div>
			</div>
		</div>
		<div class='navs'>
			<span :class='{active: nowIndex==0}' @click='nowIndex=0'>
				<router-link to='/kan/mv/neidi'>内地</router-link>
			</span>
			<span @click='nowIndex=1' :class='{active: nowIndex==1}'>
				<router-link to='/kan/mv/oumei'>欧美</router-link>
			</span>
			<span @click='nowIndex=2' :class='{active: nowIndex==2}'>
				<router-link to='/kan/mv/gangtai'>港台</router-link>
			</span>
			<span @click='nowIndex=3' :class='{active: nowIndex==3}'>
				<router-link to='/kan/mv/rihan'>日韩</router-link>
			</span>
			<span @click='nowIndex=4' :class='{active: nowIndex==4}'>
				<router-link to='/kan/mv/qita'>其他</router-link>
			</span>
		</div>
		<hr style="height: 15px;background: #f1f1f1;margin-top: 80px;border: #f1f1f1;" />
		<div class="topse">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {

		},
		data: function() {
			return {
				nowIndex: 0
			}
		},
		methods: {

		}
	}
</script>

<style type="text/css">
.clear:after{
	content: '';
	display: block;
	clear: both;
}
.mv{
	padding-bottom: 100px;
}
	.banners {
		width: 96%;
		height: 290px;
		overflow: hidden;
		z-index: 998;
		position: fixed;
		top: 14%;
		left: 2.1%;
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 20px #d9e8f2;
	}
	
	.banners .swiper-container {
		width: 99%;
		height: 99%;
		margin: 0 auto 0 auto;
		overflow: hidden;
		border-radius: 11px;
	}
	
	.banners .swiper-container .swiper-slide {
		width: 100%;
	}
	
	.banners .swiper-container .swiper-slide img {
		width: 100%;
		border-radius: 10px;
		vertical-align: middle;
		margin-top: 2px;
	}
	
	.navs {
		padding-bottom: 1px;
	}
	
	.navs span {
		display: block;
		width: 20%;
		float: left;
	}
	
	.navs span a {
		color: #CCCCCC;
		font-size: 26px;
		text-decoration: none;
	}
	
	.navs .active a {
		color: #359cf5;
	}
</style>