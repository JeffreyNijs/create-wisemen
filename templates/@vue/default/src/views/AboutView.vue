<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import { useCounterStore } from '@/stores/counter.store';

const counterStore = useCounterStore();

const isLoading = ref<boolean>(false);

const count = computed<number>(() => {
  return counterStore.count;
});

const onIncrementButtonClick = async (): Promise<void> => {
  isLoading.value = true;
  await counterStore.postCount(count.value + 1);
  isLoading.value = false;
};

const fetchCount = async (): Promise<void> => {
  isLoading.value = true;
  await counterStore.fetchCount();
  isLoading.value = false;
};

onMounted(fetchCount);
</script>

<template>
  <main>
    <h1>About</h1>
    <p>Count: {{ count }}</p>
    <button @click="onIncrementButtonClick">Increment</button>
    <p v-if="isLoading">Loading...</p>
  </main>
</template>
