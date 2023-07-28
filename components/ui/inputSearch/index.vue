<script lang="ts" setup>
const props = defineProps<{
  label?: string
  placeholder?: string
  modelValue: any
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  iconLeft?: string
  iconRight?: string
  hint?: string
  clearable?: boolean
  apiUrl?: string
}>()
</script>

<template>
  <div class="relative w-full text-slate-700 group">
    <input
      class="transition-all duration-500 w-full rounded outline-none tracking-tighter font-semibold py-2 ring focus:shadow-xl hover:shadow-lg"
    />
  </div>
</template>

<style scoped></style>
