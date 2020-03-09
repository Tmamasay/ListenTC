<template>
	<div class="ga_swiper">
		<swiper class="swiper" circular="true" indicator-dots="false" autoplay="false" interval="5000" duration="1000" :style="{height:height+'px'}">
			<block v-for="(item,index) in imgUrls" :key="index">
				<swiper-item >
					<!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
					<!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
					<!-- <navigator > -->
					<image :src="item" :style="{height:height+'px'}" @click="navjumps(item.jumpUrl)"/>
					<!-- </navigator> -->
				</swiper-item>
			</block>
		</swiper>
	</div>

</template>

<script>
	export default {
		// props: ['imgUrls'],
		data() {
			return {
				imgUrls: [
					'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
                    'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
                    'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
				],
				height:'225'
			}
		},
		mounted(){
			
		},
		onLoad(){
				
		},
		methods:{
			
		}
		
}
</script>

<style>
	.ga_swiper {
		width: 100%;
	}
	
	image {
		width: 100%
	}
	
	.swiper image {
		width: 100%;
		height:225px;
        border-radius:10px;
        margin: 0 auto
	}
</style>