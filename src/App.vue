<script setup lang="ts">
  import User from '@/components/user';
</script>

<template>
  <IxRow class="h-full">
    <IxCol class="h-full" flex="280px"> <User /> </IxCol>
    <IxCol flex="auto" />
    <IxCol flex="360px" />
  </IxRow>
</template>

<style lang="less">
  html,
  body,
  #app {
    @apply .h-full
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
