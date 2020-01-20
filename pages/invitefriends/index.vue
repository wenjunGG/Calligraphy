<template>
	<view class="invite_box">
		<view class="bd_content">
			<!--tab切换栏-->
			<view class="tabbar"><tabbar :listTabbar="listTabbar" @changeTab="changeTab"></tabbar></view>
		</view>
		<!--空格符-->
		<spaceLine></spaceLine>
		<view class="bd_content">
			<direct></direct>
		</view>
	</view>
</template>

<script>
import tabbar from '@/components/common/tabbar';
//分隔符
import spaceLine from '../../components/common/space_line';
import direct from './direct';
export default {
	components: {
		tabbar: tabbar,
		spaceLine: spaceLine,
		direct:direct
	},
	data() {
		return {
			activeNum: 1,
			listTabbar: [
				{
					name: '直接邀请好友(2)',
					num: 1
				},
				{
					name: '间接邀请好友(20)',
					num: 2
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
.invite_box {
	.tabbar {
		font-size: 14px;
		padding: 5px 10px 0px;
	}

	spaceLine {
		margin-top: 10px;
	}
}
</style>
