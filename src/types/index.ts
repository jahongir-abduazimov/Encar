// Common types for the entire application
export interface BaseEntity {
  id: string;
  name: string;
}

export interface CarMedia {
  id: string;
  media: string;
}

export interface CarPricing {
  id: string;
  price: number;
  currency?: string;
}

export interface CarInspection {
  id: string;
  status: string;
  date?: string;
}

export interface CarInterior {
  id: string;
  type: string;
  description?: string;
}

export interface CarMultimedia {
  id: string;
  type: string;
  name: string;
}

export interface CarSafety {
  id: string;
  feature: string;
  description?: string;
}

export interface CarSeats {
  id: string;
  type: string;
  material?: string;
}

// Main Car type for detailed view
export interface CarDetail {
  id: string;
  name: string;
  body_type: BaseEntity;
  car_inspections: CarInspection[] | null;
  car_interyer: CarInterior[] | null;
  car_medias: CarMedia[];
  car_multimedia: CarMultimedia[] | null;
  car_pricing: CarPricing | null;
  car_safety: CarSafety[] | null;
  car_seats: CarSeats[] | null;
  color: BaseEntity;
  engine_capacity: number;
  fuel_type: BaseEntity;
  miliage: number;
  month: string;
  price: number;
  transmission: BaseEntity;
  updated_at: string;
  year: string;
}

// Car type for list/search view
export interface CarListItem {
  id: string;
  name: string;
  image: string;
  miliage: number;
  price: number;
  year: string;
  updated_at: string;
  comparison: boolean;
  like: boolean;
  color: BaseEntity;
  fuel_type: BaseEntity;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Filter types
export interface FilterForm {
  brand: string;
  model: string;
  generation: string;
  fuel_type: string;
  transmission: string;
  body_type: string;
  color: string;
  start_year: string;
  start_month: string;
  end_year: string;
  end_month: string;
  min_miliage: string;
  max_miliage: string;
  min_price: string;
  max_price: string;
}

export type FilterItem = BaseEntity;

export interface Brand extends FilterItem {
  models?: Model[];
}

export interface Model extends FilterItem {
  generations?: Generation[];
}

export type Generation = FilterItem;

export interface FilterData {
  brands: Brand[];
  fuelType: FilterItem[];
  transmission: FilterItem[];
  bodyType: FilterItem[];
  color: FilterItem[];
}

export interface SelectOption {
  label: string;
  value: string;
}

// Component prop types
export interface DetailProps {
  data: CarDetail | null;
}

export interface CarCardProps {
  data: CarListItem;
  viewMode?: "grid" | "list";
}

// Error types
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
  email?: string[];
  non_field_errors?: string[];
  detail?: string;
}

// HTTP Error Response type for axios/fetch errors
export interface HttpErrorResponse {
  response?: {
    status: number;
    data?: {
      errors?: Record<string, string[]>;
      message?: string;
      detail?: string;
    };
  };
  message?: string;
}

// Loading states
export type LoadingState = "idle" | "loading" | "success" | "error";
