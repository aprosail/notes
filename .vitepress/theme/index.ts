import type {Theme} from "vitepress"
import DefaultTheme from "vitepress/theme"
import Bilibili from "./Bilibili.vue"
import "./root.css"

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    app.component("Bilibili", Bilibili)
  },
} satisfies Theme
