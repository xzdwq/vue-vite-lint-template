<template>
  <q-btn-dropdown stretch outline flat split :icon="icon" class="min no-shadow" @click="next()">
    <q-list class="min w-[200px]" bordered separator>
      <q-item
        v-for="item in themeList"
        :key="item.className"
        v-close-popup
        :active="mode === item.className"
        active-class="bg-quaternary"
        clickable
        @click="mode = item.className"
      >
        <q-item-section avatar>
          <q-avatar :icon="item.icon" />
        </q-item-section>
        <q-item-section>{{ t(item.label) }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { IThemeList } from '~/types/theme';

export default {
  setup() {
    const { t } = useI18n();
    const mode = useColorMode<string>({
      emitAuto: true,
      storageKey: 'theme',
      modes: {
        brand: 'brand',
      },
    });

    const themeList: IThemeList[] = [
      {
        className: EThemeScheme.AUTO,
        label: 'theme.auto',
        icon: 'brightness_4',
      },
      {
        className: EThemeScheme.LIGHT,
        label: 'theme.light',
        icon: 'wb_sunny',
      },
      {
        className: EThemeScheme.DARK,
        label: 'theme.dark',
        icon: 'mode_night',
      },
      {
        className: EThemeScheme.BRAND,
        label: 'theme.brand',
        icon: 'cruelty_free',
      },
    ];

    const { next } = useCycleList(
      themeList.map((i: IThemeList) => i.className),
      { initialValue: mode },
    );

    const icon = computed<string>(() => themeList.find((i) => i.className === mode.value)?.icon ?? 'auto_fix_hight');

    return {
      mode,
      themeList,
      next,
      icon,
      t,
    };
  },
};
</script>
