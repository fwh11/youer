<template>
	<div class="xbf clear">
		<audio  :src=songmids  id="audiost"></audio><!---->
		<router-link to="/bofang">
		<div class="one clear">
			<p>
				<img :src='imgs'/>
			</p>
		</div>
		</router-link>
		<div class="two clear">
			<div>
				<input type="range" id="hong" v-model='jindu'/>
				<span id="lantiao"></span>
			</div>
			<div class="clear">
				<p>
					<span>{{songname}}</span><span>-{{songername}}</span>
				</p>
				<p class="xliebian" v-on:click="dlbs=!dlbs,searcht()"></p>
				<p :class="{'imgbo':fang,'imgting':zan}" @click='zan=!zan,fang=!fang,bo()' ></p>
			</div>
		</div>
		<div :class="{dliebiao:true,dlbs:dlbs}">
			<div class="guanbi" v-on:click="dlbs=!dlbs">
				关闭
			</div>
			<div class="lis">
				<div>
					<img src="../assets/bofang/lie4.png"/>
					<span>单曲播放(100)</span>
					<img src="../assets/bofang/lie3.png"/>
					<img src="../assets/bofang/lie1.png"/>
					<img src="../assets/bofang/lie2.png"/>
				</div>
				<ul>
					<li v-for='(val,index) in arrs'>
						<p :songmids='val.songmid' 
							:interval="val.interval" 
							:ername="val.word" 
							:songnames="val.sing"
							 :albummids="val.albummid"
							 @click="songmid(val.songmid,val.interval,val.word,val.sing,val.albummid)">
							<span>{{val.word}}</span>
							<span>{{val.cd}}</span>
							<span>-{{val.sing}}</span>
						</p>
						<p>
							<span :class="{'xihuanhui':val.hui,'xihuanred':val.red}" @click='val.red=!val.red,val.hui=!val.hui'></span>
							<span class="shanchu"></span>
						</p>
					</li>
				
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			
		},
		data:function(){
			return {
				fang:true,
				zan:false,
				hui:true,
				red:false,
				dlbs:true,
				arrs:[],
				songmids:'',
				intervals:0,
				songname:' ',
				songername:'',
				imgs:'',
				albummids:'',
				jindu:0,
				jindus:0,
				indexse:0,
				num:0,
				numt:0,
				timer:''
			}
		},
		methods:{
            searcht:function(){
				this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',{params:{
					w:this.t1
               },
                	   dataType:'jsonp',
				          jsonp: "jsonpCallback",
				          scriptCharset: 'GBK',//解决中文乱码
               }).then(function(res){
                	//console.log(res.data.songlist);
                	var arrb=res.data.songlist;
                	//console.log(res.data.songlist[0].data.albummid)
                	if(this.arrs.length<30){
	                	for(var i=0;i<30;i++){
	                		this.arrs.push({word:arrb[i].data.songname,cd:'SQ',sing:arrb[i].data.singer[0].name,hui:true,red:false,songmid:arrb[i].data.songmid,interval:arrb[i].data.interval,albummid:arrb[i].data.albummid});
	                	}
                	}
                },function(){
                	console.log('shibai');
                });
            },
            bo:function(){
            	var audiost=document.getElementById('audiost');
            	var lantiao=document.getElementById('lantiao');
            	if(this.zan==true){
            		audiost.play();
	            	var that=this
	        		this.timer=setInterval(function(){
	        			that.jindu++;
	        			var nums=487/that.intervals*2;
	        			that.num+=nums;
	        			lantiao.style.width=that.num+"px";
	        		},this.intervals*10)
            	}else{
            		audiost.pause();
            	}
            },
            songmid:function(id,intes,one,two,img){
            	clearInterval(this.timer);
            	var lantiao=document.getElementById('lantiao');
            	this.jindu=0;
            	lantiao.style.width=0;
            	var url = 'http://dl.stream.qqmusic.qq.com/C100'+id+'.m4a?fromtag=0';
            	this.songmids=url;
            	var audiost=document.getElementById('audiost');
            	audiost.autoplay='autoplay';
            	this.zan=true;
            	this.fang=false;
            	this.intervals=intes;
            	console.log(this.intervals)
            	this.songername=two;
            	this.songname=one;
            	this.imgs="https://y.gtimg.cn/music/photo_new/T002R90x90M000"+img+".jpg?max_age=2592000";
            	/*if(this.zan==true){
	            	var that=this
	        		this.timer=setInterval(function(){
	        			that.jindu++;
	        			var numss=487/that.intervals*2;
	        			that.numt+=numss;
	        			lantiao.style.width=that.numt+"px";
	        			if(that.numss>487){
	        				that.numss=0
	        			}
	        		},this.intervals*10)
            	}*/
            }
        },
        mounted:function(){
        		this.songername="武勇";
            	this.songname='一次就好';
            	this.imgs='https://y.gtimg.cn/music/photo_new/T002R90x90M0000044ks8M14DFKq.jpg?max_age=2592000';
            	this.songmids='http://dl.stream.qqmusic.qq.com/C100003HIv074OhPZt.m4a?fromtag=0';
            	this.intervals=266;
        }
	}
