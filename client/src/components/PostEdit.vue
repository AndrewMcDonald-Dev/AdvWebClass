<script setup lang="ts">
import { Post } from '../models/posts';

const { post } = defineProps<{
    post: Post;
}>();
</script>

<template>
    <div>
        <div class="card">
            <form class="card-contents">
                <div class="field">
                    <label class="label">Image</label>
                    <div class="control">
                        <input type="text" class="input" v-model="post.src">
                    </div>
                </div>
                <div class="field">

                    <label class="label">Content</label>
                    <div class="control">
                        <input type="text" class="input" v-model="post.caption">
                    </div>
                </div>
                <div class="field">

                    <div class="control">
                        <button class="button is-primary" @click="">Update Post</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>