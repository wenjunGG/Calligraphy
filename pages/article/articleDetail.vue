<template>
	<view class="articledetail_box">
		<view class="bd_content">
			<view class="detail_title">难得一见，蒲松龄真是难得一见灵魂书法家</view>
			<!--教师信息-->
			<teacherDetailInfo></teacherDetailInfo>
			<view class="detail_content">
				难得一见，蒲松龄真是难得一见灵魂书法家 难得一见，蒲松龄真是难得一见灵魂书法家 难sw 松龄真是难得一见灵魂书法s松龄真是难得一见灵魂书法家
				难得一见，蒲松龄真是难得一见灵s一见，蒲松龄真是难得一见灵s，蒲松龄真是难得一见灵魂书法家 难得s蒲松龄真s
			</view>
		</view>

		<!--分割线-->
		<spaceLine></spaceLine>

		<view class="bd_content">
			<view class="n_s_title">
				<view class="s_title_left">
					<text class="s_t_icons"></text>
					<text class="s_t_font">评论 26</text>
				</view>
				<view class="s_title_right"><text class="s_tr_font" @click="articlesMore_click()">赞 3695</text></view>
			</view>

			<!--评论-->
			<commentList></commentList>
		</view>
	</view>
</template>

<script>
import teacherDetailInfo from '@/components/teacherComponents/teacherDetailInfo';
import commentList from '@/components/comment/commentList';
import spaceLine from '../../components/common/space_line';
export default {
	components: {
		teacherDetailInfo: teacherDetailInfo,
		commentList: commentList,
		spaceLine: spaceLine
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.n_s_title {
	height: 50px;
	border-bottom: 1px solid #eee;
}

.articledetail_box {
	.detail_title {
		padding: 10px 0px;
		font-weight: bolder;
		font-size: 18px;
	}

	.detail_content {
		padding: 10px 0px;
		font-size: 16px;
		letter-spacing: 1px;
		word-spacing: 1px;
		text-align: justify;
	}
}
</style>
