<template>
	<div class="paihangs">
		<div class="paihang">
			<div class="navst">
				<router-link to='/ting/faxian'><img src="../../../assets/tingimg/s1.png" /></router-link>
				<span>排行</span>
			</div>
		</div>
		<div>
			<h1>音乐巅峰榜</h1>
			<div class="paione_on cleart">
				<div>
					<img src="../../../assets/tingimg/T002R300x300M000002wMG0F2Eh3ED.jpg"/>
				</div>
				<div>
					<div>
						<p class="geming"><span>1</span><span>摩天楼</span>-<span>薛之谦</span></p>
						<p class="geming"><span>2</span><span>爱</span>-<span>小虎队</span></p>
						<p class="geming"><span>3</span><span>童话</span>-<span>光良</span></p>
					</div>
					<div>
						&rang;
					</div>
				</div>
			</div>
			<div class="paione_on cleart">
				<div>
					<img src="../../../assets/tingimg/T002R300x300M000003FXfKU4eXmKD.jpg"/>
				</div>
				<div>
					<div>
						<p class="geming"><span>1</span><span>摩天楼</span>-<span>薛之谦</span></p>
						<p class="geming"><span>2</span><span>爱</span>-<span>小虎队</span></p>
						<p class="geming"><span>3</span><span>童话</span>-<span>光良</span></p>
					</div>
					<div>
						&rang;
					</div>
				</div>
			</div>
			<div class="paione_on cleart">
				<div>
					<img src="../../../assets/tingimg/T002R300x300M000003GIoyj44r2je.jpg"/>
				</div>
				<div>
					<div>
						<p class="geming"><span>1</span><span>摩天楼</span>-<span>薛之谦</span></p>
						<p class="geming"><span>2</span><span>爱</span>-<span>小虎队</span></p>
						<p class="geming"><span>3</span><span>童话</span>-<span>光良</span></p>
					</div>
					<div>
						&rang;
					</div>
				</div>
			</div>
			<div class="paione_on cleart">
				<div>
					<img src="../../../assets/tingimg/T002R300x300M000004HO0w02geaax.jpg"/>
				</div>
				<div>
					<div>
						<p class="geming"><span>1</span><span>摩天楼</span>-<span>薛之谦</span></p>
						<p class="geming"><span>2</span><span>爱</span>-<span>小虎队</span></p>
						<p class="geming"><span>3</span><span>童话</span>-<span>光良</span></p>
					</div>
					<div>
						&rang;
					</div>
				</div>
			</div>
			<div class="paione_on cleart">
				<div>
					<img src="../../../assets/tingimg/T002R300x300M000003Te8NH1JNmgO.jpg"/>
				</div>
				<div>
					<div>
						<p class="geming"><span>1</span><span>摩天楼</span>-<span>薛之谦</span></p>
						<p class="geming"><span>2</span><span>爱</span>-<span>小虎队</span></p>
						<p class="geming"><span>3</span><span>童话</span>-<span>光良</span></p>
					</div>
					<div>
						&rang;
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>



<style type="text/css">
	.paihangs{
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
	.paihangs .paihang{
		width: 100%;
		height: 88px;
		background: #0d86fa;
		text-align: center;
	}
	.paihangs .paihang img{
		float: left;
		margin-left: 20px;
		margin-top: 3%;
	}
	.paihangs .paihang span{
		margin-left: -5%;
		font: 36px/88px "微软雅黑";
		color: white;
	}
	
	
	
	.cleart:after{
	content: '';
	display: block;
	clear: both;
}
	
	.paihangs h1{
		padding-top: 15px;
	}
	
	
	.paione_on{
		width: 95%;
		height: 240px;
		margin: 15px auto;
		box-shadow: 0 0 8px #CCCCCC;
		background: white;
		border-radius: 8px;
		
	}
	/*.paione_on .geming span{
		display: inline-block;
	   overflow: hidden;  
	   white-space: nowrap;  
	   text-overflow: ellipsis; 
	}
	.paione_on .geming span:nth-of-type(1){
		width:30px;
	}
	.paione_on .geming span:nth-of-type(2){
		width:140px;
	}
	.paione_on .geming span:nth-of-type(3){
		width: 50px;
	}*/
	.paione_on div:nth-of-type(1){
		height: 93%;
		padding: 5px;
		float: left;
		margin-top: 0.45%;
	}
	.paione_on div:nth-of-type(1) img{
		width: 223px;
		height: 223px;
	}
	.paione_on div:nth-of-type(2){
		float: right;
		width: 63%;
	}
	.paione_on div:nth-of-type(2) div:nth-of-type(1){
		width: 85%;
	}
	.paione_on div:nth-of-type(2) div:nth-of-type(1) p{
		font: 28px/75px "微软雅黑";
		color: black;
		text-align: left;
	}
	.paione_on div:nth-of-type(2) div:nth-of-type(2){
		width: 5%;
		font: 40px/230px "微软雅黑";
		color: black;
		float: right;
		margin-right: 20px;
	}
</style>