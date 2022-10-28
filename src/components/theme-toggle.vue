<template>
  <q-btn-dropdown stretch flat split :icon="icon" class="min" @click="next()">
    <q-list class="min">
      <q-item v-for="item in themeList" :key="item.className" v-close-popup clickable @click="mode = item.className">
        <q-item-section avatar>
          <q-avatar :icon="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
const mode = useColorMode({
  emitAuto: true,
  storageKey: 'theme',
  modes: {
    brand: 'brand',
  },
});

const themeList = [
  {
    className: EThemeScheme.AUTO,
    label: 'Auto',
    icon: 'brightness_4',
  },
  {
    className: EThemeScheme.LIGHT,
    label: 'Light',
    icon: 'wb_sunny',
  },
  {
    className: EThemeScheme.DARK,
    label: 'Dark',
    icon: 'mode_night',
  },
  {
    className: EThemeScheme.BRAND,
    label: 'Brand',
    icon: 'cruelty_free',
  },
];

const { next } = useCycleList(
  themeList.map((i) => i.className),
  { initialValue: mode },
);

const icon = computed(() => themeList.find((i) => i.className === mode.value)?.icon ?? 'auto_fix_hight');
</script>
