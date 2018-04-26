<template>
	<div class="diantai">
		<div class="one clear">
			<table>
				<tr>
					<td>
						<img src="../../assets/tingimg/d1.png" />
						<span>电台分类</span>
					</td>
					<td>
						<img src="../../assets/tingimg/d2.png" />
						<span>电台排行</span>
					</td>
				</tr>
			</table>
		</div>
		<div class="two clear">
			<h1>个性化推荐</h1>
			<h4>更多  &rsaquo;</h4>
			<div>
				<div>
					<p><img src="../../assets/tingimg/d01.png"/></p>
					<p>
						<span>晓松说《芳华》</span>
						<span>一代人的芳华已逝，面目全非，虽然他们谈笑如故可还是不难看出岁月给每个人带来的改变。</span>
					</p>
				</div>
				<div>
					<p><img src="../../assets/tingimg/d02.png"/></p>
					<p>
						<span>韩老说《三体》</span>
						<span>它很大程度上来自于其硬派的科幻风格，作家在小说里融入了大量限时中的前沿物理学理论</span>
					</p>
				</div>
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
.diantai{
	padding-bottom: 100px;
}
	.diantai .one{
		width: 100%;
		border-bottom: 1px solid #caced8;
		padding-bottom: 26px;
	}
	.diantai .one table{
		width: 100%;
	}
	.diantai .one table tr{
		width: 80%;
		margin: 0 auto;
	}
	.diantai .one table tr td{
		width: 25%;
	}
	.diantai .one table tr td img{
		vertical-align: middle;
	}
	.diantai .one table tr td:nth-of-type(1){
		border-right: 2px solid #CCCCCC;
	}
	.diantai .one table tr td span{
		display: inline-block;
		color: #000000;
		font-size: 28px;
		margin-left: 5px;
		margin-top: 8px;
	}
	
	
	.diantai .two{
		margin-top: 30px;
		color: #44a5f4;
	}
	.diantai .two h1{
		font: 34px "微软雅黑";
		font-weight: bold;
		margin: 10px 0 10px 35px;
		padding-left: 25px;
		text-align: left;
		border-left: 3px solid #44a5f4;
	}
	.diantai .two h4{
		font: 22px "微软雅黑";
		text-align: right;
		margin-right: 40px;
		margin-top: -25px;
		color: #CCCCCC;
	}
	.diantai .two div{
		padding-top: 15px;
		width: 94.5%;
		margin: 0 auto;
	}
	.diantai .two div div{
		width: 100%;
		height: 146px;
	}
	.diantai .two div div p{
		float: left;
	}
	.diantai .two div div p:nth-of-type(1) img{
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 0 10px #d9e8f2;
	}
	.diantai .two div div p:nth-of-type(2){
		width: 68%;
		margin-left: 25px;
		margin-top: 12px;
	}
	.diantai .two div div p:nth-of-type(2) span{
		font: 30px "微软雅黑";
		display: block;
		text-align: left;
		color: black;
		margin-top: 8px;
	}
	.diantai .two div div p:nth-of-type(2) span:nth-of-type(2){
		font: 20px "微软雅黑";
		display: block;
	}
</style>