<template>
	<view class="cart">
		<view class="bg">
			<text class="iconfont icon-shouye"></text>
			<text>管理购物车</text>
		</view>
		<scroll-view scroll-y=true class="list">
			<view class="per" v-for="item in goodsList" :key="item.goods_id">
				<checkbox color="var(--themeColor)" />
				<image  mode="widthFix" :src="item.goods_small_logo" />
				<view class="detail">
					<view class="text">{{item.goods_name}}</view>
					<view class="button">正在热销</view>
					<view class="msg">
						<view class="price">
							{{item.goods_price}}
						</view>
						<view class="number">
							<view class="btn">-</view>
							<view class="ant">1</view>
							<view class="btn">+</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: {}

			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			
			let cart = uni.getStorageSync("cart") || {};
			console.log('拿到本地了吗',cart)
			if (cart.length > 0) {
				
				this.goodsList = cart
				console.log('shayang',this.goodsList)
			}
		},




	}
</script>

<style lang="less">
	.number{
		display: flex;
		flex-direction: row;
		width: 300rpx;
		height: 100rpx;
		justify-content: space-around;
		.btn{
			border: 1px solid #DCDFE6;
			width: 40rpx;
			height: 40rpx;
			text-align: center;
		}
		.ant{
			width: 30rpx;
			height: 20rpx;
		}
	}
</style>
