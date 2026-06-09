export type OrderStatus = "pending" | "in_transit" | "delivered";

export interface Order {
  id: string;
  customerName: string;
  destination: string;
  carrier: string;
  status: OrderStatus;
  createdAt: string;
  estimatedDelivery: string;
}
