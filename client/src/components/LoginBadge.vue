<script setup lang="ts">
import { useSession } from "../models/session";

const { user, Logout } = useSession();
</script>

<template>
    <div class="buttons" v-if="!user">
        <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light" to="/login">
            Log in
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar">
            <img :src="user.pic" />
            <div>
                <strong>{{ user.firstName }} {{ user.lastName }}</strong> <br />
                <i>{{ user.email }}</i>
            </div>
        </div>
        <a class="button is-primary" @click="Logout()">
            <strong>Log out</strong>
        </a>
    </div>
</template>

<style scoped lang="scss">
.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .5em;
    gap: .5em;
    line-height: 1em;

    img {
        width: 48px;
        height: 48px;
        max-height: max-content;
        border-radius: 10%;
        overflow: hidden;
        object-fit: cover;
    }
}
</style>