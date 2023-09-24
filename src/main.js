import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FloatingVue from "floating-vue";
import VueConfetti from "vue-confetti";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "floating-vue/dist/style.css";
import "./assets/base.css";
import "vuetify/dist/vuetify.min.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(FloatingVue);
app.use(VueConfetti);
app.use(vuetify);
app.mount("#app");
