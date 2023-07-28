<template>
  <div>
    <CommonNavbar />
    <!--    <UiContainer> </UiContainer>-->
    <slot />
    <footer class="bg-primary text-white py-6">
      <UiContainer>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <div class="flex items-center">
              <div
                class="select-none tracking-widest font-shadows-into-light font-extrabold text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                ART.
              </div>
              <NuxtImg
                src="/logo.png"
                alt="ART HAYOKERJA"
                sizes="sm:100 md:100 lg:150 xl:200"
              />
            </div>
            <p class="text-sm">
              Solusi Terpercaya untuk Asisten Rumah Tangga Anda
            </p>
          </div>

          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-gray-400 transition"
              >Beranda</a
            >
            <a href="#" class="text-white hover:text-gray-400 transition"
              >Tentang Kami</a
            >
            <a href="#" class="text-white hover:text-gray-400 transition"
              >Layanan</a
            >
            <a href="#" class="text-white hover:text-gray-400 transition"
              >Kontak</a
            >
          </div>
        </div>

        <div
          class="border-t border-gray-700 mt-4 pt-4 text-center md:text-left"
        >
          <p class="text-sm">
            &copy; 2023 art.hayokerja.com. All rights reserved.
          </p>
        </div>
      </UiContainer>
    </footer>
    <CommonButtonToTop />
  </div>
</template>
<script setup lang="ts"></script>
