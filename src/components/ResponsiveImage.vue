<template>
	<picture>
		<!-- AVIF -->
		<source :srcset="avif1920" type="image/avif" media="(min-width: 1025px)" />
		<source
			:srcset="avif1024"
			type="image/avif"
			media="(min-width: 513px) and (max-width: 1024px)" />
		<source :srcset="avif512" type="image/avif" media="(max-width: 512px)" />

		<!-- WebP -->
		<source :srcset="webp1920" type="image/webp" media="(min-width: 1025px)" />
		<source
			:srcset="webp1024"
			type="image/webp"
			media="(min-width: 513px) and (max-width: 1024px)" />

		<!-- Fallback -->
		<img :src="original" :alt="alt" />
	</picture>
</template>

<script setup>
const props = defineProps({
	name: { type: String, required: true },
	originalTag: { type: String, required: true },
	alt: { type: String, default: 'image' }
});

const avif1920 = new URL(`../images/resized/${props.name}-1920.avif`, import.meta.url).href;
const avif1024 = new URL(`../images/resized/${props.name}-1024.avif`, import.meta.url).href;
const avif512 = new URL(`../images/resized/${props.name}-512.avif`, import.meta.url).href;
const webp1920 = new URL(`../images/resized/${props.name}-1920.webp`, import.meta.url).href;
const webp1024 = new URL(`../images/resized/${props.name}-1024.webp`, import.meta.url).href;
const original = new URL(`../images/originals/${props.name}.${props.originalTag}`, import.meta.url)
	.href;
</script>
