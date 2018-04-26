<template>
	<div class="grzx">
		<div class="ones">
			<div style="width:100%;height: 88px;line-height: 88px; text-align: center;">
				<router-link to='/chang'><img src="../../assets/tingimg/s1.png" style="margin-top: 3%;float: left;margin-left: 40px;"/></router-link>
				<span style="font: 32px/88px '微软雅黑'; color: white;margin-left: -96px;">个人中心</span>
			</div>
			<div class="one_1 clear">
				<p><img src="../../assets/tingimg/gr2.png"/></p>
				<p><img src="../../assets/tingimg/gr1.png"/></p>
				<p><img src="../../assets/tingimg/gr3.png"/></p>
			</div>
			<div class="one_2">
				凉薄之人
			</div>
			<div class="one_3">
				自己本事凉薄之人，怎么温暖他人
			</div>
		</div>
		<div class="twos clear">
			<div class="two_d">
					<p>
						<img src="../../assets/tingimg/zx1.png" />
					</p>
					<p>
						<span>12345</span>
						<span>关注</span>
					</p>
			</div>
			<div class="two_d">
					<p>
						<img src="../../assets/tingimg/zx2.png" />
					</p>
					<p>
						<span>12345</span>
						<span>浏览量</span>
					</p>
			</div>
			<div class="two_d">
					<p>
						<img src="../../assets/tingimg/zx3.png" />
					</p>
					<p>
						<span>12345</span>
						<span>粉丝</span>
					</p>
			</div>
		</div>
		<div class="thrs clear">
			<div>
				<p>
					<img src="../../assets/tingimg/zx001.png" />
				</p>
				<p>
					<span>我的消息</span>
					<span>及时查看好友发来的消息和评论</span>
				</p>
				<p>
					12
				</p>
			</div>
			<div>
				<p>
					<img src="../../assets/tingimg/zx002.png" />
				</p>
				<p>
					<span>积分商城</span>
					<span>攒积分可以来这里换东西哦</span>
				</p>
				<p class="back">
					68积分
				</p>
			</div>
			<div>
				<p>
					<img src="../../assets/tingimg/zx003.png" />
				</p>
				<p>
					<span>听歌识曲</span>
					<span>识别好听却不知歌名的音乐</span>
				</p>
				<p  class="back">
					<img src="../../assets/tingimg/zx006.png" />
				</p>
			</div>
			<div>
				<p>
					<img src="../../assets/tingimg/zx004.png" />
				</p>
				<p>
					<span>定时播放</span>
					<span>选择歌曲定时自动停止播放</span>
				</p>
			</div>
		</div>
		<div class="fours clear">
				<p>
					<img src="../../assets/tingimg/zx005.png" />
				</p>
				<p>
					<span>My record</span>
					<span>我的足迹</span>
				</p>
		</div>
		<div class="fives">
			<table>
				<tr>
					<td>
						<p>21:35分</p>
						<p>观看MV《别》</p>
							<img src="../../assets/tingimg/grzx1.png" />
					</td>
					<td>
						<p>21:35分</p>
						<p>观看MV《别》</p>
							<img src="../../assets/tingimg/grzx2.png" />
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<style type="text/css">
.clear:after{
	content: '';
	display: block;
	clear: both;
}
	.grzx{
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2000;
		background: #f5f3f3;
	}
	.grzx .ones{
		width: 100%;
		height: 440px;
		background: -webkit-linear-gradient(#0f6df0, #60c3fb);
		background: -moz-linear-gradient(#0f6df0, #60c3fb);
		background: -o-linear-gradient(#0f6df0, #60c3fb);
		background: -webkit-gradient(#0f6df0, #60c3fb);
		background: linear-gradient(#0f6df0, #60c3fb);
	}
	.grzx .ones .one_1{
		height: 190px;
	}
	.grzx .ones .one_1 p{
		margin-top: 0px;
	}
	.grzx .ones .one_1 p:nth-of-type(1){
		width: 35.8%;
		float: left;
		line-height: 195px;
	}
	.grzx .ones .one_1 p:nth-of-type(2){
		float: left;
		width: 25.6%;
		height: 100%;
		border: 1px solid white;
		text-align: center;
		border-radius: 50%;
		line-break: 195px;
	}
	.grzx .ones .one_1 p:nth-of-type(3){
		width: 35.8%;
		float: right;
		line-height: 190px;
	}
	.grzx .ones .one_1 p:nth-of-type(2) img{
		margin-top: 7%;
	}
	.grzx .ones .one_1 p:nth-of-type(1) img{
		margin-left: 100px;
		border-radius: 50%;
	}
	.grzx .ones .one_1 p:nth-of-type(3) img{
		margin-right: 120px;
	}
	.grzx .ones .one_2{
		margin-top: 10px;
		width: 100%;
		font: 30px "微软雅黑";
		color: white;
	}
	.grzx .ones .one_3{
		margin-top: 18px;
		width: 100%;
		font: 22px "微软雅黑";
		color: white;
	}
	
	.grzx .twos{
		position: relative;
		top: -40px;
		width: 80%;
		margin: 0 auto;
		border-radius: 40px;
	}
	.grzx .twos .two_d{
		height: 95px;
		float: left;
		width: 33.33%;
		background: white;
		border-radius: 15px;
		box-shadow: 0 5px 1px #6eb5eb;
	}
	.grzx .twos .two_d{
		height: 95px;
		float: left;
		width: 33.33%;
		background: white;
		border-radius: 15px;
		box-shadow: 0 5px 1px #6eb5eb;
	}
	.grzx .twos .two_d p:nth-of-type(1){
		float: left;
		margin-left: 45px;
		margin-top: 33px;
	}
	.grzx .twos .two_d p:nth-of-type(2){
		float: right;
		margin-right: 45px;
		margin-top: 21px;
	}
	.grzx .twos .two_d p:nth-of-type(2) span{
		display: block;
		font: 20px "微软雅黑";
		color: #86c0ee;
	}
	.grzx .twos .two_d p:nth-of-type(2) span:nth-of-type(1){
		border-bottom: 1px solid #86c0ee;
		font-weight: bold;
	}
	

	.grzx .thrs div{
		width: 90%;
		height: 130px;
		background: white;
		margin: 0 auto;
		border-radius: 10px;
		box-shadow:  0 5px 20px #CCCCCC;
		margin-bottom: 15px;
	}
	.grzx .thrs div p{
		width: 16%;
		height: 100%;
		text-align: center;
		float: left;
	}
	.grzx .thrs div p:nth-of-type(1){
		line-height: 130px;
	}
	.grzx .thrs div p:nth-of-type(1) img{
		width: 34px;
		height: 34px;
		vertical-align: middle;
	}
	.grzx .thrs div p:nth-of-type(2){
		width: 60%;
		height: 50%;
		margin-top: 4%;
	}
	.grzx .thrs div p:nth-of-type(2) span{
		display: block;
		text-align: left;
		font: 26px "微软雅黑";
	}
	.grzx .thrs div p:nth-of-type(2) span:nth-of-type(2){
		font: 22px "微软雅黑";
		margin-top: 5px;
	}
	.grzx .thrs div p:nth-of-type(3){
		font: 14px/30px "微软雅黑";
		height: 30px;
		width: 6%;
		color: white;
		float: right;
		background: #6eb5eb;
		border-radius: 10px;
		margin-right: 6%;
		margin-top: 7.1%;
	}
	.grzx .thrs div .back{
		font: 18px/30px "微软雅黑" !important;
		height: 30px !important;
		width: 10% !important;
		color: #CCCCCC !important;
		float: right;
		background: none !important;
		margin-top: 7.4% !important;
	}
	.grzx .thrs div .back img{
		margin-right: -35px;
	}
	
	.grzx .fours{
		width: 90%;
		height: 90px;
		margin: 0 auto;
	}
	.grzx .fours p{
		width: 14%;
		height: 100%;
		text-align: center;
		float: left;
	}
	.grzx .fours p:nth-of-type(1){
		line-height: 90px;
		background: white;
		border-radius: 50%;
		box-shadow: 1px 3px 10px #CCCCCC;
	}
	.grzx .fours p:nth-of-type(1) img{
		width: 34px;
		height: 34px;
		vertical-align: middle;
	}
	.grzx .fours p:nth-of-type(2){
		margin-left: 20px;
		width: 60%;
		height: 50%;
		margin-top: 1.2%;
	}
	.grzx .fours p:nth-of-type(2) span{
		display: block;
		text-align: left;
		font: 26px "微软雅黑";
	}
	.grzx .fours p:nth-of-type(2) span:nth-of-type(2){
		font: 22px "微软雅黑";
		margin-top: 5px;
	}
	
	.grzx .fives{
		margin-top: 20px;
		width: 100%;
	}
	.grzx .fives table{
		width: 100%;
	}
	.grzx .fives table tr{
		width: 100%;
	}
	.grzx .fives table tr td{
		width: 50%;
		margin: 0 30%;
	}
	.grzx .fives table tr td img{
		width: 80%;
		border-radius: 10px;
	}
	.grzx .fives table tr td p{
		text-align: left;
		margin-left: 11%;
		font: 22px "微软雅黑";
		color: black;
		margin-bottom: 5px;
	}
	.grzx .fives table tr td p:nth-of-type(2){
		font: 20px "微软雅黑";
		color: #747373;
	}
</style>