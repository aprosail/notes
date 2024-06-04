import type {Theme} from "vitepress"
import Bilibili from "./Bilibili.vue"
import Layout from "./Layout.vue"

export default {
  Layout,
  enhanceApp({app}) {
    app.component("Bilibili", Bilibili)
  },
} satisfies Theme
