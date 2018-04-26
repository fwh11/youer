<template>
  <div id="app">
  	<div id="mubu"></div>
  	<div id="cebianlan">
				<img src="../img/sangang.png"/>
		</div>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'

export default {
  name: 'app',
  components: {
    Tabbar
  },
  beforeCreate: function(){
    this.$router.push('/');
  }
}
</script>

<style>
* {margin: 0; padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: white;
	z-index: 1;
	transition: 2s;
}
#mubu{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.2);
	z-index: 5000;
	display: none;
}
#cebianlan{
	width: 20%;
	height: 88px;
	color: white;
	position: absolute;
	left: 0px;
	top: 0px;
	line-break: 88px;
	z-index: 1200;
}
#cebianlan img{
	margin-top: 37px;
	margin-left: -30px;
	width: 32px;
}
</style>
