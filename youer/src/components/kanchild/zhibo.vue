<template>
	<div class="zhibo">
		<div class='bannersz clear'>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div slot='swiper-con' class='swiper-slide'>
						<img src='../../assets/tingimg/zhibo.png' />
					</div>
				</div>
			</div>
		</div>
		<div class="one clear">
			<table>
				<tr>
					<td>
						<img src="../../assets/tingimg/zb1.png" /><br />
						<span>附近</span>
					</td>
					<td>
						<img src="../../assets/tingimg/zb2.png" /><br />
						<span>好声音</span>
					</td>
					<td>
						<router-link to='/sousuo'>
						<img src="../../assets/tingimg/zb3.png" /><br />
						<span>搜索</span>
						</router-link>
					</td>
					<td>
						<img src="../../assets/tingimg/zb4.png" /><br />
						<span>我的 </span>
					</td>
				</tr>
			</table>
		</div>
		<hr style="height: 15px;background: #f1f1f1;margin-top: 20px;border: #f1f1f1;" />
		<div class="two clear">
			<h1>推荐</h1>
			<div class="two_1">
				<img src="../../assets/tingimg/zb01.png" class="two_img" />
				<p>歌者乔玉</p>
				<span>在播: 吻别 </span>
				<div class="floleft">
					<span>Dac-综皇若辰</span>
					<span>29.3万人气</span>
				</div>
			</div>
			<div class="two_2">
				<img src="../../assets/tingimg/zb02.png" class="two_img" />
				<p>一米八三的夏雨</p>
				<span>在播: 飘洋过海来看你 </span>
				<div class="floright">
					<span>By安颜unpue</span>
					<span>20.4万人气</span>
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
.zhibo{
	padding-bottom: 100px;
}
	.bannersz {
		width: 96%;
		height: 310px;
		overflow: hidden;
		z-index: 998;
		position: fixed;
		top: 14%;
		left: 2.1%;
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 20px #d9e8f2;
	}
	
	.bannersz .swiper-container {
		width: 99%;
		height: 99%;
		margin: 0 auto 0 auto;
		overflow: hidden;
		border-radius: 11px;
	}
	
	.bannersz .swiper-container .swiper-slide {
		width: 100%;
	}
	
	.bannersz .swiper-container .swiper-slide img {
		width: 100%;
		vertical-align: middle;
		margin-top: 2px;
	}
	
	.zhibo {
		width: 100%;
	}
	
	.zhibo .one {
		width: 100%;
		padding-bottom: 26px;
	}
	
	.zhibo .one table {
		width: 100%;
	}
	
	.zhibo .one table tr {
		width: 80%;
		margin: 0 auto;
	}
	
	.zhibo .one table tr td {
		width: 25%;
	}
	
	.zhibo .one table tr td span {
		display: inline-block;
		color: #000000;
		font-size: 26px;
		margin-top: 8px;
	}
	
	.zhibo .two {
		width: 100%;
		margin-top: 10px;
	}
	
	.zhibo .two h1 {
		font: 32px "微软雅黑";
		font-weight: bold;
		padding: 15px 0;
		text-align: left;
		margin-left: 25px;
	}
	
	.zhibo .two div {
		width: 46%;
		float: left;
		margin-left: 2.7%;
		background: white;
		box-shadow: 0 10px 30px #CCCCCC;
		border-radius: 10px;
	}
	
	.zhibo .two .two_img {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 30px #CCCCCC;
	}
	
	.zhibo .two div p {
		font: 24px "微软雅黑";
		color: black;
		text-align: left;
		margin: 4px 8px;
	}
	
	.zhibo .two div span {
		font: 20px "微软雅黑";
		width: 100%;
		display: inline-block;
		margin: auto 8px auto 10px;
		padding-bottom: 10px;
		text-align: left;
	}
	
	.zhibo .two div span a {
		margin-right: 15px;
	}
	
	.zhibo .two .two_1 {
		position: relative;
	}
	
	.zhibo .two .two_1 .floleft {
		width: 95%;
		position: absolute;
		bottom: 22%;
		background: rgba(0, 0, 0, 0.3);
		box-shadow: none;
	}
	
	.zhibo .two .two_1 .floleft span {
		font: 18px "微软雅黑";
		color: white;
		width: 40%;
		text-align: center;
	}
	.zhibo .two .two_2 {
		position: relative;
	}
	
	.zhibo .two .two_2 .floright {
		width: 95%;
		position: absolute;
		bottom: 22%;
		background: rgba(0, 0, 0, 0.3);
		box-shadow: none;
	}
	
	.zhibo .two .two_2 .floright span {
		font: 18px "微软雅黑";
		color: white;
		width: 40%;
		text-align: center;
	}
</style>