<template>
	<view class="direct_box">
		<view class="item">
			<view class="direct_img"><image src="../../static/home/essays.png" mode=""></image></view>
			<view class="direct_info">
				<text class="info_name">刘小海</text>
				<text class="info_date">推荐时间:2020-1-20 22:31</text>
			</view>
			<view class="direct_option direct_buy"><text>已下单</text></view>
		</view>
		
		<view class="item">
			<view class="direct_img"><image src="../../static/home/essays.png" mode=""></image></view>
			<view class="direct_info">
				<text class="info_name">刘小海</text>
				<text class="info_date">推荐时间:2020-1-20 22:31</text>
			</view>
			<view class="direct_option"><text>未下单</text></view>
		</view>
		
		<view class="item">
			<view class="direct_img"><image src="../../static/home/essays.png" mode=""></image></view>
			<view class="direct_info">
				<text class="info_name">刘小海</text>
				<text class="info_date">推荐时间:2020-1-20 22:31</text>
			</view>
			<view class="direct_option"><text>未下单</text></view>
		</view>
		
		<view class="item">
			<view class="direct_img"><image src="../../static/home/essays.png" mode=""></image></view>
			<view class="direct_info">
				<text class="info_name">刘小海</text>
				<text class="info_date">推荐时间:2020-1-20 22:31</text>
			</view>
			<view class="direct_option"><text>未下单</text></view>
		</view>
		
		<view class="item">
			<view class="direct_img"><image src="../../static/home/essays.png" mode=""></image></view>
			<view class="direct_info">
				<text class="info_name">刘小海</text>
				<text class="info_date">推荐时间:2020-1-20 22:31</text>
			</view>
			<view class="direct_option"><text>未下单</text></view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.direct_box {
	.item {
		display: flex;
		flex-flow: row;
		font-size: 14px;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		.direct_img {
			width: 40px;
			height: 40px;
		}
		.direct_info {
			display: flex;
			justify-content: flex-start;
			flex-flow: column;
			margin-left: -75px;
			
			.info_name{
				font-weight: bolder;
			}
			.info_date{
				font-size: 12px;
				color: #aaa;
			}
		}
		.direct_option {
			padding: 2px 8px;
			border: 1px solid #aaa;
			border-radius: 10px;
			color: #aaa;
			font-size: 12px;
		}
		.direct_buy{
			border: 1px solid #ff5722;
				color: #f44336;
		}
	}
}
</style>
