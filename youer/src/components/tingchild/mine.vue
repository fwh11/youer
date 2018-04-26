<template>
	<div class="mine">
		<div class="one clear">
			<table>
				<tr>
					<td>
						<img src="../../assets/tingimg/w1.png" /><br />
						<span>本地音乐</span>
					</td>
					<td>
						<img src="../../assets/tingimg/w2.png" /><br />
						<span>下载管理</span>
					</td>
					<td>
						<img src="../../assets/tingimg/w3.png" /><br />
						<span>我最喜欢</span>
					</td>
					<td>
						<img src="../../assets/tingimg/w4.png" /><br />
						<span>最近播放</span>
					</td>
				</tr>
			</table>
		</div>
		<div class="two clear">
			<h1>我的歌单</h1>
			<h4>新建</h4>
			<div>
				<p>
					<img src="../../assets/tingimg/w01.png"/><br />
					<span>我的最爱</span><br />
					<i>共23首</i>
				</p>
				<p>
					<img src="../../assets/tingimg/w02.png"/><br />
					<span>纯音乐(久石让)</span><br />
					<i>共23首</i>
				</p>
				<p>
					<img src="../../assets/tingimg/w03.png"/><br />
					<span>就是喜欢</span><br />
					<i>共23首</i>
				</p>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
.clear:after{
	content: '';
	display: block;
	clear: both;
}
.mine{
	padding-bottom: 100px;
}
	.mine .one{
		width: 100%;
		border-bottom: 1px solid #caced8;
		padding-bottom: 26px;
	}
	.mine .one table{
		width: 100%;
	}
	.mine .one table tr{
		width: 80%;
		margin: 0 auto;
	}
	.mine .one table tr td{
		width: 25%;
	}
	.mine .one table tr td span{
		display: inline-block;
		color: #000000;
		font-size: 26px;
		margin-top: 8px;
	}
	
	
	.mine .two{
		margin-top: 30px;
		color: #44a5f4;
	}
	.mine .two h1{
		font: 34px "微软雅黑";
		font-weight: bold;
		margin: 10px 0 10px 35px;
		padding-left: 25px;
		text-align: left;
		border-left: 3px solid #44a5f4;
	}
	.mine .two h4{
		font: 22px "微软雅黑";
		text-align: right;
		margin-right: 40px;
		margin-top: -25px;
		color: #CCCCCC;
	}
	.mine .two div{
		padding-top: 15px;
		width: 99%;
		margin: 0 auto;
	}
	.mine .two div p{
		width: 31%;
		float: left;
		margin-left: 1.8%;
	}
	.mine .two div p img{
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 0 20px #d9e8f2;
	}
	.mine .two div p span{
		display: block;
		width: 100%;
		text-align: left;
		font: 24px "微软雅黑";
		color: black;
	}
	.mine .two div p i{
		display: block;
		color: #CCCCCC;
		margin-top: -20px;
		margin-left: 3px;
		text-align: left;
		font: 18px "微软雅黑";
	}
</style>