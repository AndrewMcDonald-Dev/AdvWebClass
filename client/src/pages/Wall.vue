<script setup lang="ts">
import { ref } from 'vue';
import Messages from '../components/Messages.vue'

const asideTab = ref('All')
const changeAsideTab = (tab: string) => {
    asideTab.value = tab
}
</script>

<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-7">
                    <article class="panel">
                        <Messages />
                    </article>
                </div>
                <div class="column is-4">
                    <nav class="panel">
                        <p class="panel-heading">Repositories</p>
                        <div class="panel-block">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="Search" />
                                <span class="icon is-left">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                </span>
                            </p>
                        </div>
                        <p class="panel-tabs">
                            <a
                                :class="{ 'is-active': asideTab == 'All' }"
                                @click="changeAsideTab('All')"
                            >All</a>
                            <a
                                :class="{ 'is-active': asideTab == 'Public' }"
                                @click="changeAsideTab('Public')"
                            >Public</a>
                            <a
                                :class="{ 'is-active': asideTab == 'Private' }"
                                @click="changeAsideTab('Private')"
                            >Private</a>
                            <a
                                :class="{ 'is-active': asideTab == 'Sources' }"
                                @click="changeAsideTab('Sources')"
                            >Sources</a>
                            <a
                                :class="{ 'is-active': asideTab == 'Forks' }"
                                @click="changeAsideTab('Forks')"
                            >Forks</a>
                        </p>
                        <a class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            bulma
                        </a>
                        <a class="panel-block">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            marksheet
                        </a>
                        <a class="panel-block">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            minireset.css
                        </a>
                        <a class="panel-block">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            jgthms.github.io
                        </a>
                        <a class="panel-block">
                            <span class="panel-icon">
                                <i class="fas fa-code-branch" aria-hidden="true"></i>
                            </span>
                            daniellowtw/infboard
                        </a>
                        <a class="panel-block">
                            <span class="panel-icon">
                                <i class="fas fa-code-branch" aria-hidden="true"></i>
                            </span>
                            mojs
                        </a>
                        <label class="panel-block">
                            <input type="checkbox" />
                            remember me
                        </label>
                        <div class="panel-block">
                            <button
                                class="button is-link is-outlined is-fullwidth"
                            >Reset all filters</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>