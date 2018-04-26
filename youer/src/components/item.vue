<template>
	<div class='itemWrap' v-on:click='fn'>
		<slot name='left'></slot>
		<span :class='{active: bol}' >{{ txt }}</span>
		<slot name='right'></slot>
	</div>
</template>

<script>
export default {
	props: ['txt', 'mark', 'sel'],
	computed: {
		bol: function(){
			if (this.mark == this.sel){
				return true;
			}
			return false;
		}
	},
	methods: {
		fn: function(){
			this.$emit('change',this.mark);
			this.$router.push('/' + this.mark);
		}
	}
}
</script>

<style>
.itemWrap {width: 20%; float: left; text-align: center; font-size:0;border-top: 1px solid #333333;z-index: 99;}
.itemWrap span {display:inline-block;height:20px;color: #abc9f9;font: 34px/88px "微软雅黑";}
.itemWrap .active {color: white;}

.itemWrap .right{
	width: 32px;
	color: white;
	float: right;
	margin-right: 40px;
	margin-top: 30px;
}
</style>