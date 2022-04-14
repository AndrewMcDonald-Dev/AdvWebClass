<script setup lang="ts">
import session, { Logout } from '../models/session';

</script>

<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button is-light" to="/login">Log in</router-link>
        <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar">
            <div class="avatar-image">
                <figure class="image is-64x64">
                    <img :src="session.user.pic" class="img is-rounded" />
                </figure>
            </div>
            <div class="login-tag">
                <strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong>
                <i>{{ session.user.email }}</i>
            </div>
        </div>
        <a class="button is-primary" @click="Logout">
            <strong>Log Out</strong>
        </a>
    </div>
</template>

<style scoped lang="scss">
.login-tag {
    display: flex;
    flex-direction: column;
}

.avatar {
    display: flex;
    flex-direction: row;
    margin-right: 1em;
}

.img {
    max-height: 5em;
}

.avatar-image {
    margin: 0.4em;
    margin-top: 0em;
}
</style>
