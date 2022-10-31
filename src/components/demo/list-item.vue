<template>
  <div
    class="rounded-lg border(2 solid tertiary) text(tertiary [25px] hover:(lime-500 dark:rose-200)) duration-300 cursor-pointer p-2"
  >
    <div>{{ t('render-cmp') }}: {{ isRenderSuccessfully(name) }}</div>
    <div :class="`font(${fontName} light)`">{{ name }} light: {{ t('welcome') }}</div>
    <div :class="`font-${fontName}`">{{ name }}: {{ t('welcome') }}</div>
    <div :class="`font-${fontName} italic`">{{ name }} italic: {{ t('welcome') }}</div>
    <div :class="`font(${fontName} bold) italic`">{{ name }} bold italic: {{ t('welcome') }}</div>
    <div :class="`font(${fontName} bold)`">{{ name }} bold: {{ t('welcome') }}</div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

defineProps<{
  name: string,
  fontName: string,
}>();

const isRenderSuccessfully = (name: string): boolean => {
  if (name.length > 0) {
    return true;
  } else {
    throw Error('Property name is empty');
  }
};
</script>
