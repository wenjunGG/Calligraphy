<template>
	<view class="teacher_box">
		<view class="t_box_image">
			<image src="../../static/home/my.png" mode=""></image>
		</view>
		<view class="t_box_info">
			<view class="t_info_name">老师:<text>刘慧龙</text></view>
			<view class="t_info_detail">中国书法家协会会员，高效教师</view>
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
	.teacher_box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		background-color: #eee;
		padding: 10px 10px;
		border-radius: 9px;

		.t_box_image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: 10px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.t_box_info {
			.t_info_name {
				font-size: 16px;
				line-height: 24px;
				height: 24px;
			}

			.t_info_detail {
				font-size: 14px;
				color: #555;
				letter-spacing: 1px;
			}
		}
	}
</style>
