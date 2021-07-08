<template>
	<view class="goodslist">
		<Tabs :tabs="tabs" @checkactive="checkActive">
			<view slot="listslot" v-if="tabs[0].isActive==true">
				<view class="products">
					<!-- 这是基础模板 -->
					
					<view class="item" v-for="(item,index) in goodsList" :key="item.goods_id" :index="index" :item="item" :data-gid="item.goods_id" @tap="getgid">
						
						<view class="picture">
							<image class="imagei" src="https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg"
								mode="widthFix" />
						</view>
						<view class="text">
							<view class="msg">
								{{item.goods_name}}
							</view>
							<view class="hot">
								限购2件
							</view>
							<view class="buy">
								<text>￥{{item.goods_price}}</text>
								<text class="iconfont iconcart">
								</text>
							</view>
						</view>
						
					</view>
					
				</view>
				
			</view>
			<view slot="listslot" v-else-if="tabs[1].isActive==true">销量
				数据</view>
			<view slot="listslot" v-else-if="tabs[2].isActive==true">价格
				排列</view>
		</Tabs>



	</view>
</template>

<script>
	import {
		goodsListRequest
	} from "../../request/goodslist.js"
	import Tabs from "../../componets/tabs/tabs.vue"
	export default {
		components: {
			Tabs
		},
		async onLoad(options) {
          // console.log('拿到cid',options.cid)
			this.paramsData.cid = options.cid;
			this.getList()
               
		},
		
		data() {
			return {
				goodsList: [],
				tabs: [{
						id: 0,
						name: "热卖",
						isActive: true
					},
					{
						id: 1,
						name: "销量",
						isActive: false
					},
					{
						id: 2,
						name: "价格",
						isActive: false
					}
				],
				paramsData: {
					query: "",
					cid: 5,
					pagenum: 1,
					pagesize: 10
				},
				totalPage: 0,
				

			}


		},
		//下拉刷新
		 onPullDownRefresh() {
		            //下拉的生命周期
		            this.getNews()
		        },
//上拉加载
		onReachBottom() {
			

			this.getnewsList();
			

		},
		methods: {
			getgid(e){
				const {gid}=e.currentTarget.dataset;
				
				uni.navigateTo({
				    url: '../goodsDetail/index?goods_id='+encodeURIComponent(JSON.stringify(gid))
				});
				
				
			}
			,
			getNews(){
				this.paramsData.pagenum = 1;
				this.goodsList = []
				this.getList();
				uni.stopPullDownRefresh()
			}
			,
			async getList() {
				const res = await goodsListRequest({
					url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
					method: 'GET',
					data: this.paramsData
				});

				this.goodsList = [...this.goodsList, ...res.data.message.goods]

				this.totalPage = res.data.message.total /
					this.paramsData.pagesize;

				//console.log(res.data.message.goods)

			},
			checkActive(i) {
				//console.log('zizujian',i)
				this.tabs.filter(function(item) {
					if (item.id == i) {
						item.isActive = true
					} else {
						item.isActive = false
					}
				})


			},
			getnewsList() {
				if (this.paramsData.pagenum >= this.totalPage) {
					uni.showToast({
					title: '到底了!',
					})

				} else {
					this.paramsData.pagenum++;
					this.getList();
				}


			}

		}
	}
</script>

<style lang="less">
	@import "../../alibaba-icon/searchicon.css";

	

	.products {
		background-color: #e7e7e7;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;

		.item {
			margin-top: 10rpx;
			margin-bottom: 5rpx;
			width: 48%;
			background-color: white;
            
			//border: 1px solid green;
			.picture {
				width: 100%;
				
				//border: 1px solid red;
				.imagei{
					width: 100%;
				}

			}

			;

			.text {
				margin-top: 10rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;

				.hot {
					margin-top: 10rpx;
					color: #ff7159;
					border: 1px solid #FF7159;
					width: 120rpx;
					height: 50rpx;
					border-radius: 15rpx;
					text-align: center;
					line-height: 50rpx;
				}

				;

				.buy {
					margin-top: 10rpx;
					color: #ff7159;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					text:nth-child(2) {
						width: 50rpx;
						height: 50rpx;
						border: 1px solid #FF7159;
						border-radius: 50rpx;
						text-align: center;
						line-height: 50rpx;
					}
				}
			}
		}
	}
</style>
