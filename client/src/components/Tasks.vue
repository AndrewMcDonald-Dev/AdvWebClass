<script setup lang="ts">
import { useMessages } from '../models/messages';
import { findUser } from '../models/user';
import { retrieveDate } from '../utils/retrieveDate';

const messages = useMessages()
</script>

<template>
    <a
        class="panel-block"
        v-for="task in messages.displayedTasks"
        :key="task.title"
        :class="{ 'is-completed': messages.currentTab != 'Completed' && task.isCompleted }"
    >
        <input type="checkbox" v-model="task.isCompleted" />
        <div class="task-text">{{ task.title }}</div>
        <div class="mini-avatar">
            <figure class="image is-32x32">
                <img :src="findUser(task.assignedTo).pic" class="img is-rounded" />
            </figure>
            <p>{{ findUser(task.assignedTo).firstName }}</p>
        </div>
        <div class="date">
            <h4>Due Date:</h4>
            {{ retrieveDate(task.dueDate) }}
        </div>
    </a>
</template>

<style scoped lang="scss">
.task-text {
    width: 20em;
}
.date {
    margin-left: auto;
    margin-right: 5em;
}
</style>