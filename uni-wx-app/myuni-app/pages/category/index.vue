<template>
	<view class="pagewrap">
		<Search />
		<view class="category">
			<scroll-view class="leftMenu" scroll-y="true">
				<view hover-class="active" hover-stay-time=1500 v-for="(item,index) in categoryList"
					:key="item.cat_id" :data-index="index" @tap="clickChangeProduct">
					{{item.cat_name}}

				</view>
			</scroll-view>
			<scroll-view class=" rightContent" scroll-y="true">
				<view class="product" v-for="(item2,index2) in productList" :key="index2">
					<view class="topic">
						<view>{{item2.cat_name}}</view>
					</view>

					<view class="list" v-for="item3 in item2.children" :key="item3.cat_id"  :data-cid="item3.cat_id" @tap="jumpto">
						
							<view class="left">
								<image :src="item3.cat_icon" mode="widthFix" lazy-load="false" />
							</view>
							<view class="buy">
								<view>类型:{{item3.cat_name}}</view>
								<text class="iconfont iconhouse"></text>
							</view>
						
					</view>

				</view>
			</scroll-view>

		</view>

	</view>
</template>

<script>
	import {
		categoryRequest
	} from "../../request/category.js"
	import Search from "../../componets/search/index.vue"
	export default {
		components: {
			Search,
		},
		data() {
			return {
				categoryList: [],
				productList: [],
				selectedIndex: 0,
				

			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: async function(options) {
			// 获取请求信息
			const res = await categoryRequest({
				url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"
			});
			this.categoryList = res.data.message,
				this.productList = res.data.message[0].children

		},
		computed: {


		},
		methods: {
			
			clickChangeProduct(event) {
				const {
					index
				} = event.currentTarget.dataset;

				this.selectedIndex = index,
					this.productList = this.categoryList[index].children
					
			},
			jumpto(event){
				const {
					cid
				} = event.currentTarget.dataset;
				
				uni.navigateTo({
				    url: '../goodsList/index?cid='+encodeURIComponent(JSON.stringify(cid))
				});
			}

		}

	}
</script>

<style lang="less">
	@import "../../alibaba-icon/searchicon.css";

	.pagewrap {
		.category {
			width: 100%;

			.leftMenu {
				width: 20%;
				float: left;
				background-color: orange;
				margin-right: 5rpx;

				view {
					height: 100rpx;
					//border: 1px solid green;
					text-align: center;
					line-height: 100rpx;
					background-color: #C0C0C0;
				}

				.active {
					height: 100rpx;
					//border: 1px solid green;
					text-align: center;
					line-height: 100rpx;
					background-color: white;
					color: orange;
				}
				
			}

			.rightContent {
				width: 79%;
				//background-color: green;
				float: right;

				.topic {
					margin-top: 10rpx;
					border-radius: 72rpx;
					width: 200rpx;
					height: 80rpx;
					background-color: #ff7159;
					text-align: center;
					line-height: 80rpx;
					color: white;
				}

				.list {
					
						margin-top: 5rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						height: 200rpx;
						margin-bottom: 30rpx;

						.left {
							width: 50%;

							//background-color: yellow;
							image {
								width: 100px;
								height: 100rpx;
								border: 1px solid #DCDFE6;
							}
						}

						;

						.buy {
							text-align: right;
							width: 50%;
							font-size: 32rpx;
							font-family: Arial, Helvetica, sans-serif;
							font-weight: bold;
							color: #3B4144;
							//background-color: pink;
							position: relative;
							margin-right: 20rpx;

							text {
								position: absolute;
								bottom: 10rpx;
								right: 20rpx;
								color: #ff7159;
							}
						}
					}




				
			}
		}
	}
</style>
