<template>
	<div class="fenxiang">
		<div class="dingbu">
			<router-link to="/bofang"><img src="../../assets/bofang/z1.png" /></router-link>
			<span>分享</span>
		</div>
		<div class="liuyan">
			<textarea placeholder="#好音乐要让更多的人听到，分享好听的歌吧!#"></textarea>
			<p>
				<span>
					<img src="../bofang/quana.png" />
					<img src="../bofang/xiaolian.png" />
					<img src="../bofang/huatong.png" />
					<img src="../bofang/jinghao.png" />
				</span>
				<span>发布</span>
			</p>
		</div>
		<div class="dingwei">
			<img  src="../../assets/bofang/dingwei.png"/>
			<span id="iCenter"></span>
			<span id="inner">{{weizhis}}</span>
			<span :class="{kai_one:kai,guan_one:guan}" @click="kai=!kai,guan=!guan" id="yuan"><a></a></span>
		</div>
		<div class="shezhi">
			<img  src="../../assets/bofang/shezhi.png" />
			<span>公开发布</span>
			<span :class="{kai_two:kais,guan_two:guans}" @click="kais=!kais,guans=!guans"><a></a></span>
		</div>
		<div class="tjimg">
			<img src="../../assets/bofang/tuimg1.png" />
			<img src="../../assets/bofang/tuimg2.png" />
			<img src="../../assets/bofang/tianjia.png" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
		},
		data: function(){
			return {
				kai:false,
				guan:true,
				kais:false,
				guans:true,
				weizhis:'',
			}
		},
		mounted:function(){
			var yuan=document.getElementById('yuan');
			var that=this;
			addEventListener('click',function(){
				if(that.kai==false){
					that.weizhis='';
				}else{
					that.weizhis='山西省运城';
				}
			})
    	}
	}
</script>

<style type="text/css">
	.fenxiang{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #f7f7f8;
		z-index: 2300;
	}
	.fenxiang .dingbu{
		height: 88px;
		width: 100%;
		position: relative;
		z-index: 2;
		background: #015eee;
	}
	.fenxiang .dingbu a:nth-of-type(1) img{
		position: absolute;
		top: 50%;
		left: 40px;
		margin-top: -20px;
	}
	.fenxiang .dingbu span{
		font: 32px/88px "微软雅黑";
		color: white;
	}
	.fenxiang .liuyan{
		height: 415px;
		width: 100%;
		background: white;
	}
	.fenxiang .liuyan textarea{
		height: 300px;
		width: 95%;
		margin: 25px auto;
		border: none;
		cursor: none;
		resize: none;
		outline:none;
		text-indent: 2em;
		font: 28px "微软雅黑";
	}
	.fenxiang .liuyan p{
		width: 100%;
	}
	.fenxiang .liuyan p span img{
		vertical-align: middle;
		margin-right: 10px;
		display: inline-block;
	}
	.fenxiang .liuyan p span:nth-of-type(1){
		float: left;
		margin-left: 20px;
	}
	.fenxiang .liuyan p span:nth-of-type(2){
		width: 130px;
		height: 40px;
		background: #3090f4;
		float: right;
		margin-right: 20px;
		font: 24px/40px "微软雅黑";
		color: white;
		border-radius: 8px;
	}
	.fenxiang .dingwei{
		margin-top: 22px;
		height: 112px;
		line-height: 112px;
		width: 100%;
		background: white;
		text-align: left;
		border-bottom: 1px solid #CCCCCC; 
	}
	.fenxiang .dingwei img{
		vertical-align: middle;
		margin-left: 20px;
	}
	.fenxiang .dingwei #iCenter{
		/*display: inline-block;
		width: 100px;
		height: 100px;
		background: red;*/
		
	}
	.fenxiang .dingwei #inner{
		font: 24px/112px "微软雅黑";
		margin-left: 20px;
		
	}
	.fenxiang .dingwei .kai_one{
		display: inline-block;
		float: right;
		width: 100px;
		height: 34px;
		border-radius: 30px;
		background: #1993f2;
		position: relative;
		top: 50%;
		margin-top: -17px;
		right: 20px;
		box-shadow: 0 0 10px #CCCCCC;
	}
	.fenxiang .dingwei .kai_one a{
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: -5px;
		left: 0;
	}
	.fenxiang .dingwei .guan_one{
		display: inline-block;
		float: right;
		width: 100px;
		height: 34px;
		border-radius: 30px;
		background: #dbdbdb;
		position: relative;
		top: 50%;
		margin-top: -17px;
		right: 20px;
		box-shadow: 0 0 10px #CCCCCC;
	}
	.fenxiang .dingwei .guan_one a{
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: -5px;
		right: 0;
	}
	.fenxiang .shezhi{
		height: 112px;
		line-height: 112px;
		width: 100%;
		background: white;
		text-align: left;
	}
	.fenxiang .shezhi img{
		vertical-align: middle;
		margin-left: 20px;
	}
	.fenxiang .shezhi span:nth-of-type(1){
		font: 24px/112px "微软雅黑";
		margin-left: 20px;
	}
	.fenxiang .shezhi .kai_two{
		display: inline-block;
		float: right;
		width: 100px;
		height: 34px;
		border-radius: 30px;
		background: #1993f2;
		position: relative;
		top: 50%;
		margin-top: -17px;
		right: 20px;
		box-shadow: 0 0 10px #CCCCCC;
	}
	.fenxiang .shezhi .kai_two a{
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: -5px;
		left: 0;
	}
	.fenxiang .shezhi .guan_two{
		display: inline-block;
		float: right;
		width: 100px;
		height: 34px;
		border-radius: 30px;
		background: #dbdbdb;
		position: relative;
		top: 50%;
		margin-top: -17px;
		right: 20px;
		box-shadow: 0 0 10px #CCCCCC;
	}
	.fenxiang .shezhi .guan_two a{
		display: inline-block;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: white;
		position: absolute;
		top: -5px;
		right: 0;
	}
	.fenxiang .tjimg{
		width: 100%;
		height: 584px;
		background: white;
		text-align: left;
	} 
	.fenxiang .tjimg img{
		width: 169px;
		height: 169px;
		margin-top: 20px;
		margin-left: 20px;
	} 
</style>