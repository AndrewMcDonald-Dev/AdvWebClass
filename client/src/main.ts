import "@fortawesome/fontawesome-free/css/all.css";
import "bulma";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import { router } from "./router";

createApp(App).use(router).mount("#app");
