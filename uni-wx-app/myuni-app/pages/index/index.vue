<template>
	<view class="home">

		<Search />
		<view class="banner">
			<!-- swiper组件 -->
			<swiper autoplay="true" circular="true" indicatorDots="true" indicator-color="white"
				indicator-activecolor="#ff7159">
				<swiper-item v-for="item in swipperList " :key="item.goods_id">
					<navigator url="item.navigator_url" open-type="navigate">
						<image mode="widthFix" :src="item.image_src" />
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 获取到分类信息 -->
		<view class="category">
			<view class="type" v-for="item in categoryList" :key="item.name">
				<image mode="widthFix" :src="item.image_src" alt="" />
			</view>
		</view>
		<!-- 产品分类信息 -->
		<view class="goodslist">
			<view class="product" v-for="(item,index) in goodsList" :index="index" :item="item" :key="index">
				<view class="headerlogo">
					<image :src="item.floor_title.image_src" mode="widthFix" lazy-load="true" />
				</view>
				<view class="list">
					<view class="imagelist" v-for="(item2,index2) in item.product_list" :index="index2" :item="item2"
						:key="item2.name">
						<image :src="item2.image_src" :mode="
						index2==0?'widthFix':'aspectFit'" lazy-load="true" />
					</view>
				</view>
			</view>
		</view>






	</view>
</template>

<script>
	// 导入请求模块
	import {
		bannerRequest
	} from "../../request/index.js"
	import Search from "../../componets/search/index.vue"
	export default {
		components: {
			Search,
		},
		data() {
			return {
				swipperList: [],
				categoryList: [],
				goodsList: []


			}
		},
		//options(Object)
		onLoad: function(options) {
			bannerRequest({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					method: 'GET',
				})
				.then((res) => {

					this.swipperList = res.data.message
				});
			// 获取到分类信息
			bannerRequest({
				url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
				method: 'GET',
			}).then((res) => {
				this.categoryList = res.data.message

			});
			//获取商品组合列表
			bannerRequest({
				url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
				method: 'GET',
			}).then((res) => {
				this.goodsList = res.data.message

			});

		},
		methods: {

		}
	}
</script>

<style lang="less">
	

	.home {
		font-size: 14px;
		margin: 0px;
		padding: 0px;
		line-height: 24px;

		.banner {

			/* 计算swiper的高度
swiper的宽度 / swiper的高度 = 原图的宽度/原图的高度
swiper的高度 = swiper的宽度*原图的高度 / 原图的宽度
*/
			swiper {
				height: calc(100vw * 352 / 1125);
			}

			swiper image {
				width: 100%;
			}
		}

		.category {
			display: flex;

			.type {
				image {
					width: 190rpx;
				}
			}
		}

		.goodslist {
			margin-top: 20rpx;
			.list {
				display:flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-around;
				position: relative;
				height: 460rpx;
				.imagelist{
					width: 33%;
					height: 340rpx;
					//border: 1px silid green;
					//height: 420rpx;
					image{
						width: 100%;
						//border: 1px solid red;
					};
			
				};
				.imagelist:nth-child(2){
					height: 120rpx;
					image{
						height: 200rpx;
					}
				}
				
				.imagelist:nth-child(3){
					height: 120rpx;
					image{
						height: 200rpx;
					}
				}
				.imagelist:nth-child(4){
					height: 120rpx;
					position: absolute;
					bottom: 130rpx;
					right: 250rpx;
					image{
						height: 200rpx;
					}
				}
				.imagelist:nth-child(5){
					position: absolute;
					bottom: 130rpx;
					right: 0rpx;
					height: 120rpx;
					image{
						height: 200rpx;
					}
				}
				
				
				
				
			}
			


		}



	}
</style>
