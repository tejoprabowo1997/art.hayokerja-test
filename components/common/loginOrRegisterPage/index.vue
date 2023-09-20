<script lang="ts" setup>
const showForm = useState<boolean>('loginOrRegisterForm');
const tab = ref('loginForm');
</script>

<template>
  <q-dialog v-model="showForm" position="right" full-height class="hide-on-mobile">
    <div class="grid grid-cols-12 gap-5 bg-white min-w-[524px]">
      <div class="col-span-12">
        <q-tabs
          v-model="tab"
          active-bg-color="primary"
          content-class="bg-positive text-white"
          indicator-color="primary"
        >
          <q-tab name="loginForm" label="Masuk" />
          <q-tab name="registerForm" label="Daftar" />
        </q-tabs>
      </div>
      <div class="col-span-12">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="loginForm">
            <q-card flat>
              <q-card-section class="space-y-3">
                <div class="text-xl font-semibold">Silahkan Masuk</div>
                <q-input label="Email" outlined />
                <q-input label="Password" type="password" outlined />
                <div class="grid grid-cols-12">
                  <div class="col-span-6 items-center">
                    <q-checkbox label="Ingatkan Saya" dense />
                  </div>
                  <div class="col-span-6 text-right items-center">
                    <a href="#" class="text-primary">Lupa Password?</a>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="center">
                <q-btn label="Login" color="primary" class="w-full" />
              </q-card-actions>
            </q-card>
          </q-tab-panel>
          <q-tab-panel name="registerForm">
            <q-card flat>
              <q-card-section class="space-y-3">
                <div class="text-xl font-semibold">Silahkan Daftar</div>
                <q-input label="Nama Lengkap" outlined />
                <q-input label="Email" outlined />
                <q-input label="Password" type="password" outlined />
                <q-input label="Konfirmasi Password" type="password" outlined />
                <q-select
                  label="Saya mendaftar untuk"
                  outlined
                  :options="['Menjadi ART', 'Mencari Tenaga ART']"
                  filled
                />
              </q-card-section>

              <q-card-actions align="center">
                <q-btn label="Daftar" color="primary" class="w-full" />
              </q-card-actions>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-dialog>
</template>

<style scoped></style>
