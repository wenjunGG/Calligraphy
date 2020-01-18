<template>
	<!--小视屏-->
	<view class="bd_content">
		<view class="videoContent">
			<view class="cs_c_item" v-for="(item, ccindex) in 10" :key="ccindex" @click="video_click(item)">
				<view class="cs_item_image"><image src="../../static/home/regularstruct.png" mode=""></image></view>
				<view class="cs_item_msg">王羲之圣教序白字解析视频版</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		video_click(item){
			uni.navigateTo({
				url: `/pages/SmallVideo/videoDetail?id=${item}`
			})
		}
	},
};
</script>

<style lang="scss">
	.bd_content{
		padding: 15px;
	}
	
	
/**课程内容**/
.videoContent {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	.cs_c_item {
		 position: relative;
		width: 49%;
		margin: 0rpx 0rpx 20rpx 0rpx;

		.cs_item_image {
			width: 100%;
			height: 400rpx;
			margin-bottom: 20rpx;
		}
	}

	.cs_item_msg {
		    position: absolute;
		    font-size: 12px;
		    bottom: 14px;
		    color: #fff;
		    padding: 5px;
	}
}
</style>
