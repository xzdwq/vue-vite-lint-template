<template>
  <q-btn-dropdown stretch outline flat split class="min no-shadow" @click="toggleLocales()">
    <template #label>
      <div class="row items-center no-wrap px-1">
        <q-img :src="currentLangFlag" spinner-color="white" style="height: 15px; width: 20px" />
      </div>
    </template>
    <q-list class="min w-[150px]" bordered separator>
      <q-item
        v-for="item in localesList"
        :key="item.code"
        v-close-popup
        :active="state === item.code"
        active-class="bg-quaternary"
        clickable
        class="items-center"
        @click="toggleLocales(item)"
      >
        <q-img :src="item.img" spinner-color="white" style="height: 15px; max-width: 20px" />
        <q-item-section class="pl-2">
          {{ item.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script lang="ts">
import { ILocalesList } from '~/types/locales';
import availableLanguages from '~/lang/available-languages.yml';

export default {
  setup() {
    const { locale } = useI18n();
    const $q = useQuasar();

    const storageLocale = useStorage('locale', locale);
    const availableLocales = Object.entries(availableLanguages).map(([key]) => key);

    const getFlagPath = (langCode: string): string =>
      new URL(`../assets/img/flags/${langCode}.png`, import.meta.url).href;

    const localesList: ILocalesList[] = availableLocales.map((item: string) => {
      return {
        label: availableLanguages[item],
        code: item,
        img: getFlagPath(item),
      };
    });

    const { next, state } = useCycleList(availableLocales);
    state.value = storageLocale.value;

    const setLangQuasar = async(): Promise<void> => {
      try {
        const { default: qLangs } = await import(`../lang/quasar/${state.value}.mjs`);
        $q.lang.set(qLangs);
      } catch (err: unknown) {
        console.warn(`Quasar set language "${state.value}": `, err);
      }
    };

    onMounted(async() => {
      await setLanguage(state.value);
      await setLangQuasar();
    });

    const toggleLocales = async(item: ILocalesList | null = null): Promise<void> => {
      next();
      if (item) state.value = item.code;
      locale.value = state.value;
      await setLanguage(state.value);
      await setLangQuasar();
    };

    const currentLangFlag = computed<string>(
      () => localesList.find((i) => i.code === state.value)?.img ?? getFlagPath('unknown'),
    );

    return {
      localesList,
      state,
      toggleLocales,
      currentLangFlag,
    };
  },
};
</script>
