<template>
	<view class="coursebar">
		<view class="course_care">
			关注课程
		</view>
		<view class="course_give">
			赠送好友
		</view>
		<view class="course_price">
			<text>￥19.9</text>
			<text>立即购买</text>
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
   .coursebar{
	    display: flex;
		justify-content: space-around;
		align-items:center;
		height: 40px;
		border-top: 1px solid #ccc;
		font-size: 12px;
	   }
	.course_price{
		background-color: #f43530;
		padding: 5px 7px;
		border-radius: 19px;
		color: #fff;
		font-size: 14px;
	}
</style>
