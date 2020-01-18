<template>
	<view class="bd_content">
		
		<!--精选文章-->
		<view class="articles">
			<view class="articles_item" v-for="(item,atcindex) in 15" :key="atcindex" @click="articleDetail_click(item)">
				<view class="articles_content">
					<view class="art_info">
						<view>难得一见!蒲松龄写鬼写妖神名远扬，其书法更是人书巨佬功力非凡</view>
						<view class="art_image">
							<image src="../../static/home/regularstruct.png"></image>
						</view>
					</view>
				</view>
				<view class="articles_bottom">
					<view class="_articles_bot">
						<text class="_articles_bot_image zhuanfa"></text>
						<text>转发</text>
					</view>
					<view class="_articles_bot">
						<text class="_articles_bot_image pinglun"></text>
						<text>257</text>
					</view>
					<view class="_articles_bot">
						<text class="_articles_bot_image dianzan"></text>
						<text>3567</text>
					</view>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			/**文章详情**/
			articleDetail_click(item){
				uni.navigateTo({
					url: `/pages/article/articleDetail?id=${item}`
				})
			}
		}
	}
</script>

<style lang="scss">

		/**精选文章**/
		.articles {
			.articles_content {
				.art_info {
					display: flex;
					justify-content: space-between;
					font-size: 16px;
					font-weight: bolder;
					letter-spacing: 1px;
					line-height: 24px;

					.art_image {
						width: 300px;
						height: 100px;
						margin-left: 20px;
					}
				}
			}

			.articles_bottom {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #555;
				height: 60px;
				align-items: center;

				/*公共*/
				._articles_bot {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					._articles_bot_image {
						display: block;
						width: 18px;
						height: 18px;
						margin-right: 5px;
						background-size: contain;
					}
				}

				.zhuanfa {
					background: url(../../static/home/relay.png) no-repeat;
				}

				.pinglun {
					background: url(../../static/home/comment.png) no-repeat;
				}

				.dianzan {
					background: url(../../static/home/zan.png) no-repeat;
				}
			}

		}
</style>
