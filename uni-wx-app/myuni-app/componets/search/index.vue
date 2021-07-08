<template>
	<view class="search">
	<navigator class="navigator" url="../../pages/search/index" open-type="navigate">
	请输入关键字搜索
	</navigator>
	<!-- 字体图标 -->
	<text class="iconfont iconsearch"></text>
	</view>
</template>

<script>
 

	
</script>

<style lang="less">
	
	@import "../../alibaba-icon/searchicon.css";
	.search{
	width: 100%;
	height: 100rpx;
	background-color: #ff7159;
	padding: 15rpx;
	position: relative;
	.navigator{
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	height: 100%;
	background-color: white;
	border-radius: 100rpx;
	text-align: left;
	line-height: 65rpx;
	padding-left: 10rpx;
	color: gray;
	}
	.iconfont{
	position: absolute;
	right: 50rpx;
	top: 30rpx;
	color: gray;
	}
	}
</style>
