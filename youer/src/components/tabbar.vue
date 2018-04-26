<template>
	<div>
		<div class='tabbar'>
			
			<Item>
			</Item>
			<Item txt='听' mark='ting/faxian' :sel='selected' @change='getVal'>
			</Item>
			<Item txt='看' mark='kan' :sel='selected' @change='getVal'>
			</Item>
			<Item txt='唱' mark='chang' :sel='selected' @change='getVal'>
			</Item>
			<Item mark='sousuo'>
				<img src="../assets/faxian/sousuo.png"  slot='left' :sel='selected' @change='getVal'  class="right"/>
			</Item>
		</div> 
		<Xbofang></Xbofang>
	</div>
</template>

<script>
import Item from './item'
import Xbofang from './xbofang'

export default {
	components: {
		Item,
		Xbofang,
	},
	data: function(){
		return {
			selected: 'ting/faxian'
		}
	},
	methods: {
		getVal: function(val){
			this.selected = val;
		}
	}
}

</script>

<style>
	.tabbar {width: 100%; height: 88px;position: fixed; left: 0; top: 0;
	background: -webkit-linear-gradient(#1a78f1, #0d86fa);
	background: -moz-linear-gradient(#1a78f1, #0d86fa);
	background: -o-linear-gradient(#1a78f1, #0d86fa);
	background: -webkit-gradient(#1a78f1, #0d86fa);
	background: linear-gradient(#1a78f1, #0d86fa);
	 z-index: 997;}

</style>