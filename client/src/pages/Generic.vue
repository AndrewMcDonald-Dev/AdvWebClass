<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        defualt: "Hello World"
    }
})
</script>

<template>
    <div class="section">
        <h1 class="title">{{ props.title }}</h1>
    </div>
</template>

<style>
</style>