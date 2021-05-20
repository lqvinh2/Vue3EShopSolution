import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import UseStoreNavbar from "./Store/UseStoreNavbar.js";

import "./assets/js/developer/dev_main.js";
import helmet from "helmet";

const app = createApp(App);
app.use(helmet);

app.use(router);

//const { storeNavbar } = UseStoreNavbar();
app.use(UseStoreNavbar);

app.mount("#app");
