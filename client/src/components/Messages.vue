<script setup lang="ts">
import { useMessages } from '../models/messages';
import { list, findUser } from '../models/user';
import Tasks from './Tasks.vue';

const messages = useMessages()
</script>

<template>
    <div class="tabs is-boxed">
        <ul>
            <li
                :class="{ 'is-active': messages.currentTab == 'Created' }"
                @click="messages.changeTab('Created')"
            >
                <a>
                    <span class="icon is-small">
                        <i class="fas fa-clipboard-list"></i>
                    </span>
                    <span>Created</span>
                </a>
            </li>
            <li
                :class="{ 'is-active': messages.currentTab == 'Assigned' }"
                @click="messages.changeTab('Assigned')"
            >
                <a>
                    <span class="icon is-small">
                        <i class="fas fa-calendar-times"></i>
                    </span>
                    <span>Assigned</span>
                </a>
            </li>
            <li
                :class="{ 'is-active': messages.currentTab == 'Upcoming' }"
                @click="messages.changeTab('Upcoming')"
            >
                <a>
                    <span class="icon is-small">
                        <i class="fa-solid fa-calendar-days"></i>
                    </span>
                    <span>Upcoming</span>
                </a>
            </li>
            <li
                :class="{ 'is-active': messages.currentTab == 'Completed' }"
                @click="messages.changeTab('Completed')"
            >
                <a>
                    <span class="icon is-small">
                        <i class="fa-solid fa-calendar-check"></i>
                    </span>
                    <span>Completed</span>
                </a>
            </li>
            <li
                :class="{ 'is-active': messages.currentTab == 'All' }"
                @click="messages.changeTab('All')"
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
        <form @submit.prevent="messages.addTask" style="flex-grow: 1">
            <div class="columns">
                <div class="field has-addons column is-5">
                    <div class="control has-icons-left">
                        <input
                            class="input is-primary"
                            type="text"
                            placeholder="New Task"
                            v-model="messages.newTask"
                            maxlength="35"
                            required
                        />
                        <span class="icon is-left">
                            <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="control">
                        <button class="button is-primary">Add</button>
                    </div>
                </div>
                <div class="column is-2">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button
                                class="button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu4"
                            >
                                <span>{{ messages.toBeAssigned ? findUser(messages.toBeAssigned).firstName : 'Worker' }}</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                                <a
                                    class="dropdown-item mini-avatar"
                                    v-for="user in list"
                                    @click="messages.changeToBeAssigned(user.id)"
                                >
                                    <figure class="image is-32x32">
                                        <img :src="user.pic" class="img is-rounded" />
                                    </figure>
                                    <p>{{ user.firstName }}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                    <input type="date" class="date-picker" required v-model="messages.newDueDate" />
                </div>
            </div>
            <Tasks />
        </form>
    </div>
</template>

<style scoped lang="scss">
.date-picker {
    border-color: lightgrey;
    font-family: "Helvetica", arial, sans-serif;
    font-size: 18px;
    border: 1px solid #ecf0f1;
    background: #ecf0f1;
    padding: 0.35em;
    &::-webkit-clear-button {
        display: none;
    }

    &::-webkit-inner-spin-button {
        display: none;
    }

    &::-webkit-calendar-picker-indicator {
        color: #2c3e50;
    }

    &,
    focus {
        color: #98a7a8;
        box-shadow: none;
        -webkit-box-shadow: none;
    }
}
</style>