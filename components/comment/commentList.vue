<template>
	<view>
		<view class="commentList_box">
			<!--评论列表-->
			<view class="comment_item">
					<view class="item_left">
						<view class="i_left_icons"><image src="../../static/home/my.png" mode=""></image></view>
						<view class="i_left_content">
							<view class="left_content_title">
								刘慧龙
								<text>1个小时前</text>
							</view>
							<view class="comment_body">只要是优秀的，好的，无论古今都可以学习，</view>
							<view class="left_content_msg">
								<text>lewis</text>:
								<view>只要是优秀的，好的，无论古今都，</view>
							</view>
							<view class="left_content_msg">
								<text>lewis</text>:
								<view>只要是优秀的，好的，无论古今都，</view>
							</view>
							<view class="left_content_msg">
								<text>lewis</text>:
								<view>只要是优秀的，好的，无论古今都，</view>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			
			<!--评论-->
			<view class="tab_bottom">
			  	<commentbox></commentbox>
			</view>
		</view>
	</view>
</template>

<script>
import commentbox from './comment';
export default {
	components:{
		commentbox:commentbox
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">

.commentList_box {
	.comment_item {
		padding: 10px 0px;
		font-size: 12px;
	}
}

.item_left {
	display: flex;
	justify-content: flex-start;

	.i_left_icons {
		width: 30px;
		height: 30px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.i_left_content {
		margin-left: 8px;
		margin-right: 38px;
		.left_content_title {
			    display: flex;
			    flex-direction: column;
			    margin-bottom: 5px;
			
			font-size: 14px;
			text {
				color: #ccc;
				 font-size: 12px;
			}
		}
		
		.comment_body{
		  margin-bottom: 5px;	
		}
		
		.left_content_msg {
			
			display: flex;
			justify-content: flex-start;
			
			padding: 4px;
			background-color: #eee;
			letter-spacing: 1px;
			
			text{
				color: red;
				font-weight: bold;  
			}
		}
	}
}


  .tab_bottom{
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  width: 100%;
	  background-color: #eee;
	  color: #555;
	}

</style>
