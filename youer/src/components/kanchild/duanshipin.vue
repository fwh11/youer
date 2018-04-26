<template>
	<div class="duanshipin">
		<div class='banners clear'>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div slot='swiper-con' class='swiper-slide'>
						<img src='../../assets/tingimg/duanshipin.png' />
					</div>
				</div>
			</div>
		</div>
		<div class="one clear">
			<table>
				<tr>
					<td>
						<img src="../../assets/tingimg/ds1.png" /><br />
						<span>本地</span>
					</td>
					<td>
						<img src="../../assets/tingimg/ds2.png" /><br />
						<span>好声音</span>
					</td>
					<td>
						<img src="../../assets/tingimg/ds3.png" /><br />
						<span>话题</span>
					</td>
					<td>
						<img src="../../assets/tingimg/ds4.png" /><br />
						<span>关注</span>
					</td>
				</tr>
			</table>
		</div>
		<hr style="height: 15px;background: #f1f1f1;margin-top: 22px;border: #f1f1f1;" />
		<div class="two clear">
			<div class="two_1">
				<img src="../../assets/tingimg/ds01.png" class="two_img" />
				<p>看看本地的精彩视频</p>
				<span>最近跟新50个视频 </span>
				<div class="floleft">▶</div>
			</div>
			<div class="two_2">
				<img src="../../assets/tingimg/ds02.png" class="two_img" />
				<p>网红冰淇淋</p>
				<span>
					<a><img src="../../assets/tingimg/dianzan.png"/> 627</a>
					<a><img src="../../assets/tingimg/bofan.png"/> 1826</a>
				</span>
				<div class="floright">
					<img src="../../assets/tingimg/02.png" />
					<span>九星里 i</span>
				</div>
			</div>
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
	.duanshipin {
	padding-bottom: 100px;
		width: 100%;
	}
	
	.banners {
		width: 96%;
		height: 290px;
		overflow: hidden;
		z-index: 998;
		position: fixed;
		top: 15%;
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
	
	.duanshipin .one {
		width: 100%;
		padding-bottom: 26px;
	}
	
	.duanshipin .one table {
		width: 100%;
	}
	
	.duanshipin .one table tr {
		width: 80%;
		margin: 0 auto;
	}
	
	.duanshipin .one table tr td {
		width: 25%;
	}
	
	
	.duanshipin .one table tr td span {
		display: inline-block;
		color: #000000;
		font-size: 26px;
		margin-top: 8px;
	}
	
	.duanshipin .two {
		width: 100%;
		margin-top: 30px;
	}
	
	.duanshipin .two div {
		width: 46%;
		float: left;
		margin-left: 2.7%;
		background: white;
		box-shadow: 0 10px 30px #CCCCCC;
		border-radius: 10px;
	}
	
	.duanshipin .two .two_img {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 30px #CCCCCC;
	}
	
	.duanshipin .two div p {
		font: 24px "微软雅黑";
		color: black;
		text-align: left;
		margin: 4px 8px;
	}
	
	.duanshipin .two div span {
		font: 20px "微软雅黑";
		width: 100%;
		display: inline-block;
		margin: auto 8px auto 10px;
		padding-bottom: 10px;
		text-align: left;
	}
	
	.duanshipin .two div span a {
		margin-right: 15px;
	}
	
	.duanshipin .two div span a img {
		width: 20px;
	}
	
	.duanshipin .two .two_1 {
		position: relative;
	}
	
	.duanshipin .two .two_1 .floleft {
		width: 100px;
		height: 100px;
		font: 50px/100px "微软雅黑";
		position: absolute;
		top: 28%;
		left: 50%;
		margin-left: -50px;
		color: white;
		background: rgba(0, 0, 0, 0.42);
		box-shadow: none;
	}
	
	.duanshipin .two .two_2 {
		position: relative;
	}
	
	.duanshipin .two .two_2 .floright {
		width: 80%;
		position: absolute;
		bottom: 22%;
		left: 10px;
		background: none;
		box-shadow: none;
		text-align: left;
	}
	
	.duanshipin .two .two_2 .floright img {
		width: 50px;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.duanshipin .two .two_2 .floright span {
		width: 40%;
		font: 20px "微软雅黑";
		color: black;
	}
</style>