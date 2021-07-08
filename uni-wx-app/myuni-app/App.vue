<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*
	给页面上常用的标签元素设置公共样式
	在微信小程序中不支持通配符 *
	*/
	page,view,text,navigator,swipper,swipper-item{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	}
	page{
	--themeColor:#ff7159;
	font-size: 28rpx;
	}
	ul {
		list-style:none;
		margin: 0px;
		padding: 0px;
	}
	li{
		list-style:none;
		margin: 0px;
		padding: 0px;
	}
</style>
