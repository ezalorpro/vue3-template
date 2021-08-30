import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/plugins/axios";

createApp(App).use(axios).use(store).use(router).mount("#app");
