import { makeAutoObservable } from "mobx";

class ProductsStore {
  products: { id: string; name: string; weight: number; calories: number; image?: string }[] =
    [
      { id: "4", name: "Яблоко", weight: 150, calories: 80 },
      { id: "5", name: "Орехи грецкие", weight: 50, calories: 300 },
      { id: "6", name: "Молоко 1%", weight: 250, calories: 110 },
    ];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products: { id: string; name: string; weight: number; calories: number; image?: string }[]) {
    this.products = products;
  }

  addProduct(product: { id: string; name: string; weight: number; calories: number; image?: string }) {
    this.products.push(product);
  }

  removeProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

export default new ProductsStore();
