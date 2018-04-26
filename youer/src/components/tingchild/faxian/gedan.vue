<template>
	<div class="gedans">
		<div class="gedan">
			<div class="navst">
				<router-link to='/ting/faxian'><img src="../../../assets/tingimg/s1.png" /></router-link>
				<span>歌单</span>
			</div>
		</div>
		<div class="song">
			<div class="leftt">
				<p>摩天楼</p>
				<span><img src="../../../assets/tingimg/dui.png" />薛之谦</span>
			</div>
			<div :class="{'xihuanhuist':huist,'xihuanredst':redst}" @click='redst=!redst,huist=!huist'></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		components:{
			
		},
		data:function(){
			return{
				huist:false,
				redst:true
			}
		}
	}
</script>

<style type="text/css">
	.gedans{
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
	.gedans .gedan{
		width: 100%;
		height: 88px;
		background: #0d86fa;
		text-align: center;
	}
	.gedans .gedan img{
		float: left;
		margin-left: 20px;
		margin-top: 3%;
	}
	.gedans .gedan span{
		margin-left: -5%;
		font: 36px/88px "微软雅黑";
		color: white;
	}
	
	.gedans .song{
		width: 96%;
		height: 100px;
		margin: 15px auto;
		box-shadow: 0 0 20px #CCCCCC;
		border-radius: 10px;
	}
	.gedans .song .leftt{
		float: left;
		width: 70%;
		text-align: left;
	}
	.gedans .song .leftt p{
		font: 28px "微软雅黑";
		margin-left: 20px;
		margin-top: 3%;
	}
	.gedans .song .leftt span{
		font: 20px "微软雅黑";
		margin-left:14px;
		padding-top: 10px;
	}
	.gedans .song .leftt span img{
		width: 40px;
		vertical-align: middle;
	}
	.gedans .song .xihuanhuist{
		float: right;
		margin-top: 5.1%;
		margin-right: 20px;
		width: 26px;
		height: 23px;
		background: url(../../../assets/bofang/lie7.png);
	}
	.gedans .song .xihuanredst{
		float: right;
		margin-top: 5.1%;
		margin-right: 20px;
		width: 26px;
		height: 23px;
		background: url(../../../assets/bofang/lie6.png);
	}
</style>