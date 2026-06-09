import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Order, OrderStatus } from "../types/order";

export const useOrderStore = defineStore("orders", () => {
  //State
  const orders = ref<Order[]>([]);
  const searchQuery = ref("");
  const statusFilter = ref<OrderStatus | "all">("all");

  //Actions
  function setOrders(data: Order[]) {
    orders.value = data;
  }

  //Getters
  const filteredOrders = computed(() => {
    return orders.value.filter((order) => {
      const matchesSearch =
        order.customerName
          .toLocaleLowerCase()
          .includes(searchQuery.value.toLocaleLowerCase()) ||
        order.id
          .toLocaleLowerCase()
          .includes(searchQuery.value.toLocaleLowerCase());

      const matchesStatus =
        statusFilter.value === "all" || order.status === statusFilter.value;

      return matchesSearch && matchesStatus;
    });
  });

  return {
    orders,
    searchQuery,
    statusFilter,
    filteredOrders,
    setOrders,
  };
});
