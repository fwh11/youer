<template>
  	<div id="cedv" class="cedv">
		<div class="tou">
			<p><img src="../img/gr1.png" /></p>
			<p>凉薄之人</p>
		</div>
		<div class="gongneng">
			<p>
				<img src="../img/cbs1.png"/>
				<span>皮肤中心</span>
			</p>
			<p>
				<img src="../img/cbs2.png"/>
				<span>定时关闭</span>
			</p>
			<p>
				<img src="../img/cbs3.png"/>
				<span>我的收藏</span>
			</p>
			<p>
				<img src="../img/cbs4.png"/>
				<span>听歌识曲</span>
			</p>
			<p>
				<img src="../img/cbs5.png"/>
				<span>音效设置</span>
			</p>
		</div>
		<div class="gongneng_two">
			<div>
				<p class="gn_left">
					<img src="../img/cbs6.png"/>
					<span>仅WIFI联网</span>
				</p>
				<p :class="{down:down1,up:up1}" @click="down1=!down1,up1=!up1"><span></span></p>
			</div>
			<div>
				<p class="gn_left">
					<img src="../img/c7.png"/>
					<span>桌面歌词</span>
				</p>
				<p :class="{down:down2,up:up2}" @click="down2=!down2,up2=!up2"><span></span></p>
			</div>
			<div>
				<p class="gn_left">
					<img src="../img/c8.png"/>
					<span>锁屏歌词</span>
				</p>
				<p :class="{down:down3,up:up3}" @click="down3=!down3,up3=!up3"><span></span></p>
			</div>
		</div>
		<div class="dibu">
			<p>
				<img src="../img/c9.png" />
				<span>设置</span>
			</p>
			<p>
				<img src="../img/c10.png" />
				<span>退出</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
        data:function(){
        	return{
        		down1:false,
        		down2:false,
        		down3:true,
        		up1:true,
        		up2:true,
        		up3:false,
        	}
        }
    }
</script>

<style>
	/*#donglef{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5000;
		height: 100%;
		width: 100%;
		background: red;
	}*/
	#cedv{
		position: fixed;
		top: 0;
		left: -100%;
		z-index: 0;
		height: 100%;
		width: 100%;
		background: -moz-linear-gradient(#0360ee, #66cafc);
		background: -o-linear-gradient(#0360ee, #66cafc);
		background: -webkit-gradient(#0360ee, #66cafc);
		background: linear-gradient(#0360ee, #66cafc);
		transition: 2s;
	}
	.cedv .tou{
		width: 70%;
		text-align: center;
		border-bottom: 1px solid white;
		margin: 0 4%;
		padding-bottom: 20px;
	}
	.cedv .tou p:nth-of-type(1){
		width: 176px;
		height: 176px;
		line-height: 176px;
		border: 1px solid white;
		border-radius: 50%;
		margin: 60px auto 20px auto;
	}
	.cedv .tou p:nth-of-type(1) img{
		width: 160px;
		height: 160;
		border-radius: 50%;
		margin-top: 7px;
	}
	.cedv .tou p:nth-of-type(2){
		font: 30px "微软雅黑";
		color: white;
	}
	.cedv .gongneng{
		width: 70%;
		margin: 50px 4%;
		padding-bottom: 27px;
		border-bottom: 1px solid white;
	}
	.cedv .gongneng p{
		width: 95%;
		height: 68px;
		line-height: 63px;
		margin: 20px auto;
		border-radius: 60px;
		background: -moz-linear-gradient(left,#1066da, rgba(27,122,241,0));
		background: -o-linear-gradient(left,#1066da, rgba(27,122,241,0));
		background: -webkit-gradient(left,#1066da, rgba(27,122,241,0));
		background: linear-gradient(left,#1066da, rgba(27,122,241,0));
	}
	.cedv .gongneng p img{
		vertical-align: middle;
		margin-left: 30px;
		margin-top: -5px;
	}
	.cedv .gongneng p span{
		font: 24px/65px "微软雅黑";
		color: white;
		margin-left: 20px;
	}
	.cedv .gongneng_two{
		width: 70%;
		margin: 50px 4%;
		padding-bottom: 27px;
		border-bottom: 1px solid white;
	}
	.cedv .gongneng_two div{
		width: 95%;
		height: 68px;
		line-height: 63px;
		margin: 20px auto;
		border-radius: 60px;
		background: -moz-linear-gradient(left,#2379dc, rgba(27,122,241,0));
		background: -o-linear-gradient(left,#2379dc, rgba(27,122,241,0));
		background: -webkit-gradient(left,#2379dc, rgba(27,122,241,0));
		background: linear-gradient(left,#2379dc, rgba(27,122,241,0));
	}
	.cedv .gongneng_two div .gn_left{
		float: left;
		width: 50%;
	}
	.cedv .gongneng_two div .gn_left img{
		vertical-align: middle;
		margin-left: 30px;
		margin-top: -9px;
	}
	.cedv .gongneng_two div .gn_left span{
		font: 24px/68px "微软雅黑";
		color: white;
		margin-left: 20px;
	}
	.cedv .gongneng_two div .down{
		height: 60%;
		width: 70px;
		border-radius: 30px;
		margin-top: 2.8%;
		margin-right: 40px;
		float: right;
		background: #0074ff;
		position: relative;
	}
	.cedv .gongneng_two div .down span{
		display: inline-block;
		height: 35px;
		width: 35px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: 3px;
		left: 4px;
	}
	.cedv .gongneng_two div .up{
		height: 60%;
		width: 70px;
		border-radius: 30px;
		margin-top: 2.8%;
		margin-right: 40px;
		float: right;
		border: 1px solid white;
		position: relative;
	}
	.cedv .gongneng_two div .up span{
		display: inline-block;
		height: 35px;
		width: 35px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: 3px;
		right: 4px;
	}
	.cedv .dibu{
		width: 70%;
		margin: 0 4%;
		text-align: center;
	}
	.cedv .dibu p{
		margin-top: 12px;
		display: inline-block;
		width:45%;
	}
	.cedv .dibu p img{
		vertical-align: middle;
		margin-top: -12px;
	}
	.cedv .dibu p span{
		font: 26px "微软雅黑";
		color: white;
		margin-left: 24px;
	}
</style>