<template>
  <div>
    <div class="flex justify-center items-center pt-4 font(base semibold) text(lg tertiary)">Vue 3 Vite TS Twind</div>
    <div class="flex justify-center items-center pt-4 font(base semibold) text(lg tertiary)">
      <q-btn color="primary" text-color="tertiary" label="Add data" icon="add" />
      <i data-icon="settings" />
      <i data-icon="settings" class="filled" />
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="children:(my-2)">
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(lime-500 dark:rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(montserrat light)">Montserrat light: {{ demoText }}</div>
          <div class="font-montserrat">Montserrat: {{ demoText }}</div>
          <div class="font-montserrat italic">Montserrat italic: {{ demoText }}</div>
          <div class="font(montserrat bold) italic">Montserrat bold italic: {{ demoText }}</div>
          <div class="font(montserrat bold)">Montserrat bold: {{ demoText }}</div>
        </div>
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(segoe-ui light)">Segoe UI light: {{ demoText }}</div>
          <div class="font-segoe-ui">Segoe UI: {{ demoText }}</div>
          <div class="font-segoe-ui italic">Segoe UI italic: {{ demoText }}</div>
          <div class="font(segoe-ui bold) italic">Segoe UI bold italic: {{ demoText }}</div>
          <div class="font(segoe-ui bold)">Segoe UI bold: {{ demoText }}</div>
        </div>
        <div
          class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2"
        >
          <div class="font(benzin light)">Benzin light: {{ demoText }}</div>
          <div class="font-benzin">Benzin: {{ demoText }}</div>
          <div class="font-benzin italic">Benzin italic: {{ demoText }}</div>
          <div class="font(benzin bold) italic">Benzin bold italic: {{ demoText }}</div>
          <div class="font(benzin bold)">Benzin bold: {{ demoText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const demoText = 'VUE VITE TS TWIND Проверка шрифта';
</script>
