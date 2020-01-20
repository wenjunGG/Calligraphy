<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/**全局图片**/
		image {
			width: 100%;
			height: 100%;
		}
		
		/**包含内容**/
		.bd_content {
			padding: 10rpx 30rpx 10rpx;
		}
		
		/*导航栏占位符*/
		.tileplace {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}
		
		
		/**标题 查看更多**/
		.n_s_title {
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-items: center;
			height: 140rpx;
		
			.s_title_left {
				display: flex;
				flex-wrap: nowrap;
		
				.s_t_icons {
					display: block;
					width: 12rpx;
					height: 50rpx;
					background-color: #F44336;
					margin-right: 20rpx;
					border-radius: 18rpx;
				}
		
				.s_t_font {
					font-size: 40rpx;
					font-weight: bolder;
				}
			}
		
			.s_title_right {
				color: #ccc;
				font-size: 14px;
			}
		}
		
		
		/**自定义弹框样式**/
		.custom-view{
			overflow: hidden;
			z-index: 999;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			
			.bottom{
				margin-top: 80rpx;
				color: #FDC69B;
				text-align: center;
			}
			.cancel{
				margin-top: 40rpx;
				width: 60rpx;
				height: 60rpx;
			}
		}
</style>
