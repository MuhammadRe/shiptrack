<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useOrderStore } from "../stores/orderStore";
import { mockOrders } from "../data/orders";
import OrderCard from "./OrderCard.vue";
import type { Order } from "../types/order.ts";

const store = useOrderStore();
const emit = defineEmits<{ orderSelected: [order: Order] }>();
const { isLoading, isError } = useQuery({
  queryKey: ["orders"],
  queryFn: async () => {
    //Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    store.setOrders(mockOrders);
    return mockOrders;
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <span v-if="isLoading" class="text-gray-500">Loading orders...</span>
    <span v-if="isError" class="text-red-500">Could not fetch orders</span>
    <template v-if="!isLoading && !isError">
      <OrderCard
        v-for="order in store.filteredOrders"
        :key="order.id"
        :order="order"
        @orderSelected="emit('orderSelected', order)"
      />
      <div
        v-if="store.filteredOrders.length === 0"
        class="text-center py-12 text-gray-400"
      >
        <p class="text-lg font-medium">No orders found</p>
        <p class="text-sm mt-1">Try adjusting your search or filter</p>
      </div>
    </template>
  </div>
</template>