</script>
<style type="text/css">
	.clear:after {
		content: '';
		display: block;
		clear: both;
	}
	
	.xbf {
		width: 100%;
		height: 102px;
		background: white;
		position: fixed;
		bottom: -2px;
		left: 0;
		box-shadow: 0 0 30px #CCCCCC;
	}
	
	.xbf .ones {
		float: left;
		width: 18.6%;
		height: 100%;
		position: relative;
	}
	.xbf .one {
		float: left;
		width: 18.6%;
		height: 100%;
		position: relative;
	}
	
	.xbf .one p {
		width: 104px;
		background: white;
		box-shadow: 0 0 10px #cfe6f9;
		line-height: 104px;
		text-align: center;
		position: absolute;
		right: 0;
		top: -40px;
		border-radius: 50%;
	}
	
	.xbf .one p img {
		width: 92px;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.xbf .two {
		width: 81.2%;
		height: 100%;
		float: right;
	}
	
	.xbf .two div:nth-of-type(1){
		position: relative;
	}
	.xbf .two div:nth-of-type(1) #hong {
		
		 /*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
		margin-top: 2px;
		background-color: #000000;
		border-radius: 15px;
		width: 80%;
		-webkit-appearance: none;
		height: 2px;
		cursor: none;
	}
	
	.xbf .two div:nth-of-type(1) #hong::-webkit-slider-thumb {
		-webkit-appearance: none;
		cursor: default;
		top: -5px;
		height: 10px;
		width: 10px;
		transform: translateY(-4px);
		background: none repeat scroll 0 0 deepskyblue;
		border-radius: 15px;
		/* -webkit-box-shadow: 0 -1px 1px black inset;*/
		transform: rotate(90deg);
	}
	.xbf .two div:nth-of-type(1) span{
		display: block;
		width: 0px;
		height: 3px;
		background: #44a5f4;
		position: absolute;
		top: 12px;
		left: 10%;
	}
	
	.xbf .two div:nth-of-type(2){
		width: 80%;
		height: 80px;
		line-break: 80px;
		margin: 0 auto;
	}
	.xbf .two div:nth-of-type(2) p{
		float: left;
	}
	.xbf .two div:nth-of-type(2) p:nth-of-type(1){
		margin-top: 3.8%;
	}
	.xbf .two div:nth-of-type(2) p:nth-of-type(1) span:nth-of-type(1){
		font: 28px "微软雅黑";
		color: #333333;
	}
	.xbf .two div:nth-of-type(2) p:nth-of-type(1) span:nth-of-type(2){
		font: 24px "微软雅黑";
		color: #333333;
	}
	.xbf .two div:nth-of-type(2) .imgbo{
		margin-top: 17px;
		float: right;
		margin-right: 25px;
		width: 44px;
		height: 44px;
		background: url(../assets/tingimg/xbofang.png);
	}
	.xbf .two div:nth-of-type(2) .imgting{
		margin-top: 17px;
		float: right;
		margin-right: 25px;
		width: 44px;
		height: 44px;
		background: url(../assets/tingimg/xzanting.png);
	}
	.xbf .two div:nth-of-type(2) .xliebian{
		float: right;
		margin-top: 20px;
		width: 42px;
		height: 38px;
		background: url(../assets/tingimg/xliebiao.png);
	}
	
	
	.dlbs{
		display: none;
	}
	.xbf .dliebiao{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.2);
		z-index: 10;
	}
	.xbf .dliebiao .guanbi{
		position: absolute;
		z-index: 12;
		bottom: 0;
		background: white;
		height: 98px;
		width: 100%;
		font: 28px/98px "微软雅黑";
		box-shadow: 0 -5px 30px #CCCCCC;
	}
	.xbf .dliebiao .lis{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 11;
		width: 100%;
		height: 600px;
		background: white;
		box-shadow: 0 0 20px #CCCCCC;
	}
	.xbf .dliebiao .lis div{
		height: 114px;
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #CCCCCC;
	}
	.xbf .dliebiao .lis div img{
		vertical-align: middle;
	}
	.xbf .dliebiao .lis div img:nth-of-type(1){
		margin-top: -14px;
		margin-left: 7.5%;
	}
	.xbf .dliebiao .lis div span{
		font: 28px/114px "微软雅黑"; 
		margin-left: 5%;
	}
	.xbf .dliebiao .lis div img:nth-of-type(2){
		margin-left: 7%;
		margin-top: -18px;
	}
	.xbf .dliebiao .lis div img:nth-of-type(3){
		margin-left: 14%;
		margin-top: -18px;
	}
	.xbf .dliebiao .lis div img:nth-of-type(4){
		margin-left: 14%;
		margin-top: -18px;
	}
	.xbf .dliebiao .lis ul{
		width: 100%;
		height: 400px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.xbf .dliebiao .lis ul li{
		list-style: none;
		width: 100%;
		height: 80px;
		border-bottom: 1px solid #CCCCCC;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(1){
		float: left;
		height: 100%;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(1){
		font: 26px/80px "微软雅黑";
		color: black;
		margin-left: 60px;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(2){
		font: 12px "微软雅黑";
		color:#f39800;
		border: 1px solid #f39800;
		border-radius: 8px;
		padding: 3px 5px;
		margin-left: 10px;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(3){
		font: 22px "微软雅黑";
		color:#CCCCCC;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(2){
		float: right;
		height: 100%;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(2) .xihuanhui{
		display: inline-block;
		width: 26px;
		height: 23px;
		background: url(../assets/bofang/lie7.png);
		margin-right: 30px;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(2) .xihuanred{
		display: inline-block;
		width: 26px;
		height: 23px;
		background: url(../assets/bofang/lie6.png);
		margin-right: 30px;
	}
	.xbf .dliebiao .lis ul li p:nth-of-type(2) .shanchu{
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../assets/bofang/lie8.png);
		margin-right: 60px;
		margin-top: 23%;
	}
</style>