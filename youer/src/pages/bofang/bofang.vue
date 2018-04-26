<template>
	
	<div class="bofang">
		<audio :src=songmids  id="audiost"></audio><!--autoplay="autoplay"-->
		<div class="topo">
			<router-link to="/ting/faxian"><img src="../../assets/bofang/z1.png" /></router-link>
			<router-link to="/fenxiang"><img src="../../assets/bofang/z2.png" /></router-link>
		</div>
		<div class="one">
			<img :src="imgs" />
		</div>
		<div class="two">
			<input type="range" id="hong" v-model='jindu'/>
			<span></span>
			<a>3:30</a>
		</div>
		<div class="thr">
			<p>
				<span>无损</span>
				<span>{{songname}}</span>
			</p>
			<p>{{songername}}</p>
		</div>
		<div class="four">
			<p>反正现在的感情 都暧昧</p>
			<p>你大可不必为难 找般配</p>
		</div>
		<div class="five">
			<p class="prevs" @click="prev()"></p>
			<p :class="{'imgbos':fangs,'imgtings':zans}" @click='zans=!zans,fangs=!fangs,bo()'></p>
			<p class="nexts" @click="next()"></p>
		</div>
		<div class="six">
			<span class="xunhuan"><img src="../../assets/bofang/zj1.png"/></span>
			<span class="xihuan"><img src="../../assets/bofang/xin.png"/></span>
			<span class="xiazai"><img src="../../assets/bofang/xiazai.png"/></span>
			<span class="gengduo"><img src="../../assets/bofang/gengduo.png"/></span>
			<span class="liebiao" v-on:click="dlb=!dlb,searcht()"><img src="../../assets/bofang/liebiao.png"/></span>
		</div>
		<div :class="{dliebiao:true,dlb:dlb}">
			<div class="guanbi" v-on:click="dlb=!dlb">
				关闭
			</div>
			<div class="lis">
				<div>
					<img src="../../assets/bofang/lie4.png"/>
					<span>单曲播放(100)</span>
					<img src="../../assets/bofang/lie3.png"/>
					<img src="../../assets/bofang/lie1.png"/>
					<img src="../../assets/bofang/lie2.png"/>
				</div>
				<ul>
					
					<li v-for='(val,index) in arr'>
						<p :songmids='val.songmid' 
							:interval="val.interval" 
							:ername="val.word" 
							:songnames="val.sing"
							 :albummids="val.albummid"
							 @click="songmid(val.songmid,val.interval,val.word,val.sing,val.albummid)" class="prenext">
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
		components:{
			
		},
		data: function(){
			return {
				fangs:true,
				zans:false,
				hui:true,
				red:false,
				dlb:true,
				audios:'',
				ids:this.$route.query.id,
				namers:this.$route.query.namer,
				imgsts:this.$route.query.imgst,
				names:this.$route.query.name,
				arr:[],
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
		methods: {
            searcht:function(){
				this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923',{params:{
					w:this.t1
               },
                	   dataType:'jsonp',
				          jsonp: "jsonpCallback",
				          scriptCharset: 'GBK',//解决中文乱码
              }).then(function(res){
                	var arrb=res.data.songlist;
                	if(this.arr.length<50){
	                	for(var i=0;i<50;i++){
	                		this.arr.push({word:arrb[i].data.songname,cd:'SQ',sing:arrb[i].data.singer[0].name,hui:true,red:false,songmid:arrb[i].data.songmid,interval:arrb[i].data.interval,albummid:arrb[i].data.albummid});
	                	}
                	}
                },function(){
                	console.log('shibai');
                });
            },
            bo:function(){
            	var audiost=document.getElementById('audiost');
            	var lantiao=document.getElementById('lantiao');
            	if(this.zans==true){
            		audiost.play();
	            	/*var that=this
	        		this.timer=setInterval(function(){
	        			that.jindu++;
	        			var nums=487/that.intervals*2;
	        			that.num+=nums;
	        			lantiao.style.width=that.num+"px";
	        		},this.intervals*10)*/
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
            	this.zans=true;
            	this.fangs=false;
            	this.intervals=intes;
            	console.log(this.intervals)
            	this.songername=two;
            	this.songname=one;
            	this.imgs="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+img+".jpg?max_age=2592000";
            	/*if(this.zans==true){
	            	var that=this
	        		this.timer=setInterval(function(){
	        			that.jindu++;
	        			var numss=487/that.intervals*2;
	        			that.numt+=numss;
	        			lantiao.style.width=that.numt+"px";
	        		},this.intervals*10)
            	}*/
            },
            prev:function(){
            	var prenext=document.getElementsByClassName('prenext');
	        	var numst=this.indexse-=1;
					if(numst<0){
						numst=0
					}
				for(var i=0;i<prenext.length;i++){
					var shujus=prenext[numst].getAttribute('songmids');
					var snames=prenext[numst].getAttribute('ername');
					var sernames=prenext[numst].getAttribute('songnames');
					var imagest=prenext[numst].getAttribute('albummids');
				}
				this.songmids='http://dl.stream.qqmusic.qq.com/C100'+shujus+'.m4a?fromtag=0';
				this.songname=snames;
				this.songername=sernames;
				this.imgs="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+imagest+".jpg?max_age=2592000";
	        },
	        next:function(){
	        	var prenext=document.getElementsByClassName('prenext');
	        	var numt=this.indexse+=1;
				for(var i=0;i<prenext.length;i++){
					var shuju=prenext[numt].getAttribute('songmids');
					var sname=prenext[numt].getAttribute('ername');
					var sername=prenext[numt].getAttribute('songnames');
					var imagests=prenext[numt].getAttribute('albummids');
				}
				this.songmids='http://dl.stream.qqmusic.qq.com/C100'+shuju+'.m4a?fromtag=0';
				this.songname=sname;
				this.songername=sername;
				this.imgs="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+imagests+".jpg?max_age=2592000";
	        }
        
		},
		mounted:function(){
			if(this.ids==null){
				this.imgs='https://y.gtimg.cn/music/photo_new/T002R300x300M000001BQ2E122VHtt.jpg?max_age=2592000';
				this.songname='摩天大楼';
				this.songername='薛之谦'
				alert('请在列表挑选歌曲');
			}else{
	    		var audiost=document.getElementById('audiost');
	    		this.imgs='https://y.gtimg.cn/music/photo_new/T002R300x300M000001BQ2E122VHtt.jpg?max_age=2592000';
	    		this.songmids=this.ids;
	    		audiost.autoplay='autoplay';
	        	this.zans=true;
	        	this.fangs=false;
				this.songername=this.names;
				this.imgs=this.imgsts;
				this.songname=this.namers;
			}
        }
	}
