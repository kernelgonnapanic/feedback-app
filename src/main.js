import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Main from "./pages/Main.vue";
import Feedbacks from "./pages/Feedbacks.vue";
import Feedback from "./pages/Feedback.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/feedbacks", component: Feedbacks },
  { path: "/feedbacks/:id", component: Feedback },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
