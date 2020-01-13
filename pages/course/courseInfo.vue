<template>
	<view>
		<courseDetailInfo></courseDetailInfo>
		<!--三个tab 的切换-->
		<view class="tab_box">
			<!--课程介绍-->
			
			<!--课程目录-->
			<!-- <courseCatalog></courseCatalog> -->
			<!--互动答疑-->
			<courseExchange></courseExchange>
		</view>
	</view>
</template>

<script>
	import courseDetailInfo from '@/components/courseComponents/courseDetailInfo'
	import courseCatalog from './courseCatalog'
	import courseExchange from './courseExchange'
	export default {
		components:{
		'courseDetailInfo':courseDetailInfo,
		'courseCatalog':courseCatalog,
		'courseExchange':courseExchange
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  
	
  .tab_box{
	  padding: 2px 15px;
  }
</style>
