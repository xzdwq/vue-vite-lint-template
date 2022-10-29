<template>
  <div>
    <div class="flex justify-center items-center pt-4 font(base semibold) text(lg tertiary)">Vue 3 Vite TS Twind</div>
    <div class="flex justify-center items-center pt-4 font(base semibold) text(lg tertiary)">
      <q-btn color="primary" text-color="tertiary" label="Add data" icon="add" />
      <i data-icon="settings" />
      <i data-icon="settings" class="filled" />
    </div>
    <div class="q-pa-md flex justify-center items-center h-full">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" today-btn landscape first-day-of-week="1" color="tertiary" text-color="quaternary" />
      </div>
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="children:(my-2)">
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(lime-500 dark:rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(montserrat light)">Montserrat light: {{ t('welcome') }}</div>
          <div class="font-montserrat">Montserrat: {{ t('welcome') }}</div>
          <div class="font-montserrat italic">Montserrat italic: {{ t('welcome') }}</div>
          <div class="font(montserrat bold) italic">Montserrat bold italic: {{ t('welcome') }}</div>
          <div class="font(montserrat bold)">Montserrat bold: {{ t('welcome') }}</div>
        </div>
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(segoe-ui light)">Segoe UI light: {{ t('welcome') }}</div>
          <div class="font-segoe-ui">Segoe UI: {{ t('welcome') }}</div>
          <div class="font-segoe-ui italic">Segoe UI italic: {{ t('welcome') }}</div>
          <div class="font(segoe-ui bold) italic">Segoe UI bold italic: {{ t('welcome') }}</div>
          <div class="font(segoe-ui bold)">Segoe UI bold: {{ t('welcome') }}</div>
        </div>
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(benzin light)">Benzin light: {{ t('welcome') }}</div>
          <div class="font-benzin">Benzin: {{ t('welcome') }}</div>
          <div class="font-benzin italic">Benzin italic: {{ t('welcome') }}</div>
          <div class="font(benzin bold) italic">Benzin bold italic: {{ t('welcome') }}</div>
          <div class="font(benzin bold)">Benzin bold: {{ t('welcome') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const date = ref<string>('2019/02/01');
</script>
