<template>
<div>
  <div class="flex justify-center items-center pt-4 font(base semibold) text(lg blue-500 dark:(tertiary))">
    Vue 3 Vite TS Twind
  </div>
  <div class="flex justify-center items-center pt-4 font(base semibold) text(lg blue-500 dark:(tertiary))">
    <i data-icon="settings"/>
    <i data-icon="settings" class="filled"/>
  </div>
  <div class="flex justify-center items-center pt-4">
    <!-- <button class="bg(primary dark:(secondary)) text(secondary dark:(primary))" @click="toggleTheme">
      <i :data-icon="icon" :class="scalePulse" />
      Button
    </button> -->
    <button class="bg-secondary text-tertiary" @click="toggleTheme">
      <i :data-icon="icon" :class="scalePulse" />
      Button
    </button>
  </div>
  <div class="flex justify-center items-center h-full">
    <div class="children:(my-2)">
      <div class="border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2">
        <div class="font(segoe-ui light)">Segoe UI light: VUE VITE TS Проверка шрифта</div>
        <div class="font-segoe-ui">Segoe UI: VUE VITE TS Проверка шрифта</div>
        <div class="font-segoe-ui italic">Segoe UI italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(segoe-ui bold) italic">Segoe UI bold italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(segoe-ui bold)">Segoe UI bold: VUE VITE TS Проверка шрифта</div>
      </div>
      <div class="border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2">
        <div class="font(montserrat light)">Montserrat light: VUE VITE TS Проверка шрифта</div>
        <div class="font-montserrat">Montserrat: VUE VITE TS Проверка шрифта</div>
        <div class="font-montserrat italic">Montserrat italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(montserrat bold) italic">Montserrat bold italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(montserrat bold)">Montserrat bold: VUE VITE TS Проверка шрифта</div>
      </div>
      <div class="border(2 solid tertiary) text(tertiary [25px] hover:(rose-200)) duration-300 cursor-pointer p-2">
        <div class="font(benzin light)">Benzin light: VUE VITE TS Проверка шрифта</div>
        <div class="font-benzin">Benzin: VUE VITE TS Проверка шрифта</div>
        <div class="font-benzin italic">Benzin italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(benzin bold) italic">Benzin bold italic: VUE VITE TS Проверка шрифта</div>
        <div class="font(benzin bold)">Benzin bold: VUE VITE TS Проверка шрифта</div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const dark = ref(localStorage.theme === 'dark');
const icon = computed(() => (dark.value ? 'wb_sunny' : 'mode_night'));

const scalePulse = ref<string>('');

const toggleTheme = () => {
  scalePulse.value = 'animate-scale-pulse';
  setTimeout(() => {
    scalePulse.value = '';
  }, 300);

  const value = !dark.value;

  dark.value = value;

  if (value) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}
</script>
