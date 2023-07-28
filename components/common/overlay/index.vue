<script lang="ts" setup>
const addClassHideScroll = () => {
  document.body.classList.add('overflow-y-hidden')
}
</script>

<template>
  <div class="fixed top-0 w-full z-[100]">
    <div
      class="flex flex-col h-screen items-center justify-center bg-slate-950 bg-opacity-70"
    >
      <div class="spinner-container">
        <div
          class="loader ease-linear rounded-full border-4 border-t-4 border-white h-20 w-20"
        />
      </div>
      <div class="text-white text-lg mt-4">Mohon Tunggu...</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-container {
  animation: pulse 1s ease-in-out infinite;
}

.loader {
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
}
</style>
