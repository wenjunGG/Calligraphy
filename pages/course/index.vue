<template>
	<view class="course_box">
		<view class="bd_content">
			<!--tab切换栏-->
			<view class="tabbar">
				<tabbar :listTabbar="listTabbar" @changeTab="changeTab"></tabbar>
			</view>
			
			<view class="course_content">
				<!--专栏课程-->
				<view class="course_Special" v-show="activeNum == 1">
					<view class="n_s_title">
						<view class="s_title_left">
							<text class="s_t_icons"></text>
							<text class="s_t_font">专栏课程</text>
						</view>
					</view>
					<!-- 课程内容-->
					<view class="courseContent">
						<view class="cs_c_item" v-for="(item, ccindex) in 20" :key="ccindex" @click="course_click(item)">
							<view class="cs_item_image"><image src="../../static/home/regularstruct.png" mode=""></image></view>
							<view class="cs_item_msg">王羲之圣教序白字解析视频版</view>
							<view class="cs_item_info">
								<view class="c_i_left"><text class="i_right_buynum">68人已购买</text></view>
								<view class="c_i_right">
									<text class="i_right_icons">限时优惠</text>
									<text class="i_right_price">￥19.9</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!--直播课程-->
				<view class="course_broadcast" v-show="activeNum == 2">
					<view class="n_s_title">
						<view class="s_title_left">
							<text class="s_t_icons"></text>
							<text class="s_t_font">直播课程</text>
						</view>
					</view>
					<!--直播课堂-->
					<view class="broadcast" v-for="(item,indexbroad) in 10" :key="indexbroad">
						<view class="b_c_Image">
							<image src="/static/home/regularstruct.png" mode=""></image>
							<view class="c_i_msg">2020.1.2 20:30 开播</view>
						</view>
						<view class="b_c_content">王羲之圣教序白字解析视频版</view>
						<view class="b_c_info">
							<view class="c_i_left">
								<span class="i_left_tip"></span>
								<span class="i_left_time">今晚8:30开播</span>
							</view>
							<view class="c_i_right">
								<span class="i_right_buynum">68人已购买</span>
								<span class="i_right_price">￥19.9</span>
							</view>
						</view>
					</view>
				</view>
				<!--秒杀课程-->
				<view class="course_spike" v-show="activeNum==3">
					<view class="n_s_title">
						<view class="s_title_left">
							<text class="s_t_icons"></text>
							<text class="s_t_font">秒杀课程</text>
						</view>
					</view>
					<!--秒杀课程-->
					<view class="spikecourse"  v-for="(item,indexspike) in 10" :key="indexspike">
						<view class="s_course_Image"><image src="/static/home/regularstruct.png" mode=""></image></view>
						<view class="s_course_content">王羲之圣教序白字解析视频版</view>
						<view class="s_course_info">
							<view class="c_i_left">
								<span class="i_left_tip"></span>
								<span class="i_left_time">秒杀倒计时:</span>
							</view>
							<view class="c_i_right">
								价格
								<span class="i_right_youhuiprice">￥19.9</span>
								<span class="i_right_price">￥15.9</span>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import tabbar from '@/components/common/tabbar';
export default {
	components: {
		tabbar: tabbar
	},
	data() {
		return {
			activeNum: 1,
			listTabbar: [
				{
					name: '专栏课程',
					num: 1
				},
				{
					name: '直播课程',
					num: 2
				},
				{
					name: '秒杀课程',
					num: 3
				}
			]
		};
	},
	methods: {
		//tab 栏切换
		changeTab(item) {
			console.log(item);
			this.activeNum = item.num;
		}
	}
};
</script>

<style lang="scss">
.course_content {
	
}

.tabbar{
	height:40px;
}

.n_s_title{
	height:40px;
}

/**专栏 课程内容**/
.courseContent {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	.cs_c_item {
		width: 49%;
		margin: 0rpx 0rpx 20rpx 0rpx;

		.cs_item_image {
			width: 100%;
			height: 300rpx;
			margin-bottom: 20rpx;
		}
	}

	.cs_item_msg {
		font-size: 28rpx;
	}

	.cs_item_info {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;

		.c_i_left {
			.i_right_buynum {
				color: #ccc;
				font-size: 24rpx;
			}
		}

		.c_i_right {
			font-size: 24rpx;

			/*限时优惠*/
			.i_right_icons {
				padding: 2rpx 4rpx;
				background-color: red;
				border-radius: 14rpx;
				color: #fff;
				border-top-right-radius: 0px;
			}

			/*价格*/
			.i_right_price {
				font-size: 32rpx;
				color: red;
			}
		}
	}
}

/**专栏课程 **/
.broadcast {
	 margin-bottom: 10px;
	.b_c_Image {
		position: relative;
		width: 100%;
		height: 320rpx;

		.c_i_msg {
			position: absolute;
			right: 0;
			top: 0;
			background-color: #f44336;
			color: #fff;
			font-weight: 100;
			font-size: 28rpx;
			padding: 10rpx 30rpx;
			letter-spacing: 2rpx;
			border-top-right-radius: 18rpx;
			border-bottom-left-radius: 18rpx;
		}
	}

	.b_c_content {
		font-size: 32rpx;
		font-weight: bolder;
		line-height: 112rpx;
		height: 112rpx;
	}

	.b_c_info {
		display: flex;
		justify-content: space-between;
		align-content: center;
		font-size: 28rpx;
		font-size: 28rpx;
		height: 52rpx;
		line-height: 52rpx;

		.c_i_left {
			color: #555;

			.i_left_time {
			}
		}

		.c_i_right {
			.i_right_buynum {
				color: #c0c0c0;
			}

			.i_right_price {
				font-weight: bolder;
				color: red;
				font-size: 40rpx;
			}
		}
	}
}

/**课程秒杀**/
	.spikecourse {
		 margin-bottom: 20px;
		.s_course_Image {
			width: 100%;
			height: 400rpx;
		}

		.s_course_content {
			font-size: 32rpx;
			font-weight: bolder;
			padding: 20rpx 0rpx;
		}

		.s_course_info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #555;
			font-size: 28rpx;

			.c_i_left {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.i_left_tip {
					background: url(/static/img/smallalarm.e021fcfd.png) no-repeat;
					display: block;
					height: 40rpx;
					background-size: contain;
					width: 40rpx;
					margin-right: 10rpx;
				}
			}

			.c_i_right {
				color: #ccc;

				.i_right_youhuiprice {
					text-decoration: line-through;
				}

				.i_right_price {
					color: red;
					font-size: 32rpx;
				}
			}
		}
	}
</style>
