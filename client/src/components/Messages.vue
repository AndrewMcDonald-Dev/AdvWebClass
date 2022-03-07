<script setup lang="ts">
import { useMessages } from '../models/messages';
</script>

<template>
    <a
        class="panel-block"
        v-for="task in useMessages().displayedTasks()"
        :key="task.title"
        :class="{ 'is-completed': useMessages().currentTab != 'Completed' && task.isCompleted }"
    >
        <input type="checkbox" v-model="task.isCompleted" />
        {{ task.title }}
    </a>
</template>

<style scoped lang="scss">
</style>