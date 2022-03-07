import { defineStore } from "pinia";

export const useMessages = defineStore("message", {
    state: () => ({
        tasks: [
            { title: "Make Bulma great again", isCompleted: true },
            { title: "Add some more features", isCompleted: false },
            { title: "Make a github account", isCompleted: false },
            { title: "Learn how to use github", isCompleted: false },
            { title: "add a .gitignore file", isCompleted: false },
        ],
        currentTab: "All",
    }),
    actions: {
        displayedTasks() {
            if (this.currentTab === "Current")
                return this.tasks.filter(({ isCompleted }) => !isCompleted);
            else if (this.currentTab === "Completed")
                return this.tasks.filter(({ isCompleted }) => isCompleted);
            else return this.tasks;
        },
    },
});
