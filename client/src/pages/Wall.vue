<script setup lang="ts">import { ref, reactive, onMounted } from "vue"
import Messages from '../components/Messages.vue'

export type task = {
    title: string
    isCompleted: boolean
}

const currentTab = ref('All')
const newTask = ref('')
const tasks: task[] = reactive([
    { title: 'Make Bulma great again', isCompleted: true },
    { title: 'Add some more features', isCompleted: false },
    { title: 'Make a github account', isCompleted: false },
    { title: 'Learn how to use github', isCompleted: false },
    { title: 'add a .gitignore file', isCompleted: false },
])

const changeTab = (tab: string) => {
    currentTab.value = tab
}
const addTask = () => {
    tasks.unshift({ title: newTask.value, isCompleted: false })
    newTask.value = ''
}
const displayedTasks = (): task[] => {
    if (currentTab.value === "Current")
        return tasks.filter(({ isCompleted }) => !isCompleted)
    else if (currentTab.value === "Completed")
        return tasks.filter(({ isCompleted }) => isCompleted)
    else
        return tasks
}
</script>

<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">Component</p>
                            <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                                mauris.
                                <a
                                    href="#"
                                >@bulmaio</a>.
                                <a href="#">#css</a>
                                <a href="#">#responsive</a>
                                <br />
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Edit</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                    </div>
                </div>
                <div class="column is-6">
                    <article class="panel">
                        <div class="tabs is-boxed">
                            <ul>
                                <li
                                    :class="{ 'is-active': currentTab == 'Current' }"
                                    @click="changeTab('Current')"
                                >
                                    <a>
                                        <span class="icon is-small">
                                            <i class="fas fa-clipboard-list"></i>
                                        </span>
                                        <span>Current</span>
                                    </a>
                                </li>
                                <li
                                    :class="{ 'is-active': currentTab == 'Completed' }"
                                    @click="changeTab('Completed')"
                                >
                                    <a>
                                        <span class="icon is-small">
                                            <i class="fas fa-calendar-times"></i>
                                        </span>
                                        <span>Completed</span>
                                    </a>
                                </li>
                                <li
                                    :class="{ 'is-active': currentTab == 'Upcoming' }"
                                    @click="changeTab('Upcoming')"
                                >
                                    <a>
                                        <span class="icon is-small">
                                            <i class="fas fa-calendar-day"></i>
                                        </span>
                                        <span>Upcoming</span>
                                    </a>
                                </li>
                                <li
                                    :class="{ 'is-active': currentTab == 'All' }"
                                    @click="changeTab('All')"
                                >
                                    <a>
                                        <span class="icon is-small">
                                            <i class="fas fa-calendar"></i>
                                        </span>
                                        <span>All</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="panel-block">
                            <form @submit.prevent="addTask" style="flex-grow: 1">
                                <div class="field has-addons">
                                    <div class="control has-icons-left is-expanded">
                                        <input
                                            class="input is-primary"
                                            type="text"
                                            placeholder="New Task"
                                            v-model="newTask"
                                        />
                                        <span class="icon is-left">
                                            <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="control">
                                        <button class="button is-primary">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Messages />
                    </article>
                </div>
                <div class="column is-3">
                    <h2 class="title">Table of contents</h2>

                    <h3 class="subtitle">Intra-page navigation</h3>

                    <aside class="menu">
                        <p class="menu-label">General</p>
                        <ul class="menu-list">
                            <li>
                                <a>Dashboard</a>
                            </li>
                            <li>
                                <a>Customers</a>
                            </li>
                        </ul>
                        <p class="menu-label">Administration</p>
                        <ul class="menu-list">
                            <li>
                                <a>Team Settings</a>
                            </li>
                            <li>
                                <a class="is-active">Manage Your Team</a>
                                <ul>
                                    <li>
                                        <a>Members</a>
                                    </li>
                                    <li>
                                        <a>Plugins</a>
                                    </li>
                                    <li>
                                        <a>Add a member</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Invitations</a>
                            </li>
                            <li>
                                <a>Cloud Storage Environment Settings</a>
                            </li>
                            <li>
                                <a>Authentication</a>
                            </li>
                        </ul>
                        <p class="menu-label">Transactions</p>
                        <ul class="menu-list">
                            <li>
                                <a>Payments</a>
                            </li>
                            <li>
                                <a>Transfers</a>
                            </li>
                            <li>
                                <a>Balance</a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>