<template>
	<!-- 标签页组件 -->
	<view class="maxwrap">
		<view class="tabss">
			<view class="who" v-for="(item,index) in tabs" :key="index" :data-index="index" @tap="changeState" :index="index"
				:item="item" :class="item.isActive?'active':''"
>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="content">
			<slot name="listslot"></slot>
		</view>


	</view>

</template>

<script>
	export default {
		comments: {
			options: {
				multipleSlots: true
			},


		},
		/**
		 * 组件的属性列表
		 */
		props: {
			tabs: {
				type: Array,
				value: []
			}
		},

		data() {
			return {
				
			}

		},
		methods: {
			changeState(e) {
				const {
					index
				} = e.currentTarget.dataset;
				this.$emit('checkactive',index);
				
			},



		}

	}
</script>

<style lang="less">
	.tabss {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		height: 80rpx;
		width: 100%;
        .active{
			color:#ff7159
		}
		.who {
			//border: 1px solid #C0C0C0;
			width: 33.3%;
			text-align: center;
			line-height: 80rpx;

			
		}
	}
</style>