</script>
<style type="text/css">

	.bofang{
		width: 100%;
		height: 100%;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3000;
	}
	.bofang .topo{
		height: 88px;
		width: 100%;
		position: relative;
		z-index: 2;
		background: rgba(0,0,0,0.1);
	}
	.bofang .topo a:nth-of-type(1) img{
		position: absolute;
		top: 50%;
		left: 40px;
		margin-top: -20px;
	}
	.bofang .topo a:nth-of-type(2) img{
		position: absolute;
		top: 50%;
		right: 40px;
		margin-top: -20px;
	}
	.bofang .one{
		width: 100%;
		height: 755px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.bofang .one img{
		width: 100%;
		height: 755px;
	}
	.bofang .two{
		position: relative;
		top: 658px;
		z-index: 2;
	}
	
	.bofang .two #hong {
		
		 /*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
		margin-top: 2px;
		background-color: #000000;
		border-radius: 15px;
		width: 100%;
		-webkit-appearance: none;
		height: 6px;
		cursor: none;
	}
	
	.bofang .two #hong::-webkit-slider-thumb {
		-webkit-appearance: none;
		cursor: default;
		top: -5px;
		height: 20px;
		width: 20px;
		transform: translateY(-4px);
		background: none repeat scroll 0 0 #44a5f4;
		border-radius: 15px;
		/* -webkit-box-shadow: 0 -1px 1px black inset;*/
		transform: rotate(90deg);
	}
	.bofang .two span{
		display: block;
		width: 750px;
		height: 7px;
		background: #44a5f4;
		position: absolute;
		top: 8px;
		left: 0;
	}
	.bofang .two a{
		font: 16px/29px "微软雅黑";
		display: block;
		width:62px;
		height: 29px;
		background: rgba(0,0,0,0.3);
		position: absolute;
		top: -25px;
		right: 0;
		color: white;
	}
	.bofang .thr{
		position: relative;
		top: 700px;
	}
	.bofang .thr p:nth-of-type(1) span:nth-of-type(1){
		font: 14px "微软雅黑";
		color: #126ffb;
		border: 1px solid #126ffb;
		padding: 0px 6px;
		border-radius: 30px;
	}
	.bofang .thr p:nth-of-type(1) span:nth-of-type(2){
		font: 28px "微软雅黑";
		color: black;
	}
	.bofang .thr p:nth-of-type(2){
		margin-top: 10px;
		font: 22px "微软雅黑";
		color: black;
	}
	.bofang .four{
		height: 150px;
		width: 100%;
		overflow: hidden;
		position: relative;
		top: 720px;
		left: 0;
	}
	.bofang .four p:nth-of-type(1){
		font: 26px/75px "微软雅黑";
		color: #CCCCCC;
	}
	.bofang .four p:nth-of-type(2){
		font: 26px/75px "微软雅黑";
		color: black;
	}
	
	.bofang .five{
		width: 100%;
		height: 42px;
		position: relative;
		top: 750px;
		left: 0;
	}
	.bofang .five p{
		float: left;
	}
	.bofang .five .prevs{
		width: 55px;
		height: 42px;
		position: absolute;
		top: 12%;
		left: 25%;
		background: url(../../assets/bofang/prev.png) no-repeat;
	}
	.bofang .five .imgbos{
		width: 55px;
		height: 42px;
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -17.5px;
		background: url(../../assets/bofang/bo.png) no-repeat;
	}
	.bofang .five .imgtings{
		width: 55px;
		height: 42px;
		position: absolute;
		top: 0;   
		left: 50%;
		margin-left: -17.5px;
		background: url(../../assets/bofang/tings.png) no-repeat;
	} 
	.bofang .five .nexts{
		width: 55px;
		height: 42px;
		position: absolute;
		top: 12%;
		right: 25%;
		background: url(../../assets/bofang/next.png) no-repeat;
	}
	.bofang .six{
		width: 100%;
		height: 98px;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.bofang .six span{
		display: inline-block;
		height: 100%;
		line-height: 98px;
		margin: auto 6.5%;
	}
	.bofang .six span img{
		vertical-align: middle;
	}
	.dlb{
		display: none;
	}
	.bofang .dliebiao{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.2);
		z-index: 10;
	}
	.bofang .dliebiao .guanbi{
		position: absolute;
		z-index: 12;
		bottom: 0;
		background: white;
		height: 98px;
		width: 100%;
		font: 28px/98px "微软雅黑";
		box-shadow: 0 -5px 30px #CCCCCC;
	}
	.bofang .dliebiao .lis{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 11;
		width: 100%;
		height: 800px;
		background: white;
	}
	.bofang .dliebiao .lis div{
		height: 114px;
		width: 100%;
		text-align: left;
		border-bottom: 1px solid #CCCCCC;
	}
	.bofang .dliebiao .lis div img{
		vertical-align: middle;
	}
	.bofang .dliebiao .lis div img:nth-of-type(1){
		margin-top: -14px;
		margin-left: 7.5%;
	}
	.bofang .dliebiao .lis div span{
		font: 28px/114px "微软雅黑"; 
		margin-left: 5%;
	}
	.bofang .dliebiao .lis div img:nth-of-type(2){
		margin-left: 7%;
		margin-top: -18px;
	}
	.bofang .dliebiao .lis div img:nth-of-type(3){
		margin-left: 14%;
		margin-top: -18px;
	}
	.bofang .dliebiao .lis div img:nth-of-type(4){
		margin-left: 14%;
		margin-top: -18px;
	}
	.bofang .dliebiao .lis ul{
		width: 100%;
		height: 670px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.bofang .dliebiao .lis ul li{
		list-style: none;
		width: 100%;
		height: 80px;
		border-bottom: 1px solid #CCCCCC;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(1){
		float: left;
		height: 100%;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(1){
		font: 26px/80px "微软雅黑";
		color: black;
		margin-left: 60px;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(2){
		font: 12px "微软雅黑";
		color:#f39800;
		border: 1px solid #f39800;
		border-radius: 8px;
		padding: 3px 5px;
		margin-left: 10px;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(1) span:nth-of-type(3){
		font: 22px "微软雅黑";
		color:#CCCCCC;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(2){
		float: right;
		height: 100%;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(2) .xihuanhui{
		display: inline-block;
		width: 26px;
		height: 23px;
		background: url(../../assets/bofang/lie7.png);
		margin-right: 30px;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(2) .xihuanred{
		display: inline-block;
		width: 26px;
		height: 23px;
		background: url(../../assets/bofang/lie6.png);
		margin-right: 30px;
	}
	.bofang .dliebiao .lis ul li p:nth-of-type(2) .shanchu{
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/bofang/lie8.png);
		margin-right: 60px;
		margin-top: 23%;
	}
</style>