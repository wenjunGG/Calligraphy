<template>
	<!--收入明细-->
	<view class="incomedetails_box">
		<view class="bd_content">
			 <view class="incomedetails_item" v-for="(item,index) in 8" :key="index">
			 	<view class="income_item_content">
			 		<text>团长分红</text>
			 		<text>9.46</text>
			 	</view>
				<text class="income_item_date">2020-1-21 11:28</text>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .incomedetails_item{
	 font-size: 16px;
	     padding: 5px 0px;
	     border-bottom: 1px solid #ccc;
	  .income_item_content{
		  display: flex;
          justify-content: space-between;
		  align-items: center;
		  padding: 5px 0px;
	  }
	  .income_item_date{
		  font-size: 14px;
		  color:#aaa;
	  }
  }
</style>
