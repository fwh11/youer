<template>
	<div class="chang">
		<div class='nav'>

		</div>
		<div class='bannersz'>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					<div slot='swiper-con' class='swiper-slide'>
						<img src='../../assets/tingimg/chang.png' />
					</div>
				</div>
			</div>
		</div>
		<div class="oneq">
			<table>
				<tr>
					<td>
						<img src="../../assets/tingimg/c1.png"/><br />
						<span>动态</span>
					</td>
					<td>
						<img src="../../assets/tingimg/c3.png"/><br />
						<span>我要唱</span>
					</td>
					<td>
						<router-link to='/grzx'>
							<img src="../../assets/tingimg/c2.png"/><br />
							<span>我的</span>
						</router-link>
					</td>
				</tr>
			</table>
		</div>
		<hr style="height: 15px;background: #f1f1f1;margin-top:30px;border: #f1f1f1;" />
		<div class="twoq">
			<div>
				<p>排位赛</p>
				<p>13285人正在打擂</p>
			</div>
			<div>
				<p>附近</p>
				<p>抢地盘，做地主</p>
			</div>
		</div>
		<div class="thrq clear">
			<div>
				<img src="../../assets/tingimg/c5.png" />
				<span>听歌声邂逅主播</span>
				<span></span>
				<p class="thr_left">
					<img src="../../assets/tingimg/c4.png" />
				</p>
			</div>
			<div>
				<img src="../../assets/tingimg/c6.png" />
				<span>不将就</span>
				<span>Happly-贪睡</span>
				<p class="thr_right">
					<span class="wenzi">By安颜unpue</span>
					<span class="wenzi">20.4万人气 </span>
				</p>
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
	.chang {
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
	}
	
	.nav {
		width: 100%;
		height: 300px;
		line-height: 70px;
		background: -webkit-linear-gradient(#0d86fa, #51b3f9);
		background: -moz-linear-gradient(#0d86fa, #51b3f9);
		background: -o-linear-gradient(#0d86fa, #51b3f9);
		background: -webkit-gradient(#0d86fa, #51b3f9);
		background: linear-gradient(#0d86fa, #51b3f9);
		position: fixed;
		z-index: 998;
		top: 86px;
		border-radius: 0 0 50% 50%;
	}
	
	.chang .bannersz {
		width: 96%;
		height: 280px;
		overflow: hidden;
		z-index: 998;
		position: fixed;
		top: 9%;
		left: 2.1%;
		background: white;
		border-radius: 10px;
		box-shadow: 0 5px 20px #d9e8f2;
	}
	
	.chang .bannersz .swiper-container {
		width: 99%;
		height: 99%;
		margin: 0 auto 0 auto;
		overflow: hidden;
		border-radius: 11px;
	}
	
	.chang .bannersz .swiper-container .swiper-slide {
		width: 100%;
	}
	
	.chang .bannersz .swiper-container .swiper-slide img {
		width: 100%;
		vertical-align: middle;
		margin-top: 2px;
	}
	
	.chang .oneq{
		margin-top: 470px;
	}
	.chang .oneq table{
		width: 100%;
	}
	.chang .oneq table tr{
		width: 80%;
		margin: 0 auto;
	}
	.chang .oneq table tr td{
		width: 25%;
		text-align: center;
	}
	.chang .oneq table tr td img{
		vertical-align: middle;
	}
	.chang .oneq table tr td:nth-of-type(2) img{
		margin-top: -40px;
		vertical-align: middle;
	}
	.chang .oneq table tr td span{
		display: inline-block;
		color: #000000;
		font-size: 26px;
		margin-left: 5px;
		margin-top: 10px;
	}
	.chang .oneq table tr td:nth-of-type(2) span{
		display: inline-block;
		margin-top: 5px;
	}
	.chang .twoq{
		padding: 30px 0;
	}
	.chang .twoq div{
		width: 45%;
		float: left;
		background: #b58ee4;
		padding: 25px 0;
		margin-left: 20px;
	}
	.chang .twoq div  p{
		font: 30px "微软雅黑";
		color: white;
	}
	.chang .twoq div  p:nth-of-type(2){
		margin-top: 5px;
		font: 24px "微软雅黑";
		color: #F7F7F7;
	}
	.chang .twoq div:nth-of-type(2){
		float: right;
		background: #e0b315;
		margin-right: 20px;
	}
	
	.chang .thrq{
		
	}
	.chang .thrq div{
		margin-top: 18px;
		width: 45.6%;
		float: left;
		margin-left: 2.87%;
		background: white;
		border: 1px solid #CCCCCC;
		border-radius: 10px;
		box-shadow: 0 5px 20px #ccc;
		position: relative;
	}
	.chang .thrq div img{
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 10px #ccc;
	}
	.chang .thrq div span:nth-of-type(1){
		font: 24px "微软雅黑";
		display: block;
		text-align: left;
		margin-left: 10px;
		color: black;
	}
	.chang .thrq div span:nth-of-type(2){
		height: 30px;
		font: 20px "微软雅黑";
		display: block;
		text-align: left;
		margin-left: 10px;
		color: #CCCCCC;
	}
	.chang .thrq .thr_left{
		position: absolute;
		top: 26%;
		left: 50%;
		margin-left: -50px;
	}
	.chang .thrq .thr_left img{
		width: 100px;
	}
	
	.chang .thrq .thr_right{
		width: 100%;
		position: absolute;
		bottom: 19%;
		left: 0;
		background: rgba(0,0,0,0.3);
		text-align: center;
	}
	.chang .thrq .thr_right .wenzi{
		float: left;
		width: 42%;
		font: 18px "微软雅黑";
		color: white;
	}
</style>