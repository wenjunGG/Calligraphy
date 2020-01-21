<template>
	<view class="order_box">
		<view class="bd_content">
			<!--tab切换栏-->
			<view class="tabbar">
				<tabbar :listTabbar="listTabbar" @changeTab="changeTab"></tabbar>
			</view>
		</view>
		<!--空格符-->
		<spaceLine class="spaceLine"></spaceLine>
		<view class="order_list">
			<view class="listOrder_box" v-for="(item,index) in 10" :key="index">
				<view class="order_item">
					<view class="order_num_info">
						<text class="color_aaa">订单变号:N858944562154</text>
						<text class="order_cancle">订单取消</text>
					</view>
					<view class="order_content">
						<view class="c_img_box">
							<image src="../../static/home/regularstruct.png" mode=""></image>
						</view>
						<view class="c_info">
							<view class="c_info_title">
								王羲之圣教程视频解析
							</view>
							<view class="c_info_courseInfo">
								<text class="color_aaa">共2张10节</text>
								<text class="order_price">￥29.00</text>
							</view>
						</view>
					</view>
					<view class="order_info">
						<text class="order_info_proNum color_aaa">共1件商品</text>
						<text class="order_info_TotalPrice">订单金额:￥299.00</text>
					</view>
					<view class="order_info order_options">
						<text class="color_aaa order_options_btn order_options_delete ">删除订单</text>
						<text class="color_red order_options_btn order_options_Pay">立即付款</text>
					</view>
				</view>
				<!--空格符-->
				<spaceLine></spaceLine>
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
				listTabbar: [{
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

<style lang="scss">
	/***订单颜色变化**/
	.order_cancle {
		color: red;
	}

	/**价格**/
	.order_price {
		color: red;
		font-weight: bolder;
	}
	
	/**灰色体系**/
	.color_aaa{
	 color:#aaa;	
	}
	
	/**红色体系**/
	.color_red{
	 color:red;	
	}

     
	 .tabbar{
		 font-size: 16px;
	 }
	 
	 .spaceLine{
		 margin-top:5px;
	 }
	 
	 
	 /**订单**/
	.order_item {
		padding: 10px 10px;
		font-size: 14px;

         /**订单号信息**/
		.order_num_info {
			display: flex;
			justify-content: space-between;
			padding: 8px 5px;
			border-bottom: 1px solid #eee;
		}

         /**订单内容**/
		.order_content {
			display: flex;
			justify-content: flex-start;
			margin: 7px;

			.c_img_box {
				width: 160px;
				height: 100px;
			}


			.c_info {
				width: calc(100% - 120px);
				margin-left: 7px;

				.c_info_title {
					height: 80px;
					font-size: 16px;
					font-weight: bolder;
					letter-spacing: 1px;
				}

				.c_info_courseInfo {
					display: flex;
					justify-content: space-between;
				}
			}
		}
         
		 /**订单总体价格体系**/
		.order_info {
			display: flex;
			justify-content: flex-end;
			margin: 7px;

			.order_info_proNum {
				margin-right: 7px;
			}
		}
		/**订单操作按钮**/
		.order_options{
			border-top:1px solid #eee;
			padding-top: 7px;
			    margin-bottom: 0px;
				
			/**公共样式**/
			.order_options_btn{
				padding: 4px 10px;
				background-color: #fff;
				border: 1px solid red;
				border-radius: 9px;
				font-size: 12px;
				    margin-left: 5px;
			}
			
			/**取消**/
			.order_options_delete {
				border:1px solid #aaa;
			}
			
			/**付款**/
			.order_options_Pay{
				
			}
		}
	}
</style>
