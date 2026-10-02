
import { defineClientConfig } from "vuepress/client";
import AutoPopup from "./components/AutoPopup.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("AutoPopup", AutoPopup);
  },
  rootComponents: [AutoPopup],
});