<script setup lang="ts">
const props = defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
})

const uiContainerProps = ref(props)
</script>

<template>
  <div
    :class="uiContainerProps.fluid ? 'w-full' : 'max-w-screen-2xl px-7 mx-auto'"
  >
    <slot name="default" />
  </div>
</template>
