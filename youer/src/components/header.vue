<template>
	<div :class='{headerWrap:true, green:bol}'>
		<span>{{ txt }}</span>
	</div>
</template>

<script>
export default {
	props: ['txt', 'bol']
}

</script>

<style>
	.headerWrap {width: 100%; height: 50px;background: #f7f7f7; text-align: center; line-height: 44px; position: relative;z-index: 997;}
	.green {background: #48bd5a;}
	.headerWrap img {width: 22px; position: absolute;}
	.headerWrap .rightImg {top: 10px; right: 10px;}
	.headerWrap .leftImg {top: 10px; right: 50px;}
	
	
	
</style>