<script lang="ts" setup>
const props = defineProps<{
  label?: string
  placeholder?: string
  modelValue: string | null | undefined
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  iconLeft?: string
  iconRight?: string
  hint?: string
  clearable?: boolean
  capitalize?: boolean
  sentenseCase?: boolean
  inputShouldBe?: 'email' | 'number'
  sameAs?: {
    value: any
    label: string
  }
  showHidePassword?: boolean
  readonly?: boolean
}>()

const emit = defineEmits({
  'update:modelValue': (value?: string) => true,
})

const uiInputProps = ref(props)
const error = ref(false)
const errorMessage = ref('')
const type = ref(`${props.showHidePassword ? 'password' : 'text'}`)

watch(
  uiInputProps,
  (newVal) => {
    // Capitalize
    if (newVal.capitalize) {
      emit('update:modelValue', newVal.modelValue?.toUpperCase())
    }

    // Sentense Case
    if (newVal.sentenseCase) {
      emit(
        'update:modelValue',
        newVal.modelValue
          ?.toLowerCase()
          .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())),
      )
    }

    // Input Should Be Number
    if (newVal.inputShouldBe === 'number') {
      emit('update:modelValue', newVal.modelValue?.replace(/\D/g, ''))
    }

    // Input Should Be Email
    if (newVal.inputShouldBe === 'email') {
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(newVal.modelValue as string)) {
        error.value = true
        errorMessage.value = 'Email yang anda masukan tidak valid'
      } else {
        error.value = false
        errorMessage.value = ''
      }
    }

    // Input Should Be Same As
    if (newVal.sameAs) {
      if (newVal.modelValue !== newVal.sameAs.value) {
        error.value = true
        errorMessage.value = `Input ${newVal.label} harus sama dengan input ${newVal.sameAs.label}`
      } else {
        error.value = false
        errorMessage.value = ''
      }
    }
  },
  { deep: true },
)
</script>

<template>
  <div class="relative w-full text-slate-700 group">
    <!-- Label -->
    <label
      v-if="uiInputProps.label"
      :class="[
        'transition-all duration-500 absolute bg-white left-2 -top-4 px-1',
        uiInputProps.error || error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
    >
      {{ uiInputProps.label }}
    </label>

    <!-- Icon Error -->
    <div
      v-if="uiInputProps.error || error"
      class="absolute -left-10 top-1.5 text-danger"
    >
      <Icon name="ic:baseline-warning" size="30" />
    </div>

    <!-- Clear Input Icon -->
    <div
      v-if="uiInputProps.clearable"
      class="transition-all duration-500 absolute -right-10 top-1.5 hidden group-focus-within:block hover:block hover:text-danger cursor-pointer"
      @click="emit('update:modelValue', '')"
    >
      <Icon name="ic:baseline-delete" size="30" />
    </div>

    <!-- Icon Left -->
    <div
      v-if="uiInputProps.iconLeft"
      :class="[
        'transition-all duration-500 absolute left-3 top-1.5',
        uiInputProps.error || error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
    >
      <Icon :name="iconLeft" size="30" />
    </div>

    <!-- Icon Right -->
    <div
      v-if="uiInputProps.iconRight && !uiInputProps.showHidePassword"
      :class="[
        'transition-all duration-500 absolute right-3 top-1.5 cursor-pointer hover:opacity-50',
        uiInputProps.error || error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
    >
      <Icon :name="uiInputProps.iconRight" size="30" />
    </div>

    <!-- Icon Show Hide Password -->
    <div
      v-if="uiInputProps.showHidePassword"
      :class="[
        'transition-all duration-500 absolute right-3 top-1.5 cursor-pointer hover:opacity-50',
        uiInputProps.error || error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
      @click="
        () => {
          type = type === 'password' ? 'text' : 'password'
        }
      "
    >
      <Icon
        :name="
          type === 'password'
            ? 'ic:baseline-visibility'
            : 'ic:baseline-visibility-off'
        "
        size="30"
      />
    </div>

    <!-- Hint -->
    <div
      v-if="uiInputProps.hint"
      class="transition-all duration-500 absolute bottom-12 hidden group-focus-within:block"
    >
      <div
        class="bg-white p-4 left-0 shadow-lg rounded ring ring-slate-300 text-sm"
      >
        {{ uiInputProps.hint }}
      </div>
      <Icon name="ic:sharp-expand-circle-down" size="25" class="-mt-5 ml-2" />
    </div>

    <!-- Input -->
    <input
      :type="type"
      :value="uiInputProps.modelValue"
      @input="
        ($event) => {
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        }
      "
      :placeholder="uiInputProps.placeholder || 'Type here...'"
      :disabled="uiInputProps.disabled"
      :readonly="uiInputProps.readonly"
      :class="[
        'transition-all duration-500 w-full rounded outline-none placeholder:italic py-2 ring focus:shadow-xl hover:shadow-lg',
        uiInputProps.iconLeft ? 'pl-12' : 'pl-4',
        uiInputProps.iconRight ? 'pr-12' : 'pr-4',
        uiInputProps.error || error
          ? 'ring-danger'
          : 'ring-slate-700 focus:ring-primary',
      ]"
    />

    <!-- Error Message -->
    <div v-if="uiInputProps.error || error" class="mt-1">
      <div class="text-sm text-danger font-semibold">
        {{ uiInputProps.errorMessage || errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
</style>
