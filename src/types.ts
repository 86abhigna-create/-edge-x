export interface VariantStock {
  color: string;
  size: string;
  stock: number;
}

export interface ProductImage {
  id: string;
  product_id: string;
  productId?: string;
  url: string;
  alt_text?: string;
  altText?: string;
  is_primary: boolean;
  isPrimary?: boolean;
  sort_order: number;
  sortOrder?: number;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  productId?: string;
  color: string;
  size: string;
  stock: number;
  sku?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  imageUrl?: string;
  sort_order: number;
  sortOrder?: number;
  is_active: boolean;
  isActive?: boolean;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  badge?: 'New' | 'Limited' | 'Sold Out' | 'Sale';
  price: number;
  discount_percent: number;
  discountPercent?: number;
  category_id?: string;
  categoryId?: string;
  category?: Category;
  description?: string;
  materials: string[];
  colorway: string;
  colors: string[];
  sizes: string[];
  in_stock: boolean;
  inStock?: boolean;
  stock_count: number;
  stockCount?: number;
  published: boolean;
  featured: boolean;
  meta_title?: string;
  metaTitle?: string;
  meta_description?: string;
  metaDescription?: string;
  images?: ProductImage[];
  variants?: ProductVariant[];
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
  // Legacy/computed properties
  image?: string;
  image?: string;
  altText?: string;
  discountPercent?: number;
  stockCount?: number;
  inStock?: boolean;
}

export interface CartItem {
  id: string;
  user_id: string;
  userId?: string;
  product_id: string;
  productId?: string;
  variant_id?: string;
  variantId?: string;
  quantity: number;
  selected_size: string;
  selectedSize?: string;
  selected_color?: string;
  selectedColor?: string;
  product?: Product;
  cartItemId?: string;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface WishlistItem {
  id: string;
  user_id: string;
  userId?: string;
  product_id: string;
  productId?: string;
  product?: Product;
  created_at: string;
  createdAt?: string;
}

export interface NotificationItem {
  id: string;
  user_id: string;
  userId?: string;
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  read_at?: string;
  readAt?: string;
  created_at: string;
  createdAt?: string;
}

export interface Review {
  id: string;
  product_id: string;
  productId?: string;
  user_id: string;
  userId?: string;
  order_id?: string;
  orderId?: string;
  rating: number;
  title?: string;
  comment?: string;
  status: 'Published' | 'Pending' | 'Flagged' | 'Rejected';
  is_verified_purchase: boolean;
  isVerifiedPurchase?: boolean;
  helpful_count: number;
  helpfulCount?: number;
  user?: { id: string; full_name?: string; avatar_url?: string };
  productName?: string;
  userName?: string;
  date?: string;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface OrderItemSnapshot {
  id: string;
  order_id: string;
  orderId?: string;
  product_id: string;
  productId?: string;
  variant_id?: string;
  variantId?: string;
  product_name: string;
  productName?: string;
  product_image?: string;
  productImage?: string;
  price: number;
  quantity: number;
  selected_size: string;
  selectedSize?: string;
  selected_color?: string;
  selectedColor?: string;
  total: number;
}

export type OrderStatus =
  | 'Order Placed'
  | 'Payment Confirmed'
  | 'Order Confirmed'
  | 'Processing'
  | 'Packed'
  | 'Shipped'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Payment Failed'
  | 'Cancelled'
  | 'Return Requested'
  | 'Returned'
  | 'Refund Initiated'
  | 'Refunded';

export interface Order {
  id: string;
  order_number: string;
  orderNumber?: string;
  user_id: string;
  userId?: string;
  status: OrderStatus;
  subtotal: number;
  tax_amount: number;
  taxAmount?: number;
  shipping_amount: number;
  shippingAmount?: number;
  discount_amount: number;
  discountAmount?: number;
  total: number;
  currency: string;
  payment_method?: string;
  paymentMethod?: string;
  payment_intent_id?: string;
  paymentIntentId?: string;
  shipping_address: {
    full_name: string;
    fullName?: string;
    phone?: string;
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  shippingAddress?: {
    fullName: string;
    phone?: string;
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billing_address?: {
    full_name: string;
    fullName?: string;
    phone?: string;
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  billingAddress?: {
    fullName: string;
    phone?: string;
    street: string;
    apartment?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  notes?: string;
  tracking_number?: string;
  trackingNumber?: string;
  carrier?: string;
  expected_delivery_date?: string;
  expectedDeliveryDate?: string;
  delivered_at?: string;
  deliveredAt?: string;
  cancelled_at?: string;
  cancelledAt?: string;
  cancel_reason?: string;
  cancelReason?: string;
  returnRequested?: boolean;
  returnReason?: string;
  refundStatus?: string;
  items?: OrderItemSnapshot[];
  itemSnapshots?: OrderItemSnapshot[];
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
  date?: string;
}

export interface Address {
  id: string;
  user_id: string;
  userId?: string;
  type: 'shipping' | 'billing';
  full_name: string;
  fullName?: string;
  phone?: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  is_default: boolean;
  isDefault?: boolean;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface Coupon {
  id: string;
  code: string;
  description?: string;
  discount_type: 'percentage' | 'fixed';
  discountType?: 'percentage' | 'fixed';
  discount_value: number;
  discountValue?: number;
  min_order_amount: number;
  minOrderAmount?: number;
  max_discount_amount?: number;
  maxDiscountAmount?: number;
  usage_limit?: number;
  usageLimit?: number;
  usage_count: number;
  usageCount?: number;
  per_user_limit: number;
  perUserLimit?: number;
  valid_from: string;
  validFrom?: string;
  valid_until?: string;
  validUntil?: string;
  is_active: boolean;
  isActive?: boolean;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  fullName?: string;
  role: 'customer' | 'owner' | 'admin';
  phone?: string;
  avatar_url?: string;
  avatarUrl?: string;
  created_at: string;
  createdAt?: string;
  updated_at: string;
  updatedAt?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ProductListParams extends PaginationParams {
  category?: string;
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  featured?: boolean;
  published?: boolean;
}

export interface OrderListParams extends PaginationParams {
  status?: OrderStatus;
}

export interface ReviewListParams extends PaginationParams {
  product_id: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ReviewSummary {
  average: number;
  total: number;
  distribution: Record<number, number>;
}

export interface ReviewListResponse extends PaginatedResponse<Review> {
  summary: ReviewSummary;
}

export type ActiveTab = 'shop' | 'orders' | 'cart' | 'profile' | 'owner-dashboard' | 'customer-dashboard';

export interface ApiError {
  error: string;
}