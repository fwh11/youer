<template>
	<div class="sousuo">
		<div class="one clear">
			<router-link to='/ting/faxian'><img src="../../assets/tingimg/s1.png"/></router-link>
			<input type="text" placeholder='歌曲/MV/专辑/歌单/歌词' v-model='val' />
			<span @click="search">搜索</span>
		</div>
		<div class="two">
			<img src="../../assets/tingimg/s3.png" />
			<span>歌手分类</span>
			<span>&rsaquo;</span>
		</div>
		<div class="thr">
			<p>热门搜索</p>
			<p>
				<span>洗脑电音</span>
				<span>儿歌大全</span>
				<span>无损音质</span>
				<span>古风好歌</span>
			</p>
		</div>
		<div class="four">
			<ul>
				<li v-for="value in arr" @click="tiaozhuan(value.audio,value.artists[0].name,value.album.picUrl,value.name)"><span >{{value.name}}-{{value.artists[0].name}}</span></li>
			</ul>
			<ul id="lishis">
				<li v-for="value in jilu">
					<img src="../../assets/tingimg/s4.png" /><span>{{value}}</span><img src="../../assets/tingimg/s5.png"  class="del" @click="dele()"/>
				</li>
			</ul>
		</div>
		<div class="five" id="qingkong" @click="ddele">清空搜索历史</div>
	</div>
</template>
<script type="text/javascript">
	export default {
        data:function(){
        	return{
        		arr:[],
        		val:'',
        		arr1:[],
        		jilu:sslishi
        	}
        },
        methods:{
             search:function(){
             		sslishi.push(this.val);
             		for(var i=0;i<this.jilu.length;i++){
						for(var j=i+1;j<this.jilu.length;j++){
							if(this.jilu[i]==this.jilu[j]){
								this.jilu.splice(j,1);
								j--;
							}
						}
					}
					this.$http.jsonp('http://s.music.163.com/search/get/?type=1&limit=8&offset=0',{params:{
						version:1,
						s:this.val
						},json:"cb"
					}).then(function(res){
	                    this.arr=res.data.result.songs;
	               		
					},function(){
	                	alert("没网了")
	                });
			   },
            dele:function(){
	        	var lishis=document.getElementById('lishis');
	        	var lisd=document.getElementsByClassName('del');
	        	for(var i=0;i<lisd.length;i++){
	        		lisd[i].onclick=function(){
	        			lishis.removeChild(this.parentNode);
	        		}
	        	}
            },
        	ddele:function(){
	        	this.jilu.splice(0,this.jilu.length);
        	},
        	tiaozhuan:function(a,b,c,d){
        		console.log(a)
        		this.$router.push({path:'/bofang',query:{id:a,name:b,imgst:c,namer:d}});
        	}
            	//console.log(lisd);
        }
    }
</script>
<style type="text/css">
.clear:after{
	content: '';
	display: block;
	clear: both;
}
	.sousuo{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2000;
		background: white;
	}
	.sousuo .one{
		width: 100%;
		height: 88px;
		background: #106ef0;
		line-height: 88px;
	}
	.sousuo .one a img{
		height: 50%;
		vertical-align: middle;
		float: left;
		margin-left: 40px;
		margin-top: 22px;
	}
	.sousuo .one input{
		margin-top: 13px;
		height: 70%;
		width: 500px;
		background: rgba(0,0,0,0.3);
		border: rgba(0,0,0,0.2);
		border-radius: 5px;
		font: 32px "微软雅黑";
		color: white;
		text-align: center;
		outline: none;
	}
	.sousuo .one span{
		float: right;
		font: 28px/88px "微软雅黑";
		margin-right: 40px;
		color: white;
	}
	.sousuo .two{
		height: 95px;
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
	}
	.sousuo .two img{
		position: relative;
		top: 10px;
	}
	.sousuo .two span{
		font: 30px/95px "微软雅黑";
		margin-left: 24px;
	}
	.sousuo .two span:nth-of-type(2){
		font: 40px/95px "微软雅黑";
	}
	.sousuo .thr p:nth-of-type(1){
		font: 26px "微软雅黑";
		text-align: left;
		margin-left: 20px;
		padding: 20px 0;
	}
	.sousuo .thr p:nth-of-type(2){
		width: 100%;
	}
	.sousuo .thr p:nth-of-type(2) span{
		display: inline-block;
		width: 20%;
		color:#5799f4;
		font: 24px "微软雅黑";
		margin: 0 6px;
		padding: 5px 5px;
		border: 1px solid #5799f4;
		border-radius: 30px;
	}
	
	
	.sousuo .four{
		margin-top: 36px;
		border-top: 1px solid #CCCCCC;
		width: 100%;
	}
	.sousuo .four ul:nth-of-type(1){
		width: 100%;
	}
	.sousuo .four ul:nth-of-type(1) li{
		list-style: none;
		height: 74px;
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
	}
	.sousuo .four ul:nth-of-type(1) li span{
		width: 87%;
		display: inline-block;
		font: 24px/74px "微软雅黑";
		text-align: left;
		
	}
	
	
	
	
	.sousuo .four ul:nth-of-type(2){
		width: 100%;
	}
	.sousuo .four ul:nth-of-type(2) li{
		height: 74px;
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
	}
	.sousuo .four ul:nth-of-type(2) li img:nth-of-type(1){
		float: left;
		margin-top: 18px;
		margin-left: 40px;
	}
	.sousuo .four ul:nth-of-type(2) li img:nth-of-type(2){
		float: right;
		margin-top: 24px;
		margin-right: 40px;
	}
	.sousuo .four ul:nth-of-type(2) li span{
		width: 70%;
		display: inline-block;
		font: 24px/74px "微软雅黑";
		text-align: left;
		
	}
	.five{
		width: 100%;
		padding: 30px 0;
		font: 32px "微软雅黑";
		color: #1371f0;
	}
</style>