<template>
	<view class="person_box">
		<view class="bg_Image_box"><image src="../../static/home/regularstruct.png" mode=""></image></view>
		<view class="bd_content">
			<view class="person_content">
				<!--个人信息 -->
				<view class="person_info">
					<view class="top">
						<text class="nickname">上玄月</text>
						<text class="idname">普通ID:134head</text>
						<text class="todaySign">今日签到</text>
					</view>
					<view class="bottom">
						<view class="bom_info" v-for="(item, index) in 4" :key="index">
							<view class="bom_info_pic"><image src="../../static/home/essays.png" mode=""></image></view>
							<text>我的邀请</text>
						</view>
					</view>
					<view class="info_pic_box"><image src="../../static/home/my.png" mode=""></image></view>
					<view class="info_login">登入</view>
				</view>
				<!--邀请好友-->
				<view class="person_invite">
					<view class="invite_box">
						<view class="invite_left">
							<text class="invite_left_title">邀请好友抵学费</text>
							<text>一起分享学习的快乐</text>
						</view>
						<view class="invite_right"><image src="../../static/popModel/advert.jpg" mode=""></image></view>
					</view>
				</view>
				<!--操作中心-->
				<view class="person_opertions">
					<view class="opertions_box">
						<view class="opertions_info" v-for="(item, index) in 8" :key="index">
							<view class="opertions_info_pic"><image src="../../static/home/essays.png" mode=""></image></view>
							<text>我的邀请</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.bg_Image_box {
	height: 200px;
}

.person_content {
	position: relative;

	/**个人信息**/
	.person_info {
		background-color: #eee;
		border-radius: 9px;
		position: relative;
		top: -110px;
		width: 100%;
		font-size: 12px;
		.top {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			padding-top: 20px;

			.nickname {
				margin-top: 5px;
				display: block;
				font-size: 18px;
				font-weight: bolder;
			}
			.idname {
				color: #aaa;
				margin-top: 2px;
				display: block;
			}
			.todaySign {
				margin-top: 10px;
				display: block;
				color: #fff;
				background-color: #ff9800;
				padding: 4px 10px;
				border-radius: 19px;
			}
		}

		.bottom {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 20px 0px;

			.bom_info {
				.bom_info_pic {
					width: 50px;
					height: 50px;
				}
			}
		}

		.info_pic_box {
			position: absolute;
			top: -27px;
			left: 147px;
			width: 50px;
			height: 50px;
		}

		.info_login {
			position: absolute;
			right: 18px;
			top: 28px;
			background-color: #fff;
			padding: 4px 12px;
			border-radius: 5px;
			color: #ff9800;
			border: 1px solid #ff9800;
		}
	}

	/**邀请好友**/
	.person_invite {
		position: relative;
		top: -110px;
		background-color: #eee;
		font-size: 12px;
		padding: 5px 10px;
		margin-top: 10px;
		border-radius: 5px;

		.invite_box {
			display: flex;
			justify-content: space-between;

			.invite_left {
				display: flex;
				flex-flow: column;
				.invite_left_title {
					font-size: 20px;
					font-weight: bolder;
					padding: 5px;
				}
			}
			.invite_right {
				width: 100px;
				height: 50px;
			}
		}
	}

	.person_opertions {
		position: relative;
		top: -110px;
		background-color: #eee;
		margin-top: 10px;
		padding: 10px 0px;
		border-radius: 5px;
		.opertions_box {
			display: flex;
			flex-flow: wrap;
			align-items: center;
			justify-content: space-between;
			font-size: 12px;
			.opertions_info {
				display: flex;
				flex-flow: column;
				width: 25%;
				align-items: center;
				    margin-bottom: 15px;
				.opertions_info_pic {
					width: 50px;
					height: 50px;
				}
			}
		}
	}
}
</style>
