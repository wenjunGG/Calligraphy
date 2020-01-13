<template>
	<view class="exchange_box">
		<view class="exchange_item">
			<view class="item_left">
				<view class="i_left_icons">
					<image src="../../static/home/my.png" mode=""></image>
				</view>
				<view class="i_left_content">
					<view class="left_content_title">
						刘慧龙
						<text>讲师</text>
					</view>
					<view class="left_content_msg">
						只要是优秀的，好的，无论古今都可以学习，
						
					</view>
					<view></view>
				</view>
			</view>
		</view>
		<view class="exchange_item">
		  <view class="item_right">
			  <view class="i_right_content">
			  	<view class="right_content_msg">
			  		无论古今都可以学习
			  	</view>
			  	<view></view>
			  </view>
			  <view class="i_right_icons">
			  	<image src="../../static/home/my.png" mode=""></image>
			  </view>
		  </view>
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
	.exchange_box {
		.exchange_item {
			padding: 10px 0px;
			font-size: 12px;
		}
	}

	.item_left {
		display: flex;
		justify-content: flex-start;
		
		.i_left_icons{
			width: 28px;
			height: 28px;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.i_left_content{
			    margin-left: 8px;
			    margin-right: 38px;
			.left_content_title{
				font-size: 14px;
				text{
					color: #ccc;
				}
			}
			.left_content_msg{
				margin-top: 5px;
				    padding: 7px;
				    background-color: #eee;
				    border-radius: 9px;
				    letter-spacing: 1px;
			}
		}
	}

	.item_right {
		display: flex;
		justify-content: flex-end;
		
		.i_right_icons{
			width: 28px;
			height: 28px;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.i_right_content{
			    margin-left: 38px;
			    margin-right: 8px;
			
			.right_content_msg{
				margin-top: 5px;
				    padding: 7px;
				    background-color: #ccc;
				    border-radius: 9px;
				    letter-spacing: 1px;
			}
		}
	}
</style>
