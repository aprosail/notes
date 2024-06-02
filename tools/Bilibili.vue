<script lang="ts" setup>
  //@ts-ignore
  defineProps({vid: {type: String, required: true}})
</script>

<template>
  <div class="area">
    <div class="container">
      <iframe
        :src="`//player.bilibili.com/player.html?bvid=${vid}&autoplay=0`"
        class="player"
        frameborder="no"
        allowfullscreen
      ></iframe>
    </div>
    <div class="comments">
      观看视频建议直接前往B站, 此处播放器仅供预览, 不支持字幕且清晰度较低
    </div>
  </div>
</template>

<style lang="scss" scoped>
  div.area {
    margin-top: 16px;
    margin-bottom: 50px;
    div.container {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;
      border-radius: 16.18px;
      iframe.player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    div.comments {
      margin-top: 10px;
      margin-left: 65px;
      margin-right: 65px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 50%;
    }
  }
</style>
