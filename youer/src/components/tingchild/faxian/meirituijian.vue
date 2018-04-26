<template>
	<div class="mrtjs">
		<div class="mrtj">
			<div class="navst">
				<router-link to='/ting/faxian'><img src="../../../assets/tingimg/s1.png" /></router-link>
				<span>每日推荐</span>
			</div>
		</div>
		<Srbanner swiperid='go'>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/one.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/two.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/thr.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/four.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/five.png'/>
				</div>
		</Srbanner>
		<div class="two clear">
			<h1>个性化推荐</h1>
			<h4>更多  &rsaquo;</h4>
			<div>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M0000002PrcJ1u1sf2.jpg"/><br />
					<span>个性化推荐你喜欢的歌曲</span>
				</p>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M000000aGEuj4LA4J8.jpg"/><br />
					<span>车载绝品音乐</span>
				</p>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M000001PGAQy4Rxm82.jpg"/><br />
					<span>他也从不放弃,从不认输</span>
				</p>
			</div>
			<div>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M000002bFeIQ2vNC4B.jpg"/><br />
					<span>个性化推荐你喜欢的歌曲</span>
				</p>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M000002EBwEs2IPCxx.jpg"/><br />
					<span>车载绝品音乐</span>
				</p>
				<p>
					<img src="../../../assets/tingimg/T002R300x300M000002FS0jA1OYf2z.jpg"/><br />
					<span>他也从不放弃,从不认输</span>
				</p>
			</div>
		</div>
		<div class="huan">
			换一换
		</div>
	</div>
</template>

<script type="text/javascript">
import Srbanner from '../../srbanner'
	export default {
		components: {
			Srbanner
		},
		data: function(){
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style type="text/css">
	.mrtjs{
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3200;
		background: white;
	}
	.mrtjs .mrtj{
		width: 100%;
		height: 88px;
		background: #0d86fa;
		text-align: center;
	}
	.mrtjs .mrtj img{
		float: left;
		margin-left: 20px;
		margin-top: 3%;
	}
	.mrtjs .mrtj span{
		margin-left: -5%;
		font: 36px/88px "微软雅黑";
		color: white;
	}
	.mrtjs .two{
		margin-top: 30px;
		color: #44a5f4;
	}
	.mrtjs .two h1{
		font: 34 px "微软雅黑";
		font-weight: bold;
		margin: 10px 0 10px 35px;
		padding-left: 25px;
		text-align: left;
		border-left: 3px solid #44a5f4;
	}
	.mrtjs .two h4{
		font: 22px "微软雅黑";
		text-align: right;
		margin-right: 40px;
		margin-top: -25px;
		color: #CCCCCC;
	}
	.mrtjs .two div{
		padding-top: 15px;
		width: 99%;
		margin: 0 auto;
	}
	.mrtjs .two div p{
		width: 31%;
		float: left;
		margin-left: 1.8%;
	}
	.mrtjs .two div p img{
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 0 20px #d9e8f2;
	}
	.mrtjs .two div p span{
		display: block;
		width: 100%;
		text-align: left;
		font: 24px "微软雅黑";
		padding-bottom: 20px;
		color: black;
	}
	
	.mrtjs .huan{
		font: 30px "微软雅黑";
		padding: 5px 0;
		border: 1px solid #007AFF;
		width: 150px;
		margin: 0 auto;
	}
</style>