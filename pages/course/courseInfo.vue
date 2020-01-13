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
		
		<view class="tab_bottom"> 
		
		    <!--购买-->
			<coursebuytab></coursebuytab>
		</view>
	</view>
</template>

<script>
	import courseDetailInfo from '@/components/courseComponents/courseDetailInfo'
	import courseCatalog from './courseCatalog'
	import courseExchange from './courseExchange'
	import coursebuytab from '@/components/courseComponents/coursebuytab'
	export default {
		components:{
		'courseDetailInfo':courseDetailInfo,
		'courseCatalog':courseCatalog,
		'courseExchange':courseExchange,
		'coursebuytab':coursebuytab
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
  
  .tab_bottom{
	  position: fixed;
	      bottom: 0;
	      width: 100%;
	  }
</style>
