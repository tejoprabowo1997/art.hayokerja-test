<script lang="ts" setup>
const scrollY = ref(0);
const mobileMenu = ref(false);

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const showLoginOrRegisterForm = () => {
  useState<boolean>('loginOrRegisterForm').value = true;
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<template>
  <div
    :class="[
      'transition-all duration-500 py-2 bg-primary text-white fixed top-0 left-0 right-0 z-[99]',
      scrollY > 50 && 'drop-shadow-lg',
    ]"
  >
    <div class="container">
      <nav
        class="flex justify-between 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center"
      >
        <div class="flex items-center">
          <div
            class="select-none tracking-widest font-shadows-into-light font-extrabold text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
          >
            ART.
          </div>
          <NuxtImg src="/logo.png" alt="ART HAYOKERJA" sizes="sm:100 md:150 lg:200 xl:250" />
        </div>

        <div class="space-x-1.5 hide-on-mobile">
          <q-btn label="Tentang Kami" flat icon="info" />
          <q-btn label="Cari ART" flat icon="search" />
          <q-btn label="Lowongan" flat icon="work" />
          <q-btn label="Masuk/Daftar" flat icon="login" @click="showLoginOrRegisterForm" />
        </div>

        <div class="show-on-mobile">
          <q-btn icon="menu" flat @click="() => (mobileMenu = !mobileMenu)" />
        </div>
      </nav>
    </div>
  </div>

  <Transition name="slide">
    <div
      v-if="mobileMenu"
      :class="['bg-primary grid grid-cols-1 py-2 px-2 text-white fixed left-0 right-0', scrollY > 50 && 'top-14']"
    >
      <q-btn label="Tentang Kami" flat icon="info" />
      <q-btn label="Cari ART" flat icon="search" />
      <q-btn label="Masuk/Registrasi" flat icon="login" />
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
