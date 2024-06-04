<script setup lang="ts">
  import DefaultTheme from "vitepress/theme"
  import {onMounted} from "vue"
  import {resolveChineseSpaces} from "./chinese"

  onMounted(function renderChineseSpaces() {
    /** All tags that should be rendered. */
    const query = (function () {
      const handler: string[] = []
      for (const tag of ["p", "li"]) {
        handler.push(`div.vp-doc ${tag}`)
      }
      return handler.join(",")
    })()

    document.querySelectorAll(query).forEach(function (element) {
      element as HTMLParagraphElement
      element.childNodes.forEach(function (node) {
        if (!(node instanceof Text)) return
        node.replaceWith(resolveChineseSpaces(node.textContent ?? ""))
      })
    })
  })
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
  div.vp-doc p {
    text-indent: 2rem;
    text-align: justify;
    text-justify: inter-word;
  }

  div.title a.title {
    font-weight: 900;
  }

  div.vp-doc h1 {
    font-weight: 900;
  }

  div.vp-doc h2 {
    font-weight: 800;
    border-top: none;
  }
</style>
