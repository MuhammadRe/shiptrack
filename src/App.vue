<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "./stores/orderStore";
import OrderList from "./components/OrderList.vue";
import OrderDetail from "./components/OrderDetail.vue";
import type { Order } from "./types/order.ts";

const store = useOrderStore();
const { searchQuery, statusFilter } = storeToRefs(store);
const selectedOrder = ref<Order | null>(null);
const onOrderSelected = (order: Order) => {
  selectedOrder.value = order;
};
const onClose = () => {
  selectedOrder.value = null;
};
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") onClose();
};
onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">ShipTrack</h1>
    <div class="flex gap-4 mb-6">
      <input
        v-model="searchQuery"
        placeholder="Search by order ID or customer name"
        class="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div class="relative">
        <select
          v-model="statusFilter"
          class="px-4 py-2 pr-8 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white appearance-none cursor-pointer"
        >
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="in_transit">In Transit</option>
          <option value="delivered">Delivered</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-2 flex items-center"
        >
          <svg
            class="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
    <OrderList @orderSelected="onOrderSelected" />
    <OrderDetail v-if="selectedOrder" :order="selectedOrder" @close="onClose" />
  </div>
</template>
