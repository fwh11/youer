<template>
	<div class="kan">
		<div class='nav'>
			<span :class='{active: nowIndex==0}' @click='nowIndex=0'>
				<router-link to='/kan/zhibo'>直播</router-link>
			</span>
			<span @click='nowIndex=1' :class='{active: nowIndex==1}'>
				<router-link to='/kan/duanshipin'>短视频</router-link>
			</span>
			<span @click='nowIndex=2' :class='{active: nowIndex==2}'>
				<router-link to='/kan/mv'>MV</router-link>
			</span>
		</div>
		<div class="tops">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {

		},
		data: function() {
			return {
				nowIndex: 0
			}
		},
		methods: {

		}
	}
</script>

<style type="text/css">
	.kan {
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y: scroll;
	}
	
	.nav {
		width: 100%;
		height: 300px;
		line-height: 70px;
		background: -webkit-linear-gradient(#0d86fa, #51b3f9);
		background: -moz-linear-gradient(#0d86fa, #51b3f9);
		background: -o-linear-gradient(#0d86fa, #51b3f9);
		background: -webkit-gradient(#0d86fa, #51b3f9);
		background: linear-gradient(#0d86fa, #51b3f9);
		position: fixed;
		z-index: 998;
		top: 86px;
		border-radius: 0 0 50% 50%;
	}
	
	.nav span {
		display: block;
		width: 33.3%;
		float: left;
	}
	
	.nav span a {
		color: #7cc7fc;
		font-size: 26px;
		text-decoration: none;
	}
	
	.nav .active a {
		border-bottom: 2px solid #4cb6fc;
		color: white;
		padding: 10px 20px
	}
	
	.tops {
		margin-top: 530px;
	}
</style>