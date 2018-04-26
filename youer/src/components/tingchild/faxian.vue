<template>
	<div class="faxian">
		<div class="one clear">
			<table>
				<tr>
					<td>
						<router-link to='/sirenfm'>
						<img src="../../assets/tingimg/1.png" /><br />
						<span>私人FM</span>
						</router-link>
					</td>
					<td>
						<router-link to='/meirituijian'>
						<img src="../../assets/tingimg/2.png" /><br />
						<span>每日推荐</span>
						</router-link>
					</td>
					<td>
						<router-link to='/gedan'>
						<img src="../../assets/tingimg/3.png" /><br />
						<span>歌单</span>
						</router-link>
					</td>
					<td>
						<router-link to='/paihang'>
						<img src="../../assets/tingimg/4.png" /><br />
						<span>排行榜</span>
						</router-link>
					</td>
				</tr>
			</table>
		</div>
		<div class="two clear">
			<h1>个性化推荐</h1>
			<h4>更多  &rsaquo;</h4>
			<div>
				<p>
					<img src="../../assets/tingimg/01.png"/><br />
					<span>个性化推荐你喜欢的歌曲</span>
				</p>
				<p>
					<img src="../../assets/tingimg/02.png"/><br />
					<span>车载绝品音乐</span>
				</p>
				<p>
					<img src="../../assets/tingimg/03.png"/><br />
					<span>他也从不放弃,从不认输</span>
				</p>
			</div>
			<div>
				<p>
					<img src="../../assets/bofang/tuimg1.png"/><br />
					<span>个性化推荐你喜欢的歌曲</span>
				</p>
				<p>
					<img src="../../assets/bofang/tuimg2.png"/><br />
					<span>车载绝品音乐</span>
				</p>
				<p>
					<img src="../../assets/tingimg/c6.png"/><br />
					<span>他也从不放弃,从不认输</span>
				</p>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<style type="text/css">
.clear:after{
	content: '';
	display: block;
	clear: both;
}
.faxian{
	padding-bottom: 100px;
}
	.faxian .one{
		width: 100%;
		border-bottom: 1px solid #caced8;
		padding-bottom: 40px;
	}
	.faxian .one table{
		width: 100%;
	}
	.faxian .one table tr{
		width: 80%;
		margin: 0 auto;
	}
	.faxian .one table tr td{
		width: 25%;
	}
	.faxian .one table tr td span{
		display: inline-block;
		color: #000000;
		font-size: 26px;
		margin-top: 8px;
	}
	
	
	.faxian .two{
		margin-top: 30px;
		color: #44a5f4;
	}
	.faxian .two h1{
		font: 34 px "微软雅黑";
		font-weight: bold;
		margin: 10px 0 10px 35px;
		padding-left: 25px;
		text-align: left;
		border-left: 3px solid #44a5f4;
	}
	.faxian .two h4{
		font: 22px "微软雅黑";
		text-align: right;
		margin-right: 40px;
		margin-top: -25px;
		color: #CCCCCC;
	}
	.faxian .two div{
		padding-top: 15px;
		width: 99%;
		margin: 0 auto;
	}
	.faxian .two div p{
		width: 31%;
		float: left;
		margin-left: 1.8%;
	}
	.faxian .two div p img{
		width: 230px;
		height: 230px;
		border-radius: 8px;
		box-shadow: 0 0 20px #d9e8f2;
	}
	.faxian .two div p span{
		display: block;
		width: 100%;
		text-align: left;
		font: 24px "微软雅黑";
		padding-bottom: 20px;
		color: black;
	}
</style>