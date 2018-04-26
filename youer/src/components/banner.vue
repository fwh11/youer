<template>
	<div class='banner'>
		<div class='swiper-container' :class='swiperid'>
			<div class='swiper-wrapper'>
					<slot name='swiper-con'></slot>
			</div>
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
		</div>
	</div>
</template>

<script>
	import '../assets/libs/swiper/js/swiper.js'
	export default {
		props: {
			swiperid: {
				type: String,
				default: ''
			},
			paginationshow: {
				type: Boolean,
				default: true
			},
			paginationdesition: {
				type: String,
				default: 'center'
			},
			paginationType: {
				type: String,
				default: 'bullets'
			},
			autoplay: {
				type: Number,
				default: 2000
			},
			loop: {
				type: Boolean,
				default: true
			},
			direction: {
				type: String,
				default: 'horizontal'
			},
			effect: {
				type: String,
				default: 'slide'
			}
		},
		mounted: function(){
			var That = this;
			new Swiper('.'+That.swiperid, {
				direction: That.direction,
				loop: That.loop,
				pagination: '.swiper-pagination',
				paginationType: That.paginationType,
				autoplay: That.autoplay,
				effect:That.effect
			})
		}
	}
</script>

<style>
@import '../assets/libs/swiper/css/swiper.css';

.banner {
	width: 96%;
	 height: 305px;
	 overflow: hidden;
	 z-index: 998;
	 position:fixed;
	 top: 14%;
	 left: 2.1%;
	 /*margin-left: -175px;*/
	 background: white;
	 border-radius: 10px;
	 box-shadow: 0 5px 20px #d9e8f2;
 }
.banner  .swiper-container{
	width: 100%;
	height: 99%;
	 margin: 0 auto 0 auto;
	overflow: hidden;
	 border-radius: 11px;
}
.banner  .swiper-container .swiper-slide{
	width: 100%;
}
.banner  .swiper-container .swiper-slide img {width: 100%;vertical-align: middle;margin-top:2px;}
.swiper-pagination-bullet{background: #9fbfdf;}
.swiper-pagination-bullet-active {background: #3d9df2;}

</style>