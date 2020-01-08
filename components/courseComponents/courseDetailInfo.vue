<template>
	<view class="courseComponentsDetail">
		<video class="courseVideo" id="courseVideo" src="../.././static/video/75d.mp4" @error="videoErrorCallback"
		 :danmu-list="danmuList" enable-danmu danmu-btn controls></video>

		<view class="course_container">
			<view class="title">
				<text class="t_tip">专栏课</text>
				<text>王羲之圣教序白字解析视频版</text>
			</view>

			<view class="time">
				<text></text>
				<text>共2章10节，总时长13小时43分钟</text>
			</view>

			<view class="price">
				<view class="price_left">
					<text class="true_price">￥19.9</text>
					<text class="yuan_price">￥69.9</text>
				</view>
				<view class="price_right">
					<text>68人已购买</text>
				</view>
			</view>

			<view class="coupon">
				<view class="coupon_left">
					<text>限时优惠券满99减20</text>
				</view>
				<view class="coupon_right">
					<text>领券></text>
				</view>
			</view>

			<!--教师信息-->
			<teacherDetailInfo></teacherDetailInfo>

			<!--选项卡-->
			<view class="tabbar">
				<text>课程介绍</text>
				<text>课程目录</text>
				<text>互动答疑</text>
			</view>

		</view>
		
		<!--分割线-->
		<spaceLine></spaceLine>
	</view>
</template>

<script>
	import teacherDetailInfo from '@/components/teacherComponents/teacherDetailInfo'
	import spaceLine from '../../components/common/space_line'
	export default {
		components: {
			'teacherDetailInfo': teacherDetailInfo,
			'spaceLine':spaceLine
		},
		data() {
			return {
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				]
			};
		},
		methods: {
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
		}
	}
</script>

<style lang="scss">
	.courseComponentsDetail {
		font-size: 14px;
	}


	.courseVideo {
		width: 100%;
	}

	/*容器*/
	.course_container {
		padding: 2px 15px;

		.title {
			font-size: 16px;
			font-weight: bolder;
			letter-spacing: 1px;

			.t_tip {
				color: red;
				font-weight: normal;
				border: 1px solid red;
				border-radius: 9px;
				font-size: 12px;
				padding: 1px 3px;
				margin-right: 5px;
			}
		}

		.time {
			font-size: 12px;
			color: #555;
			padding: 6px 0px;
		}

		.price {
			display: flex;
			justify-content: space-between;

			.price_left {
				.true_price {
					color: red;
					font-size: 18px;
					font-weight: bolder;
				}

				.yuan_price {
					color: #ccc;
					text-decoration: line-through;
					font-size: 12px;
					margin-left: 10px;
				}
			}

			.price_right {
				color: #ccc;
			}
		}

		.coupon {
			display: flex;
			justify-content: space-between;
			height: 40px;
			align-items: center;

			.coupon_left {
				color: red;
				background-color: #efb8b7;
				border: 1px solid red;
				border-radius: 9px;
				padding: 0px 5px;

			}

			.coupon_right {
				color: #ccc;
			}
		}

        .tabbar{
			display: flex;
			justify-content: space-around;
			align-items: center;
			height:40px;
		}
	}
</style>
