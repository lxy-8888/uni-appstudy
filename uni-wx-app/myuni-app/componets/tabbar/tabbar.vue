<template>
	<view class="wrapp">
		<block v-for="(item,index) in tabList" :key="index" >
			<view class="navigator" :class="currentTabIndex == index ? 'on' : ''" @tap="switchTab(index)">
				<view class="two">
					<view class="icon">
						<text class="iconfont" :class="item.icon"
							:style="[currentTabIndex == index ? {'color': tintColor} : {'color': color}]"></text>
						<text v-if="item.badge" class="uni_badge">{{item.badge}}</text>
						<text v-if="item.badgeDot" class="uni_badge uni_badge_dot"></text>
					</view>
					<view class="text" :style="[currentTabIndex == index ? {'color': tintColor} : {'color': color}]">
						{{item.text}}
					</view>
				</view>
			
			</view>
		</block>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
						icon: 'iconhome',
						text: '首页',
						//badge: 1
					},
					{
						icon: 'iconhome',
						text: '分享',
					},
					{
						icon: 'iconhome',
						text: '购物车',
						badgeDot: true
					},
					{
						icon: 'iconcart',
						text: '立即购买',
						badgeDot: true
					},
					{
						icon: 'iconcart',
						text: '加入购物车',
						badgeDot: true
					}
				],
				currentTabIndex: this.current
			}
		},
		props: {
			current: {
				type: [Number, String],
				default: 0
			},
			backgroundColor: {
				type: String,
				//default: '#fbfbfb'
				default:'white'
			},
			color: {
				type: String,
				default: '#444444'
			},
			tintColor: {
				type: String,
				default: '#000000'
			}
		},
		methods: {
			switchTab(index) {
				this.currentTabIndex = index
				this.$emit('click', index)
				
			}
			
			
		},
	}
</script>

<style lang="less">
	@import "../../alibaba-icon/searchicon.css";

		
		.wrapp {
			
			display: flex;
			flex-direction: row;
		//border: 1px solid red;
			height: 100rpx;
			justify-content: space-evenly;
			text-align: center;
			align-items: center;
			
			.navigator:nth-child(4){
				background-color: #ffaa00;
				font-size: 30rpx;
				width: 25%;
				
			}
			.navigator:nth-child(5){
				background-color: #ff7159;
				font-size: 30rpx;
				width: 25%;
			}
		    .navigator{
				font-weight: bold;
				height: 100rpx;
			    width: 20%;
			//	border: 1px solid green;	
				
			}
		}
	
	
</style>
