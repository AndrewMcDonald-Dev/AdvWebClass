import { defineStore } from "pinia";
import * as users from "../models/user";
import router from "../router";
import { useMessages } from "./messages";
import { api } from "./myFetch";

export const useSession = defineStore("session", {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
    }),
    actions: {
        async Login(email: string, password: string) {
            const messages = useMessages();

            try {
                const user = await this.api("users/login", { email, password });
                if (user) {
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });

                    this.user = user;
                    router.push(this.destinationUrl ?? "/wall");
                }
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications);
            }
        },

        Logout() {
            this.user = null;
            router.push("/login");
        },

        async api(
            url: string,
            body?: any,
            method?: "GET" | "POST" | "PUT" | "DELETE",
            headers: any = {}
        ) {
            const messages = useMessages();

            if (this.user?.token)
                headers.Authorization = `Bearer ${this.user.token}`;

            try {
                const response = await api(url, body, method, headers);

                if (response.errors?.length)
                    throw { message: response.errors.join("") };

                return await response.data;
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        },
    },
});
