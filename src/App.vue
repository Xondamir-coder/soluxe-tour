<template>
	<div class="container">
		<Header />
		<RouterView />
	</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>
.container {
}
</style>
