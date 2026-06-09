<script setup lang="ts">
import type { Order } from "../types/order";
import StatusBadge from "./StatusBadge.vue";

const props = defineProps<{ order: Order }>();
const emit = defineEmits<{ orderSelected: [order: Order] }>();
const onOrderSelected = (order: Order) => {
  emit("orderSelected", order);
};
</script>

<template>
  <div
    class="bg-white rounded-lg shadow p-4 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
    @click="onOrderSelected(props.order)"
    @keydown.enter="onOrderSelected(props.order)"
    tabindex="0"
    role="button"
    :aria-label="`View details for order ${order.id}, ${order.customerName}`"
  >
    <div class="flex justify-between items-center">
      <span class="font-bold text-gray-800">{{ order.id }}</span>
      <StatusBadge :status="order.status" />
    </div>
    <span class="text-gray-600">{{ order.customerName }}</span>
    <span class="text-gray-500 text-sm">{{ order.destination }}</span>
    <span class="text-gray-500 text-sm">Carrier: {{ order.carrier }}</span>
    <span class="text-gray-500 text-sm"
      >Est. delivery: {{ order.estimatedDelivery }}</span
    >
  </div>
</template>
