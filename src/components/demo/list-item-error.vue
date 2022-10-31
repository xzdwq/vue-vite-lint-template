<template>
  <div class="rounded-lg border(2 solid negative) p-2 text-gray-500">
    <div class="flex items-center">
      <span class="pr-2">{{ t('render-fail') }}:</span>
      <pre class="text-rose-700">{{ info }}</pre>
    </div>
    <pre class="text-rose-700">{{ errorMsg }}</pre>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

defineProps<{
  info: string,
  errorMsg: Error,
}>();
</script>
