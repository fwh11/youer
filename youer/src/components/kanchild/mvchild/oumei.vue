<template>
	<div class="oumei">
		<div class="one">
			<div>
				<p>Reloaded l</p>
				<img src="../../../assets/tingimg/MVxian.png" />
				<p>富有磁性，有活力的声音，让人随着音乐活跃起来。 </p>
				<img src="../../../assets/tingimg/MVxian.png" />
			</div>
			<img src="../../../assets/tingimg/MVlanxian.png" class="lanxian" />
			<div>
				<p><img src="../../../assets/tingimg/xin.png" /><span>137 万</span></p>
				<p><img src="../../../assets/tingimg/zan.png" /><span>4 3 万</span></p>
			</div>
		</div>
		<hr style="height: 15px;background: #f1f1f1;margin-top: 2px;border: #f1f1f1;" />
		<div class='bannersew'>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div slot='swiper-con' class='swiper-slide'>
						<img src='../../../assets/tingimg/mvtu.png' />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.oumei .one {
		height: 180px;
		margin-top: 40px;
	}
	
	.oumei .one div {
		float: left;
		text-align: center;
	}
	
	.oumei .one .lanxian {
		float: left;
		height: 130px;
		margin-top: 5px;
		margin-left: 50px;
	}
	
	.oumei .one div:nth-of-type(1) {
		width: 64%;
		margin-left: 20px;
	}
	
	.oumei .one div:nth-of-type(1) img {
		width: 100%;
	}
	
	.oumei .one div:nth-of-type(1) p:nth-of-type(1) {
		font: 24px "微软雅黑";
		color: #737373;
	}
	
	.oumei .one div:nth-of-type(1) p:nth-of-type(2) {
		padding: 15px 0;
		font: 20px "微软雅黑";
		color: #737373;
	}
	
	.oumei .one div:nth-of-type(2) {
		width: 25%;
	}
	
	.oumei .one div:nth-of-type(2) p {
		line-height: 55px;
		text-align: left;
		margin-left: 50px;
	}
	
	.oumei .one div:nth-of-type(2) p:nth-of-type(1) {
		margin-top: 15px;
	}
	
	.oumei .one div:nth-of-type(2) p img {
		vertical-align: middle;
		width: 25px;
		margin-right: 10px;
	}
	
	.oumei .one div:nth-of-type(2) p span {
		font: 20px "微软雅黑";
		color: #CCCCCC;
	}
	
	.bannersew {
		margin-top: 15px;
		margin-left: 2%;
		width: 96%;
		overflow: hidden;
		z-index: 998;
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 20px #d9e8f2;
	}
	
	.bannersew .swiper-container {
		width: 99%;
		height: 99%;
		margin: 0 auto 0 auto;
		overflow: hidden;
		border-radius: 11px;
	}
	
	.bannersew .swiper-container .swiper-slide {
		width: 100%;
	}
	
	.bannersew .swiper-container .swiper-slide img {
		width: 100%;
		border-radius: 10px;
		vertical-align: middle;
		margin-top: 2px;
	}
</style>