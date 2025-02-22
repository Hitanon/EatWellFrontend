import { makeAutoObservable } from "mobx";

class ProductsStore {
  products: { id: string; name: string; weight: number; calories: number; image?: string }[] = [];

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
