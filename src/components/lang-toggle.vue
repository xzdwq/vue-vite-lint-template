<template>
  <q-btn-dropdown stretch flat split class="min" @click="next(), (locale = state)">
    <template #label>
      <div class="row items-center no-wrap">
        <q-img :src="currentLangFlag" spinner-color="white" style="height: 15px; width: 20px" />
      </div>
    </template>
    <q-list class="min">
      <q-item
        v-for="item in localesList"
        :key="item.code"
        v-close-popup
        :active="state === item.code"
        active-class="bg-quaternary"
        clickable
        @click="(locale = item.code), (state = item.code)"
      >
        <q-img :src="item.img" spinner-color="white" style="height: 15px; max-width: 20px" />
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { ILocalesList } from '~/types/locales';

const { availableLocales, locale, t } = useI18n();

const storageLocale = useStorage('locale', locale);

const getFlagPath = (langCode: string): string => new URL(`../assets/flags/${langCode}.png`, import.meta.url).href;

const localesList: ILocalesList[] = availableLocales.map((item: string) => {
  return {
    label: t(`langs.${item}`),
    code: item,
    img: getFlagPath(item),
  };
});

const { next, state } = useCycleList(availableLocales);
state.value = storageLocale.value;

const currentLangFlag = computed<string>(() => localesList.find((i) => i.code === state.value)?.img ?? '');
</script>
