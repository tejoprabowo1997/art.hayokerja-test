<script lang="ts" setup>
const props = defineProps<{
  label?: string
  error?: boolean
  errorMessage?: string
  icon?: string
  items?: any[]
  placeholder?: string
  modelValue: any
  fieldKey?: string
  fieldName?: string
  disabled?: boolean
  clearable?: boolean
}>()

const emit = defineEmits({
  'update:modelValue': (value?: string) => true,
})

const uiInputSelectProps = ref(props)
const showOptions = ref(false)
const value = ref('')

watch(uiInputSelectProps, (newVal) => {}, { deep: true })
</script>

<template>
  <div class="relative w-full text-slate-700 group">
    <!-- Label -->
    <label
      v-if="uiInputSelectProps.label"
      :class="[
        'transition-all duration-500 absolute bg-white left-2 -top-4 px-1 font-semibold tracking-tighter',
        uiInputSelectProps.error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
    >
      {{ uiInputSelectProps.label }}
    </label>

    <!-- Icon Error -->
    <div
      v-if="uiInputSelectProps.error"
      class="absolute -left-10 top-1.5 text-danger"
    >
      <Icon name="ic:baseline-warning" size="30" />
    </div>

    <!-- Clear Input Icon -->
    <div
      v-if="uiInputSelectProps.clearable"
      class="transition-all duration-500 absolute -right-10 top-1.5 hidden group-focus-within:block hover:block hover:text-danger cursor-pointer"
      @click="emit('update:modelValue', '')"
    >
      <Icon name="ic:baseline-delete" size="30" />
    </div>

    <!-- Icon Left -->
    <div
      v-if="uiInputSelectProps.icon"
      :class="[
        'transition-all duration-500 absolute left-3 top-1.5',
        uiInputSelectProps.error
          ? 'text-danger'
          : 'group-focus-within:text-primary',
      ]"
    >
      <Icon :name="uiInputSelectProps.icon" size="30" />
    </div>

    <!-- Icon Right ic:baseline-arrow-drop-down -->
    <TransitionGroup name="slide-fade">
      <div
        v-if="!showOptions"
        :class="[
          'transition-all duration-500 absolute right-3 top-1.5 cursor-pointer',
          uiInputSelectProps.error
            ? 'text-danger'
            : 'group-focus-within:text-primary',
        ]"
      >
        <Icon name="ic:baseline-arrow-drop-down" size="30" />
      </div>

      <div
        v-else
        :class="[
          'transition-all duration-500 absolute right-3 top-1.5 cursor-pointer',
          uiInputSelectProps.error
            ? 'text-danger'
            : 'group-focus-within:text-primary',
        ]"
      >
        <Icon name="ic:baseline-arrow-drop-up" size="30" />
      </div>
    </TransitionGroup>

    <!-- Select -->
    <select
      :value="uiInputSelectProps.modelValue"
      @input="
        ($event) => {
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        }
      "
      :class="[
        'transition-all duration-500 w-full rounded outline-none tracking-tighter font-semibold pr-12 py-2 ring focus:shadow-xl hover:shadow-lg',
        uiInputSelectProps.icon ? 'pl-12' : 'pl-4',
        uiInputSelectProps.error
          ? 'ring-danger'
          : 'ring-slate-700 focus:ring-primary',
      ]"
    >
      <option disabled selected value="" class="py-3">Please select...</option>
      <!-- if uiInputSelectProps.fieldKey And fieldName has value -->
      <option
        v-if="uiInputSelectProps.fieldKey && uiInputSelectProps.fieldName"
        v-for="(item, indexOption1) in uiInputSelectProps.items"
        :key="indexOption1"
        :value="item[uiInputSelectProps.fieldKey]"
      >
        {{ item[uiInputSelectProps.fieldName] }}
      </option>

      <!-- if uiInputSelectProps.fieldKey And fieldName doesn't has value -->
      <option
        v-else
        v-for="(item, indexOption2) in uiInputSelectProps.items"
        :key="indexOption2"
        :value="item"
        class="cursor-pointer hover:bg-slate-200 rounded animate-fadeIn"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none; /* Safari */
  -moz-appearance: none; /* Firefox */
  appearance: none;
  background-image: none; /* Hapus gambar latar belakang yang berisi panah dropdown */
}
</style>
