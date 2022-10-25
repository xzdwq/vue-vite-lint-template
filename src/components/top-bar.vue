<template>
  <div>
    <div class="flex items-center justify-end p-2 rounded-lg bg-accent">
      <q-btn color="tertiary" label="Scale Menu">
        <q-menu transition-show="scale" transition-hide="scale">
          <q-list class="min-w-[100px]">
            <q-item clickable @click="mode = 'auto'">
              <q-item-section>Auto</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="mode = 'light'">
              <q-item-section>Light</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="mode = 'dark'">
              <q-item-section>Dark</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="mode = 'brand'">
              <q-item-section>Brand</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode({
  emitAuto: true,
  storageKey: 'theme',
  modes: {
    brand: 'brand',
  },
});
</script>
