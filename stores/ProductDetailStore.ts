import { makeAutoObservable } from "mobx";

class ProductDetailStore {
  product: {
    id?: string;
    name?: string;
    weight?: number;
    calories?: number;
    protein?: number;
    fat?: number;
    carbs?: number;
    image?: string;
  } = {};

  constructor() {
    makeAutoObservable(this);
  }

  setProduct(product: {
    id: string;
    name: string;
    weight: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    image?: string;
  }) {
    this.product = product;
  }

  clearProduct() {
    this.product = {};
  }
}

export default new ProductDetailStore();
