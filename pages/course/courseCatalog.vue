<template>
	<view class="catalog_box">
		<view class="catalog_item" v-for="(item,index) in 5 " :key="index">
			<view class="num">01</view>
			<view class="content">
				<text>书法中的经典,经典中的经典，经典之中的经典书法中的经典,经典中的经典，经典之中的经典</text>
				<view class="item_bofang">
					<text>正在播放</text>
					<text class="item_free">免费</text>
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
.catalog_item {
	display: flex;
	justify-content: flex-start;
	font-size: 14px;
	padding: 10px 0px;
	border-bottom: 1px solid #ccc;
	.num {
		color: red;
	}

	.content {
		margin-left: 10px;
		color: #555;
		.item_bofang {
			display: flex;
			justify-content: space-between;
			margin: 5px 5px 0px 5px;
			color: #ccc;
			.item_free {
				padding: 0px 6px;
				border: 1px solid red;
				border-radius: 9px;
				font-size: 12px;
				color: red;
			}
		}
	}
}
</style>
