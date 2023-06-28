import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { ref } from 'vue';

import CounterService from '../services/counter.service';

const counterService = new CounterService();

export const useCounterStore = defineStore(
  'counter',
  (): {
    count: Ref<number>;
    fetchCount: () => Promise<number>;
    postCount: (number: number) => Promise<number>;
  } => {
    const count = ref<number>(0);

    const fetchCount = async (): Promise<number> => {
      const response = await counterService.getCount();
      count.value = response;
      return response;
    };

    const postCount = async (number: number): Promise<number> => {
      const response = await counterService.postCount(number);
      count.value = response;
      return response;
    };

    return {
      count,
      fetchCount,
      postCount,
    };
  }
);
