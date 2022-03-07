<script setup lang="ts">
import { Login } from "../models/session"
</script>

<template>
    <div class="section">
        <h1 class="title">Login Page</h1>
        <button class="button is-primary" @click="Login('cool', 'qwerty')">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
    </div>
</template>

<script></script>