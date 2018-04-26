 <template>
	<div class="sirenfm">
		<div class="siren">
			<div class="navst">
				<router-link to='/ting/faxian'><img src="../../../assets/tingimg/s1.png" /></router-link>
				<span>私人FM</span>
			</div>
		</div>
		<Srbanner swiperid='go'>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/one.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/two.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/thr.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/four.png'/>
				</div>
				<div slot='swiper-con' class='swiper-slide'>
					<img src='../../../assets/banner/five.png'/>
				</div>
		</Srbanner>
		<div class="sirenfm_on">
			<h1>热门</h1>
			<table>
				<tr>
					<td><img src="../../../assets/tingimg/T002R300x300M0000000SHld1Q6lcp.jpg"/><br />个性电台</td>
					<td><img src="../../../assets/tingimg/T002R300x300M000000aGEuj4LA4J8.jpg"/><br />随心听</td>
					<td><img src="../../../assets/tingimg/T002R300x300M000000dkVx72WmULC.jpg"/><br />KTV必点歌</td>
				</tr>
				<tr>
					<td><img src="../../../assets/tingimg/T002R300x300M000000DsN1p3axWMb.jpg"/><br />疗伤</td>
					<td><img src="../../../assets/tingimg/T002R300x300M000000xXybV1ZAk5S.jpg"/><br />伤感</td>
					<td><img src="../../../assets/tingimg/T002R300x300M000001b4OLb4TAydk.jpg"/><br />励志</td>
				</tr>
			</table>
		</div>
		<div class="two clear">
			<h1>推荐</h1>
			<div class="two_1">
				<img src="../../../assets/tingimg/w01.png" class="two_img" />
				<p>歌者乔玉</p>
				<span>在播: 吻别 </span>
				<div class="floleft">
					<span>Dac-综皇若辰</span>
					<span>29.3万人气</span>
				</div>
			</div>
			<div class="two_2">
				<img src="../../../assets/tingimg/w02.png" class="two_img" />
				<p>一米八三的夏雨</p>
				<span>在播: 飘洋过海来看你 </span>
				<div class="floright">
					<span>By安颜unpue</span>
					<span>20.4万人气</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Srbanner from '../../srbanner'
	export default {
		components: {
			Srbanner
		},
		data: function(){
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


<style type="text/css">
	.cleart:after{
		content: '';
		display: block;
		clear: both;
	}
	.sirenfm{
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
		top: 0;
		left: 0;
		z-index: 3200;
		background: white;
	}
	.siren .navst{
		width: 100%;
		height: 88px;
		background: #0d86fa;
		text-align: center;
	}
	.siren .navst img{
		float: left;
		margin-left: 20px;
		margin-top: 3%;
	}
	.siren .navst span{
		margin-left: -5%;
		font: 36px/88px "微软雅黑";
		color: white;
	}
	
	
	
	
	
	
	.sirenfm_on{
		margin-top: 15px;
		padding-bottom: 15px;
		border-bottom: 1px dashed #fff;
	}
	.sirenfm_on h1{
		margin-top: 30px;
		margin-bottom: 30px;
		color: black;
		margin-left: 20px;
		text-align: left;
	}
	.sirenfm_on table{
		margin-top: 10px;
		width: 100%;
	}
	.sirenfm_on table tr td{
		width: 33%;
		font: 30px "微软雅黑";
		color: black;
		display: inline-block;
		margin: 10px auto;
	}
	.sirenfm_on table tr td img{
		width: 148px;
		height: 148px;
		border-radius: 50%;
	}
	
	
	.sirenfm .two {
		width: 100%;
		margin-top: 10px;
	}
	
	.sirenfm .two h1 {
		font: 32px "微软雅黑";
		font-weight: bold;
		padding: 15px 0;
		text-align: left;
		margin-left: 25px;
	}
	
	.sirenfm .two div {
		width: 46%;
		float: left;
		margin-left: 2.7%;
		background: white;
		box-shadow: 0 10px 30px #CCCCCC;
		border-radius: 10px;
	}
	
	.sirenfm .two .two_img {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 0 30px #CCCCCC;
	}
	
	.sirenfm .two div p {
		font: 24px "微软雅黑";
		color: black;
		text-align: left;
		margin: 4px 8px;
	}
	
	.sirenfm .two div span {
		font: 20px "微软雅黑";
		width: 100%;
		display: inline-block;
		margin: auto 8px auto 10px;
		padding-bottom: 10px;
		text-align: left;
	}
	
	.sirenfm .two div span a {
		margin-right: 15px;
	}
	
	.sirenfm .two .two_1 {
		position: relative;
	}
	
	.sirenfm .two .two_1 .floleft {
		width: 95%;
		position: absolute;
		bottom: 22%;
		background: rgba(0, 0, 0, 0.3);
		box-shadow: none;
	}
	
	.sirenfm .two .two_1 .floleft span {
		font: 18px "微软雅黑";
		color: white;
		width: 40%;
		text-align: center;
	}
	.sirenfm .two .two_2 {
		position: relative;
	}
	
	.sirenfm .two .two_2 .floright {
		width: 95%;
		position: absolute;
		bottom: 22%;
		background: rgba(0, 0, 0, 0.3);
		box-shadow: none;
	}
	
	.sirenfm .two .two_2 .floright span {
		font: 18px "微软雅黑";
		color: white;
		width: 40%;
		text-align: center;
	}
</style>