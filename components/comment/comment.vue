<template>
	<view class="comment_box">
		<view class="comment_body">
			<input class="uni-input" focus placeholder="购买后才能评论" />
		</view>
		<view class="send">
			点赞
		</view>
		<view class="send">
			收藏
		</view>
		<view class="send">
			发送
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

	.comment_box {
		display: flex;
		justify-content: space-around;
		height: 40px;
		align-items: center;
		font-size: 12px;
	}

	.comment_body {
		background-color: #fff;
		border-radius: 9px;
		padding: 2px 14px;

		input {
			width: 242px;
			font-size: 14px;
			height: 1.8em;
		}
	}
</style>
