<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
  },
  type: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
  },
  iconRight: {
    type: String,
  },
  color: {
    type: String,
  },
  variant: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
  },
  block: {
    type: Boolean,
    default: false,
  },
  justIcon: {
    type: String,
  },
})

const uiButtonProps = ref(props)
</script>

<template>
  <button
    :disabled="uiButtonProps.disabled || uiButtonProps.loading"
    :class="`
      transition-all
      duration-500
      font-semibold
      ring
      ring-current
      shadow
      hover:shadow-lg
      hover:opacity-70
      rounded
      active:animate-click
      flex items-center justify-center
      disabled:opacity-50
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      disabled:animate-none
      ${uiButtonProps.block && !uiButtonProps.justIcon && 'w-full'}
      ${
        (uiButtonProps.size === 'sm' &&
          !uiButtonProps.justIcon &&
          'py-1 px-4 text-sm') ||
        (size === 'lg' && !uiButtonProps.justIcon && 'py-2 px-6 text-lg') ||
        (!justIcon && 'py-1.5 px-5 text-base') ||
        (uiButtonProps.size === 'sm' &&
          uiButtonProps.justIcon &&
          'p-1 text-sm rounded-full') ||
        (size === 'lg' &&
          uiButtonProps.justIcon &&
          'p-2 text-lg rounded-full') ||
        (uiButtonProps.justIcon && 'p-1.5 text-base rounded-full')
      }
      ${
        (uiButtonProps.color === 'primary' &&
          uiButtonProps.variant === 'solid' &&
          'bg-primary text-white ring-primary') ||
        (uiButtonProps.color === 'primary' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-primary hover:bg-primary disabled:hover:bg-white hover:text-white disabled:hover:text-primary hover:ring-primary hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'primary' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-primary ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'primary' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-primary ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'secondary' &&
          uiButtonProps.variant === 'solid' &&
          'bg-secondary text-white ring-secondary') ||
        (uiButtonProps.color === 'secondary' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-secondary hover:bg-secondary disabled:hover:bg-white hover:text-white disabled:hover:text-secondary hover:ring-secondary hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'secondary' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-secondary ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'secondary' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-secondary ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'success' &&
          uiButtonProps.variant === 'solid' &&
          'bg-success text-white ring-success') ||
        (uiButtonProps.color === 'success' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-success hover:bg-success disabled:hover:bg-white hover:text-white disabled:hover:text-success hover:ring-success hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'success' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-success ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'success' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-success ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'danger' &&
          uiButtonProps.variant === 'solid' &&
          'bg-danger text-white ring-danger') ||
        (uiButtonProps.color === 'danger' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-danger hover:bg-danger disabled:hover:bg-white hover:text-white disabled:hover:text-danger hover:ring-danger hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'danger' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-danger ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'danger' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-danger ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'warning' &&
          uiButtonProps.variant === 'solid' &&
          'bg-warning text-white ring-warning') ||
        (uiButtonProps.color === 'warning' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-warning hover:bg-warning disabled:hover:bg-white hover:text-white disabled:hover:text-warning hover:ring-warning hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'warning' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-warning ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'warning' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-warning ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'info' &&
          uiButtonProps.variant === 'solid' &&
          'bg-info text-white ring-info') ||
        (uiButtonProps.color === 'info' &&
          uiButtonProps.variant === 'outline' &&
          'bg-white text-info hover:bg-info disabled:hover:bg-white hover:text-white disabled:hover:text-info hover:ring-info hover:opacity-100 hover:bg-opacity-60') ||
        (uiButtonProps.color === 'info' &&
          uiButtonProps.variant === 'ghost' &&
          'bg-transparent text-info ring-transparent shadow-none hover:shadow-none') ||
        (uiButtonProps.color === 'info' &&
          uiButtonProps.variant === 'link' &&
          'bg-transparent text-info ring-transparent shadow-none hover:shadow-none underline') ||
        (uiButtonProps.color === 'light' &&
          uiButtonProps.variant === 'solid' &&
          'bg-light text-white ring-light')
      }
    `"
  >
    <Icon
      v-if="uiButtonProps.loading"
      name="gg:spinner"
      class="mr-1 animate-spin"
      size="30"
    />
    <Icon
      v-if="uiButtonProps.iconLeft"
      :name="uiButtonProps.iconLeft"
      class="mr-1"
      size="30"
    />
    <Icon
      v-if="uiButtonProps.justIcon"
      :name="uiButtonProps.justIcon"
      size="30"
    />
    <div v-if="!justIcon">{{ uiButtonProps.text }}</div>
    <Icon
      v-if="uiButtonProps.iconRight"
      :name="uiButtonProps.iconRight"
      class="ml-1"
      size="30"
    />
  </button>
</template>

<style scoped></style>
