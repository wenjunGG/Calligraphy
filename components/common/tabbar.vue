<template>
	<view class="tabbar_box">
		<view class="tabbar_item" v-for="(item, index) in listTabbar" :key="index" @click="switchTab(item)">
			   {{ item.name }} 
			  <text class="space" :class="item.num==activeNum?'active':''"></text>
		</view>
	</view>
</template>

<script>
export default {
	props:["listTabbar"],
	data() {
		return {
			activeNum:1,
		};
	},methods: {
		/**切换选项**/
		switchTab(item) {
			this.activeNum=item.num;
			this.$emit('changeTab',{type:'course',num:item.num})
		}
	},
};
</script>

<style lang="scss">
.tabbar_box {
	display: flex;
	justify-content: space-around;
	align-items: center;
	.tabbar_item{
		position: relative;
		.space{
			display: none;
			position: absolute;
			width: 35px;
			height: 3px;
			background-color: #fe5863;
			right: 20px;
			bottom: -7px;   
		}
		.active{
			display: block;
		}
	}
	
}
</style>
