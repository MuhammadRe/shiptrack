<script setup lang="ts">
import type { OrderStatus } from "../types/order";

const props = defineProps<{ status: OrderStatus }>();

const statusConfig = {
  pending: { label: "Pending", classes: "bg-yellow-100 text-yellow-800" },
  in_transit: { label: "In Transit", classes: "bg-blue-100 text-blue-800" },
  delivered: { label: "Delivered", classes: "bg-green-100 text-green-800" },
};
</script>

<template>
  <span
    :class="[
      'px-2 py-1 rounded-full text-xs font-medium',
      statusConfig[props.status].classes,
    ]"
  >
    {{ statusConfig[props.status].label }}
  </span>
</template>
