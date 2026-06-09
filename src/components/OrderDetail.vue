<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Order } from "../types/order.ts";
import StatusBadge from "./StatusBadge.vue";

defineProps<{ order: Order }>();
const emit = defineEmits<{ close: [] }>();

const closeButton = ref<HTMLButtonElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    closeButton.value?.focus();
  }, 50);
});
</script>
<template>
  <div class="fixed inset-0 z-40 flex justify-end">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/30" @click="emit('close')" />
    <!-- Panel -->
    <div
      class="relative z-50 w-full max-w-md bg-white shadow-xl p-6 flex flex-col gap-4 overflow-y-auto"
    >
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-800">Order Details</h2>
        <button
          ref="closeButton"
          class="text-gray-400 hover:text-gray-600 transition-colors"
          @click="emit('close')"
          aria-label="Close order details"
        >
          ✕
        </button>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <span class="font-bold text-lg">{{ order.id }}</span>
          <StatusBadge :status="order.status" />
        </div>
        <div class="border-t pt-3 flex flex-col gap-2">
          <p>
            <span class="text-gray-500">Customer:</span>
            {{ order.customerName }}
          </p>
          <p>
            <span class="text-gray-500">Destination:</span>
            {{ order.destination }}
          </p>
          <p><span class="text-gray-500">Carrier:</span> {{ order.carrier }}</p>
          <p>
            <span class="text-gray-500">Order date:</span> {{ order.createdAt }}
          </p>
          <p>
            <span class="text-gray-500">Est. delivery:</span>
            {{ order.estimatedDelivery }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
