<template>
	<view class="order_box">
		<view class="bd_content">
			<!--tab切换栏-->
			<view class="tabbar"><tabbar :listTabbar="listTabbar" @changeTab="changeTab"></tabbar></view>
		</view>
		<!--空格符-->
		<spaceLine></spaceLine>
		<view class="order_list">
			<view class="order_item">
				
			</view>
		</view>
	</view>
</template>

<script>
import tabbar from '@/components/common/tabbar';
//分隔符
import spaceLine from '../../components/common/space_line';
export default {
	components: {
		tabbar: tabbar,
		spaceLine: spaceLine
	},
	data() {
		return {
			activeNum: 1,
			listTabbar: [
				{
					name: '全部',
					num: 1
				},
				{
					name: '待付款',
					num: 2
				},
				{
					name: '已付款',
					num: 3
				},
				{
					name: '已取消',
					num: 4
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
	},
};
</script>

<style lang="scss"></style>
