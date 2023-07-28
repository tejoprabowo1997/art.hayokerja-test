<script lang="ts" setup>
const scrollY = ref(0)

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
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
  <div
    :class="[
      'transition-all duration-500 fixed top-0 left-0 right-0 py-2 bg-primary text-white z-[99]',
      scrollY > 50 && 'drop-shadow-lg',
    ]"
  >
    <UiContainer>
      <nav class="flex items-center justify-center sm:justify-between">
        <div class="flex items-center">
          <div
            class="select-none tracking-widest font-shadows-into-light font-extrabold text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
          >
            ART.
          </div>
          <NuxtImg
            src="/logo.png"
            alt="ART HAYOKERJA"
            sizes="sm:100 md:150 lg:200 xl:250"
          />
        </div>

        <div class="hidden lg:flex lg:items-center">
          <UiButton
            text="Tentang Kami"
            icon-left="mdi:about-circle-outline"
            color="primary"
            variant="ghost"
            class="font-extralight text-white"
            @click="scrollTo('aboutUs')"
          />
          <span class="select-none font-extralight text-slate-400">|</span>
          <UiButton
            text="Cari ART"
            icon-left="ic:baseline-search"
            color="primary"
            variant="ghost"
            class="font-extralight text-white"
            @click="scrollTo('housekeeper')"
          />
          <span class="select-none font-extralight text-slate-400">|</span>
          <NuxtLink>
            <UiButton
              text="Masuk"
              icon-left="mdi:sign-in"
              color="primary"
              variant="ghost"
              class="font-extralight text-white track"
            />
          </NuxtLink>
        </div>
      </nav>
    </UiContainer>
  </div>
</template>

<style scoped></style>
