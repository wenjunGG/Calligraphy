<template>
	<view>
		<rich-text :nodes="strings"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				strings:'<div style="text-align:center;">课程介绍</div>'
			};
		}
	}
</script>

<style lang="scss">

</style>
