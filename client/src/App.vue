<script setup lang="ts">
import Nav from './components/Nav.vue';
import Content from './components/Content.vue';
</script>

<template>
  <Nav />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
</style>
