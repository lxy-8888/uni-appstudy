<template>

	<view class="goodd">
		<!-- 这是基础模板 -->
		<view class="itemm" v-for="(item,index) in obj" :key="item.goods_id">
			<view class="picture">
				<image :src="item.goods_big_logo" mode="widthFix" />
			</view>
			<view class="text">
				<view class="buy">
					<text>￥{{item.goods_price}}</text>
					<view class="hot">
						限购2件
					</view>
				</view>
				<view class="msg">
					{{item.goods_name}}
				</view>
				<view class="text-wrap">
					<text class="grayb">平台保价.7天无理由退货.极速退款</text>
					<text class="grayb">领券优惠</text>
				</view>

			</view>
			<view class="main">
				<text class="text">商品详细信息</text>

				<rich-text class="pic-wrap" :nodes="strings">
					
				</rich-text>
			</view>

		</view>
		<tab-bar :current="currentTabIndex" backgroundColor="#fbfbfb" color="#999" tintColor="#42b983"
					@click="tabClick"></tab-bar>
	</view>



</template>

<script>
	import {
		bannerRequest
	} from "../../request/index.js"
	export default {

		 onLoad:function(options) {
		// console.log(options.goods_id)
			const goods_id = options.goods_id
			bannerRequest({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
					method: 'GET',
					data: {
						goods_id
					}
				}).then((res)=>{
					this.obj.message = res.data.message;
					this.strings = res.data.message.goods_introduce;
					//console.log('回来的数据',this.obj)
				})
				

					
				


		},
		data() {
			return {
				obj: {
					message: {},

				},
				strings: "",
				currentTabIndex: 1
				
			
			}
		},
		methods: {
				tabClick(index) {
							//console.log('返回tabBar索引：' + index)
							this.currentTabIndex = index;
							console.log('点了谁',index)
							if (this.currentTabIndex == 4) {
								let arr=uni.getStorageSync('cart') || [];
								arr.push(this.obj.message)
							uni.setStorageSync('cart', arr);
							uni.switchTab({
							url: "/pages/cart/index"
							})
							}
						},

		}


	}
</script>

<style lang="less" scoped>
	.itemm {
		width: 100%;
		background-color: white;

		.picture {}

		.text {
			.text-wrap {
				height: 180rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.grayb {
					border-radius: 10rpx;
					padding-left: 20rpx;
					text-align: left;
					line-height: 80rpx;
					//	border: 1px solid red;
					width: 95%;
					height: 80rpx;
					margin: 0 auto;
					background-color: #ebebeb;
					color: #909090;
					font-size: 26rpx;
				}
			}



			.msg {
				padding: 20rpx;
				font-size: 32rpx;
				color: #393939;
			}

			.buy {
				padding-left: 20rpx;
				width: 100%;
				height: 100rpx;
				background: linear-gradient(to right, #ff7159 15%, #ffffff 120%);
				color: white;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				.hot {
					margin-left: 20rpx;
					border: 1px solid white;
					border-radius: 15rpx;
					width: 150rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
				}
			}
		}

		.main {
			.pic-wrap {
				background-color: #ebebeb;
			}

			.text {
				border-bottom: 1px solid #c2c2c2;
				font-size: 36rpx;
				color: #ff7159;
				font-weight: bold;
				padding-left: 20rpx;
				line-height: 100rpx;
				margin-top: 20rpx;
				display: inline-block;
				background-color: #ebebeb;
				width: 100%;
				height: 100rpx;
			}
		}

	}
</style>
