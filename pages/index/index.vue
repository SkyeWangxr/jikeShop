<template>
	<view class="container">
		<swiper class="banner" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerSwipers" :key="item.id">
				<image class="bannerImg" :src="item.url" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<uni-grid class="indexNav" :column="4">
			<uni-grid-item class="indexNavItem" v-for="item in navs" :key="item.title">
				<view :class="item.icons"></view>
				<text>{{item.title}}</text>
			</uni-grid-item>
		</uni-grid>
		<view class="hotGoods">
			<view class="goodsTxt">推荐商品</view>
			<view class="goodsList">
				<view class="goodsItem" v-for="item in goods" :key="item.id">
					<image class="goodsImg" :src="item.img_url" mode="widthFix"></image>
					<view class="indexPrice">
						<text>{{item.market_price}}</text>
						<text>{{item.sell_price}}</text>
					</view>
					<view class="goodsName">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {reqGet} from '../../utils/request.js'
    export default {
        data() {
            return {
				bannerSwipers:[],
				goods:[],
				navs: [{
						icons: "iconfont icon-ziyuan",
						title: "极客超市",
						path: "/pages/goods/goods"
					},
					{
						icons: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icons: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icons: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
			}
        },
       created(){
		   this.getSwipers()
		   this.getGoods()
	   },
        methods: {
           async getSwipers(){
			   let result = await reqGet('/api/getlunbo')
			   if(result.statusCode===200){
				   this.bannerSwipers = result.data.message
			   }
		   },
		   async getGoods(){
			   let result = await reqGet('/api/getgoods')
			   if(result.statusCode===200){
			   		this.goods = result.data.message
			   }
		   }
        }
    }
</script>
<style>
	page{
		background-color: #ededed;
	}
	.banner{
		height: 422rpx;
	}
    .bannerImg{
		width: 100%;
	}
	.indexNavItem{
		text-align: center;
		font-size: 28rpx;
		background-color: white;
	}
	.iconfont{
		background-color: pink;
		width: 100rpx;
		width: 90rpx;
		line-height: 90rpx;
		border-radius: 90rpx;
		margin: 20rpx auto;
		font-size: 40rpx;
	}
	.hotGoods{
		font-size: 30rpx;
	}
	.goodsTxt{
		background-color: pink;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 20rpx;
		margin: 10rpx 0;
		text-align: center;
		font-size: 40rpx;
		letter-spacing: 30rpx;
	}
	.goodsList{
		display: flex;
		padding: 0 15rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;
	}
	.goodsItem{
		width: 355rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #fff;
		margin-bottom: 15rpx;
	}
	.goodsImg{
		width: 320rpx;
		height: 150rpx;
	}
	.indexPrice{
		font-size: 36rpx;
		color: pink;
		padding: 16rpx 0;
	}
	.indexPrice text:nth-child(2){
		color: #ccc;
		text-decoration: line-through;
		margin-left: 20rpx;
		font-size: 26rpx;
	}
</style>
