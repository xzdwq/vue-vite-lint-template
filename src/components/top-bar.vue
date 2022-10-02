<template>
  <div>
    <div class="flex items-center justify-end p-2 rounded-lg bg-accent">
      <button class="bg-accent text(tertiary hover:(quaternary))" @click="toggleTheme">
        <i :data-icon="icon" :class="scalePulse" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>
