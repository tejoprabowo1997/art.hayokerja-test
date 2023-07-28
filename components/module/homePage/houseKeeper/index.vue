<script lang="ts" setup>
const searchByKeyword = ref(true)
const searchByFilter = ref(false)
</script>

<template>
  <UiContainer class="mt-10 py-10" id="housekeeper">
    <div class="flex flex-col items-center gap-10">
      <div class="text-3xl font-bold">
        Temukan
        <span class="text-primary text-4xl">A</span>sisten
        <span class="text-primary text-4xl">R</span>umah
        <span class="text-primary text-4xl">T</span>angga yang Tepat untuk Anda
      </div>
      <div class="grid grid-cols-12 w-full">
        <div
          :class="[
            'col-span-6 transition-all duration-500 bg-primary text-white text-center py-2 rounded-l cursor-pointer hover:bg-opacity-90',
            searchByKeyword ? 'bg-opacity-100 drop-shadow-lg' : 'bg-opacity-50',
          ]"
          @click="
            () => {
              searchByKeyword = true
              searchByFilter = false
            }
          "
        >
          Pencarian Keyword
        </div>
        <div
          :class="[
            'col-span-6 transition-all duration-500 bg-primary text-white text-center py-2 rounded-r cursor-pointer hover:bg-opacity-90',
            searchByFilter ? 'bg-opacity-100 drop-shadow-lg' : 'bg-opacity-50',
          ]"
          @click="
            () => {
              searchByKeyword = false
              searchByFilter = true
            }
          "
        >
          Pencarian Filter
        </div>
      </div>
      <TransitionGroup
        enter-active-class="animate-slideInLeft"
        leave-active-class="animate-slideOutLeft"
      >
        <UiInput
          v-if="searchByKeyword"
          label="Pencarian ART"
          placeholder="Masukan kata pencarian disini"
          icon-right="ic:baseline-search"
          hint="Masukan kata pencarian seperti nama, alamat, atau nomor telepon ART"
        />

        <div v-else class="grid grid-cols-12 gap-x-5 gap-y-8 w-full">
          <UiInput label="Pilih Kota" class="col-span-6 sm:col-span-3" />
          <UiInput label="Min Usia" class="col-span-6 sm:col-span-3" />
          <UiInput label="Max Usia" class="col-span-6 sm:col-span-3" />
          <UiInput label="Max Gaji" class="col-span-6 sm:col-span-3" />
          <UiInput label="Agama" class="col-span-6 sm:col-span-4" />
          <UiInput label="Suku" class="col-span-6 sm:col-span-4" />
          <UiInput label="Gender" class="col-span-6 sm:col-span-4" />
          <UiInput label="Status" class="col-span-6 sm:col-span-6" />
          <UiInput label="Spesialisasi" class="col-span-12 sm:col-span-6" />
          <UiButton
            text="Filter"
            color="primary"
            variant="solid"
            class="col-span-12 tracking-widest"
          />
        </div>
      </TransitionGroup>

      <div
        class="relative grid grid-cols-12 w-full gap-y-3 sm:gap-x-10 sm:gap-y-5"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3"
        >
          <div
            class="transition-all duration-500 ring ring-primary cursor-pointer hover:shadow-2xl bg-opacity-20 p-3 rounded shadow-md gap-y-10"
          >
            <div class="font-bold">
              Jane Sabilla
              <span class="text-sm text-primary italic">(Baby Sitter)</span>
            </div>
            <div class="mt-3">
              <NuxtImg src="art1.png" alt="Jane Sabilla" class="rounded" />
              <div class="text-xl text-primary">
                <Icon name="material-symbols:star" />
                <span class="text-sm">Terverifikasi</span>
              </div>
            </div>
            <div class="mt-3 flex flex-col">
              <div class="w-full text-sm">Usia 25 tahun</div>
              <div class="w-full text-sm">Gender Perempuan</div>
              <div class="w-full text-sm">Suku Jawa</div>
              <div class="w-full text-sm">Agama Islam</div>
            </div>
            <UiButton
              text="DETAIL"
              size="sm"
              color="primary"
              variant="ghost"
              block
              class="mt-3 tracking-widest"
            />
          </div>
        </div>
      </div>

      <UiButton
        text="Lihat Semua"
        color="primary"
        variant="outline"
        class="tracking-widest"
      />
    </div>
  </UiContainer>
</template>

<style scoped></style>
