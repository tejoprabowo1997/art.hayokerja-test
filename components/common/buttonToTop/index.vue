<script lang="ts" setup>
const scrollY = ref(0)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>

<template>
  <div class="fixed bottom-3 right-3">
    <Transition name="fade">
      <UiButton
        v-if="scrollY > 100"
        just-icon="mdi:arrow-up-bold-circle"
        color="primary"
        variant="solid"
        size="lg"
        @click="scrollToTop"
      />
    </Transition>
  </div>
</template>

<style scoped></style>
