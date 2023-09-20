<script lang="ts" setup>
const tab = ref('searchByKeyword');
</script>

<template>
  <div class="mt-10 py-10" id="housekeeper">
    <div class="container">
      <div class="flex flex-col items-center gap-10">
        <div class="text-3xl font-bold">
          Temukan
          <span class="text-primary text-4xl">A</span>sisten <span class="text-primary text-4xl">R</span>umah
          <span class="text-primary text-4xl">T</span>angga yang Tepat untuk Anda
        </div>

        <div class="grid grid-cols-12 w-full">
          <q-tabs
            v-model="tab"
            class="bg-positive text-white col-span-12"
            align="justify"
            active-bg-color="primary"
            indicator-color="primary"
          >
            <q-tab name="searchByKeyword" label="Pencarian Keyword" />
            <q-tab name="searchByFilter" label="Pencarian Filter" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated class="col-span-12">
            <q-tab-panel name="searchByKeyword">
              <q-input label="Pencarian ART" outlined dense>
                <template v-slot:append>
                  <q-icon name="search" color="primary" />
                </template>
              </q-input>
            </q-tab-panel>
            <q-tab-panel name="searchByFilter">
              <div class="grid grid-cols-12 gap-5 w-full">
                <q-input label="Pilih Kota" class="col-span-3" outlined dense />
                <q-input label="Nama Pekerja" class="col-span-3" outlined dense />
                <q-input label="Pendidikan Terakhir" class="col-span-3" outlined dense />
                <q-input label="Profesi" class="col-span-3" outlined dense />
                <q-input label="Suku" class="col-span-3" outlined dense />
                <q-input label="Agama" class="col-span-3" outlined dense />
                <q-input label="Status" class="col-span-3" outlined dense />
                <q-input label="Kategori" class="col-span-3" outlined dense />
                <q-input label="Min Usia" class="col-span-3" outlined dense />
                <q-input label="Max Usia" class="col-span-3" outlined dense />
                <q-input label="Min Gaji Bulanan" class="col-span-3" outlined dense />
                <q-input label="Max Gaji Bulanan" class="col-span-3" outlined dense />

                <q-btn label="Filter" class="col-span-12" color="primary" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>

        <div class="grid grid-cols-12 gap-7 w-full">
          <div class="col-span-12">
            <div class="text-lg">Hasil Pencarian:</div>
          </div>
          <div v-for="i in 24" class="col-span-2">
            <q-card>
              <q-img src="/art1.png" />
              <div class="absolute bottom-14 left-0 right-0">
                <div class="py-1 bg-slate-900 bg-opacity-60 text-center text-white">Spesialis PRT</div>
              </div>
              <q-card-actions class="bg-slate-100">
                <div>Rina Sumiyati</div>
                <div>7 Tahun Pengalaman</div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
