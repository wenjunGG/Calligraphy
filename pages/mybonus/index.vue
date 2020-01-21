<template>
	<view class="mybonus_box">
		<view class="bd_content">

			<!--金额池-->
			<view class="mybonus_info">
				<!--总收入-->
				<view class="bonus_totalmoney">
					<text class="bonus_total">479.96</text>
					<text class="bonus_explain">总余额</text>
				</view>
				<!--各项收入-->
				<view class="bonus_eachitem">
					<view class="">
						<view class="eachitem_title">累计收入</view>
						<text class="eachitem_price">1270.96</text>
					</view>
					<view>
						<view class="eachitem_title">今日收入</view>
						<text class="eachitem_price">127.85</text>
					</view>
					<view>
						<view class="eachitem_title">本周收入</view>
						<text class="eachitem_price">340.85</text>
					</view>
				</view>
			</view>

			<!--来源-->
			<view class="mybonus_source">
				<view class="source_item" v-for="(item,index) in listSource" :key="index" @click="source_click(item)">
					<text>收入明细</text>
					<text class="color_right">></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listSource: [{
						name: '收入明细',
						index: 1
					},
					{
						name: '体现记录',
						index: 2
					},
					{
						name: '消费记录',
						index: 3
					}
				]
			};
		},
		methods: {
			//来源按钮点击
			source_click(item) {
				switch(item.index){
					case 1:
					//收入明细
					uni.navigateTo({
						url: `/pages/mybonus/incomedetails`
					});
					break;
					case 2:
					//体现记录
					break;
					case 3:
					//消费记录
					break;
				}
			}
		},
	}
</script>

<style lang="scss">
	.mybonus_box {
		margin-top: 20px;
	}

	.color_right {
		color: #aaa;
	}


	/**金额池**/
	.mybonus_info {
		background-color: #e45855;
		padding: 30px 14px;
		color: #fff;
		font-size: 14px;
		border-radius: 9px;

		//总收入
		.bonus_totalmoney {
			display: flex;
			flex-flow: column;
			align-items: center;

			.bonus_total {
				font-size: 18px;
				font-weight: bolder;
			}
		}

		//收入各项指标
		.bonus_eachitem {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 15px;

			.eachitem_title {
				font-size: 12px;
			}

			.eachitem_price {
				font-size: 14px;
				font-weight: bolder;
			}
		}
	}

	/**来源**/
	.mybonus_source {
		background-color: #eee;
		border-radius: 9px;
		margin-top: 20px;
		font-size: 14px;

		.source_item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 10px;
			border-bottom: 1px solid #ccc;
		}

		.source_item:last-child {
			border-bottom: none;
		}
	}
</style>
