<template>
  <div class="main">
    <div class="blobs">
      <div class="blob" v-for="blob in 20" :key="blob"></div>
    </div>
    <div class="content">
      <div class="mx-auto w-full max-w-xs">
        <BaseLogo />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import anime from 'animejs';

onMounted(() => {
  anime.set('.blob', {
    translateX: () => {
      return anime.random(-500, window.innerWidth);
    },
    translateY: () => {
      return anime.random(-500, window.innerHeight);
    },
    height: () => {
      return anime.random(0, 1000);
    },
  });

  anime({
    targets: '.blob',
    translateX: () => {
      return anime.random(0, window.innerWidth);
    },
    translateY: () => {
      return anime.random(0, window.innerHeight);
    },
    duration: 15000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
  });
});
</script>

<style lang="postcss" scoped>
.main {
  @apply flex h-full w-full bg-black;

  .blobs {
    @apply inset-0 absolute overflow-hidden;

    .blob {
      @apply absolute bg-primary/5 rounded-full aspect-square w-auto;
    }
  }

  .content {
    @apply flex flex-col gap-12 z-10 w-full h-full items-center justify-center backdrop-blur-3xl;
  }
}
</style>
