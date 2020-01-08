<template>
	<view class="container">
		<!-- 头部 -->
		<view class="header">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing tileplace">
			</view>
			<swiper class="swiperlubo" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiperitem">
					<image :src="item.src" mode=""></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 栏目 -->
		<view class="subject">
			<view v-for="(item,indexs) in subjectList" :key="indexs" class="subjectitem">
				<view class="sw_itemimg">
					<image :src="item.src"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="bd_content">
			<!--最新动态-->
			<view class="activeMsg">
				<text class="a_m_zuixin">最新</text>
				<text class="a_m_dong">动态</text>
				<text class="a_m_active">活动</text>
				<view class="a_m_msg">书法经典中的经典,被誉为王羲之书法经典</view>
				<text class="a_m_more">></text>
			</view>
		</view>

		<!--空格符-->
		<spaceLine></spaceLine>

		<view class="bd_content">
			<!--新人分享-->
			<view class="newShare">
				<view class="n_s_title">
					<view class="s_title_left">
						<text class="s_t_icons"></text>
						<text class="s_t_font">新人分享</text>
					</view>
				</view>

				<scroll-view class="scroll_view_coupon" scroll-x="true" @scroll="scroll" scroll-left="0">
					<view class="n_s_coupon">
						<view class="s_coupon_item" v-for="(item,cindex) in 5" :key="cindex">
							<view class="c_i_num">
								<span class="i_num_money">￥20.00</span>
								<span>满98.00可用</span>
							</view>
							<view class="c_i_split">
								<text class="i_split_pin i_split_top"></text>
								<text class="i_split_pin i_split_bottom"></text>
							</view>
							<view class="c_i_receive">
								<span class="i_r_btn">去领取</span>
								<span class="i_r_date">有效至2019.12.30</span>
							</view>
						</view>
					</view>
				</scroll-view>

				<view class="n_s_Image">
					<image src="/static/home/regularstruct.png" mode=""></image>
				</view>
			</view>

			<!--直播课堂-->
			<view class="broadcast">
				<view class="n_s_title">
					<view class="s_title_left">
						<text class="s_t_icons"></text>
						<text class="s_t_font">直播课堂</text>
					</view>
				</view>
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

			<!--专栏课程-->
			<view class="broadcast">
				<view class="n_s_title">
					<view class="s_title_left">
						<text class="s_t_icons"></text>
						<text class="s_t_font">专栏课程</text>
					</view>
					<view class="s_title_right">
						<text class="s_tr_font">查看更多</text>
						<text class="s_t_icons">></text>
					</view>
				</view>

				<!-- 课程内容-->
				<view class="courseContent">
					<view class="cs_c_item" v-for="(item,ccindex) in 4" :key="ccindex" @click="course_click(item)">
						<view class="cs_item_image">
							<image src="../../static/home/regularstruct.png" mode=""></image>
						</view>
						<view class="cs_item_msg">王羲之圣教序白字解析视频版</view>
						<view class="cs_item_info">
							<view class="c_i_left">
								<text class="i_right_buynum">68人已购买</text>
							</view>
							<view class="c_i_right">
								<text class="i_right_icons">限时优惠</text>
								<text class="i_right_price">￥19.9</text>
							</view>
						</view>
					</view>
				</view>

			</view>

			<!--秒杀课程-->
			<view class="spikecourse">
				<view class="n_s_title">
					<view class="s_title_left">
						<text class="s_t_icons"></text>
						<text class="s_t_font">秒杀课程</text>
					</view>
				</view>
				<view class="s_course_Image">
					<image src="/static/home/regularstruct.png" mode=""></image>
				</view>
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

			<!--精选文章-->
			<view class="articles">
				<view class="n_s_title">
					<view class="s_title_left">
						<text class="s_t_icons"></text>
						<text class="s_t_font">精选文章</text>
					</view>
					<view class="s_title_right">
						<text class="s_tr_font">查看更多</text>
						<text class="s_t_icons">></text>
					</view>
				</view>

				<view class="articles_item" v-for="(item,atcindex) in 2" :key="atcindex">
					<view class="articles_content">
						<view class="art_info">
							<view>难得一见!蒲松龄写鬼写妖神名远扬，其书法更是人书巨佬功力非凡</view>
							<view class="art_image">
								<image src="../../static/home/regularstruct.png"></image>
							</view>
						</view>
					</view>
					<view class="articles_bottom">
						<view class="_articles_bot">
							<text class="_articles_bot_image zhuanfa"></text>
							<text>转发</text>
						</view>
						<view class="_articles_bot">
							<text class="_articles_bot_image pinglun"></text>
							<text>257</text>
						</view>
						<view class="_articles_bot">
							<text class="_articles_bot_image dianzan"></text>
							<text>3567</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import spaceLine from '../../components/common/space_line'
	export default {
		components:{
			'spaceLine':spaceLine
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				//轮播
				swiperList: [{
						id: "11",
						src: "/static/home/swiperbg.png"
					},
					{
						id: "11",
						src: "/static/home/swiperbg.png"
					},
					{
						id: "11",
						src: "/static/home/swiperbg.png"
					}
				],
				//栏目
				subjectList: [{
						id: "11",
						src: "/static/home/liveon.png",
						name: '直播课'
					},
					{
						id: "11",
						src: "/static/home/freecourse.png",
						name: '免费课程'
					},
					{
						id: "11",
						src: "/static/home/essays.png",
						name: '精品文章'
					}, {
						id: "11",
						src: "/static/home/smallvideo.png",
						name: '小视频'
					},
					{
						id: "11",
						src: "/static/home/onlineservvice.png",
						name: '在线客服'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			/**专栏课程点击**/
			course_click(item){
				console.log(item);
				uni.navigateTo({
					url: `/pages/course/courseInfo?id=${item}`
				})
			}
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
	}

	/*导航栏占位符*/
	.tileplace {
		height: var(--status-bar-height);
		padding-top: 44px;
		box-sizing: content-box;
	}

	/**标题**/
	.n_s_title {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		height: 140rpx;

		.s_title_left {
			display: flex;
			flex-wrap: nowrap;

			.s_t_icons {
				display: block;
				width: 12rpx;
				height: 50rpx;
				background-color: #F44336;
				margin-right: 20rpx;
				border-radius: 18rpx;
			}

			.s_t_font {
				font-size: 40rpx;
				font-weight: bolder;
			}
		}

		.s_title_right {
			color: #ccc;
			font-size: 14px;
		}
	}


	/**轮播**/
	.swiperlubo{
		height: 400rpx;
	}

	/**栏目**/
	.subject {
		display: flex;
		flex-wrap: nowrap;

		.subjectitem {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 200rpx;
			height: 200rpx;

			.sw_itemimg {
				width: 100rpx;
				height: 100rpx;
			}

			text {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #212530;
			}
		}
	}

	.bd_content {
		padding: 10rpx 30rpx 10rpx;

		/**动态**/
		.activeMsg {
			display: flex;
			justify-content: space-between;
			align-content: center;
			font-size: 28rpx;
			margin-bottom: 20rpx;

			.a_m_zuixin {
				font-size: 30rpx;
				font-weight: bolder;
			}

			.a_m_dong {
				font-size: 30rpx;
				font-weight: bolder;
				color: #fdb735;
			}

			.a_m_active {
				font-size: 28rpx;
				padding: 0rpx 4rpx;
				background-color: #FF5722;
				border-radius: 10rpx;
				color: #fff;
				margin: 0px 8rpx;

			}

			.a_m_msg {
				font-size: 24rpx;
				width: 450rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;

			}

			.a_m_more {
				//display: flex;
				text-align: right;
			}
		}

		/**新人分享**/
		.newShare {

			/**领券中心**/
			.n_s_coupon {
				display: flex;
				flex-wrap: nowrap;
				color: #fff;
				font-size: 28rpx;

				.s_coupon_item {
					display: flex;
					flex-wrap: nowrap;
					justify-content: center;
					height: 180rpx;
					margin-right: 20rpx;

					.c_i_num {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background-color: #FFC107;
						width: 250rpx;
						border-top-left-radius: 38rpx;
						border-bottom-left-radius: 38rpx;

						.i_num_money {
							font-size: 56rpx;
						}
					}

					.c_i_split {
						position: relative;
						border-left: 2rpx dashed #FFC107;

						.i_split_pin {
							width: 16rpx;
							height: 16rpx;
							background-color: #fff;
							border-radius: 50%;
						}

						.i_split_top {
							position: absolute;
							left: -8rpx;
							top: -8rpx;
						}

						.i_split_bottom {
							position: absolute;
							left: -8rpx;
							bottom: -8rpx;
						}
					}

					.c_i_receive {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background-color: #FFC107;
						width: 236rpx;
						border-top-right-radius: 38rpx;
						border-bottom-right-radius: 38rpx;

						.i_r_btn {
							padding: 8rpx 20rpx;
							background-color: cornsilk;
							color: #ffc107;
							border-radius: 38rpx;
							margin-bottom: 10rpx;
							margin-top: 10rpx;
						}

						.i_r_date {
							font-size: 24rpx;
						}
					}
				}
			}

			/**展示图片**/
			.n_s_Image {
				width: 100%;
				height: 320rpx;
				margin-top: 30rpx;
			}
		}

		/**专栏课程 **/
		.broadcast {
			.b_c_Image {
				position: relative;
				width: 100%;
				height: 320rpx;

				.c_i_msg {
					position: absolute;
					right: 0;
					top: 0;
					background-color: #F44336;
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

					.i_left_time {}
				}

				.c_i_right {
					.i_right_buynum {
						color: #C0C0C0;
					}

					.i_right_price {
						font-weight: bolder;
						color: red;
						font-size: 40rpx;
					}
				}
			}
		}

		/**课程内容**/
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

		/**课程秒杀**/
		.spikecourse {
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


		/**精选文章**/
		.articles {
			.articles_content {
				.art_info {
					display: flex;
					justify-content: space-between;
					font-size: 16px;
					font-weight: bolder;
					letter-spacing: 1px;
					line-height: 24px;

					.art_image {
						width: 300px;
						height: 100px;
						margin-left: 20px;
					}
				}
			}

			.articles_bottom {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #555;
				height: 60px;
				align-items: center;

				/*公共*/
				._articles_bot {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					._articles_bot_image {
						display: block;
						width: 18px;
						height: 18px;
						margin-right: 5px;
						background-size: contain;
					}
				}

				.zhuanfa {
					background: url(../../static/home/relay.png) no-repeat;
				}

				.pinglun {
					background: url(../../static/home/comment.png) no-repeat;
				}

				.dianzan {
					background: url(../../static/home/zan.png) no-repeat;
				}
			}

		}

	}
</style>
