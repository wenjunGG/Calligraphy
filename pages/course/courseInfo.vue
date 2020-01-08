<template>
	<view>
		<courseDetailInfo></courseDetailInfo>
		<!--三个tab 的切换-->
		<view class="tab_box">
			<courseCatalog></courseCatalog>
		</view>
	</view>
</template>

<script>
	import courseDetailInfo from '@/components/courseComponents/courseDetailInfo'
	import courseCatalog from './courseCatalog'
	export default {
		components:{
		'courseDetailInfo':courseDetailInfo,
		'courseCatalog':courseCatalog
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
