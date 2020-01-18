<template>
	<view class="videodetail_box">
		<video class="courseVideo" id="courseVideo" src="../.././static/video/75d.mp4" @error="videoErrorCallback"
		 :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
		 
		 <view class="videodetail_msg">
		 	明月几时有，把酒问青天
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  
	.courseVideo {
		width: 100%;
		height: 536px;
	}
	
	.videodetail_msg{
		padding: 10px;
	}
</style>
