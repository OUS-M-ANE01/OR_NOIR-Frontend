export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  img: string;
  badge?: string | null;
  desc: string;
  soldOut?: boolean;
}
