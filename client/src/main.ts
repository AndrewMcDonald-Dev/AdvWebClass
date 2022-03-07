import "@fortawesome/fontawesome-free/css/all.css";
import "bulma";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import { router } from "./router";

createApp(App).use(router).use(createPinia()).mount("#app");
