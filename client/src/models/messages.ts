import { defineStore } from "pinia";
import { convertDate } from "../utils/convertDate";
import session from "./session";

export type task = {
    title: string;
    isCompleted: boolean;
    assignedTo: number;
    createdBy: number;
    dueDate: number;
    timeCreated: Date;
};

export const useMessages = defineStore("message", {
    state: () => ({
        tasks: [
            {
                title: "Make Bulma great again",
                isCompleted: true,
                assignedTo: 1,
                createdBy: 2,
                dueDate: new Date().getTime() + 10000,
                timeCreated: new Date(),
            },
            {
                title: "Add some more features",
                isCompleted: false,
                assignedTo: 1,
                createdBy: 1,
                dueDate: new Date().getTime() + 50000,
                timeCreated: new Date(),
            },
            {
                title: "Make a github account",
                isCompleted: false,
                assignedTo: 2,
                createdBy: 1,
                dueDate: new Date().getTime() + 30000,
                timeCreated: new Date(),
            },
            {
                title: "Learn how to use github",
                isCompleted: false,
                assignedTo: 3,
                createdBy: 2,
                dueDate: new Date().getTime() + 40000,
                timeCreated: new Date(),
            },
            {
                title: "add a .gitignore file",
                isCompleted: false,
                assignedTo: 3,
                createdBy: 3,
                dueDate: new Date().getTime() + 20000,
                timeCreated: new Date(),
            },
        ] as task[],
        currentTab: "All",
        newTask: "",
        toBeAssigned: 0,
        newDueDate: "",
    }),
    actions: {
        changeTab(tab: string) {
            this.currentTab = tab;
        },
        addTask() {
            if (!session.user)
                throw new Error("Current user not stored in addTask().");

            if (this.newTask && this.toBeAssigned && this.newDueDate) {
                this.tasks.unshift({
                    title: this.newTask,
                    isCompleted: false,
                    assignedTo: this.toBeAssigned,
                    createdBy: session.user.id,
                    dueDate: convertDate(this.newDueDate),
                    timeCreated: new Date(),
                });
                this.newTask = "";
                this.toBeAssigned = 0;
                this.newDueDate = "";
            }
        },
        changeToBeAssigned(id: number) {
            this.toBeAssigned = id;
        },
    },
    getters: {
        displayedTasks: ({ tasks, currentTab }): task[] => {
            if (!session.user)
                throw new Error("No user detected in displayedTasks()");
            switch (currentTab) {
                case "Created":
                    return tasks.filter(
                        ({ createdBy }) => createdBy === session.user?.id
                    );
                case "Assigned":
                    return tasks.filter(
                        ({ assignedTo }) => assignedTo === session.user?.id
                    );
                case "Upcoming":
                    return tasks.sort(
                        (task1, task2) => task1.dueDate - task2.dueDate
                    );
                case "Completed":
                    return tasks.filter(({ isCompleted }) => isCompleted);
                case "All":
                    return tasks.sort(
                        (task1, task2) =>
                            task2.timeCreated.getTime() -
                            task1.timeCreated.getTime()
                    );
                default:
                    return tasks;
            }
        },
    },
});
