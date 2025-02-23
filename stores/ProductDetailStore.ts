import { makeAutoObservable } from "mobx";

class ProductDetailStore {
  product = {
    id: "1",
    name: "Куриная грудка",
    weight: 200, // г
    calories: 220, // ккал
    protein: 40, // г
    fat: 5, // г
    carbs: 0, // г
    image: "", // Оставляем пустым, но всегда строка
  };

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
    this.product = {
      ...product,
      image: product.image ?? "",
    };
  }

  clearProduct() {
    this.product = {
      id: "",
      name: "",
      weight: 0,
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      image: "",
    };
  }
}

export default new ProductDetailStore();
