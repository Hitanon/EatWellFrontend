import { makeAutoObservable } from "mobx";

class MealDetailStore {
  meal: {
    id?: string;
    name?: string;
    weight?: number;
    calories?: number;
    protein?: number;
    fat?: number;
    carbs?: number;
    image?: string;
    ingredients?: { id: string; name: string; weight: number; calories: number }[];
  } = {};

  constructor() {
    makeAutoObservable(this);
  }

  setMeal(meal: {
    id: string;
    name: string;
    weight: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    image?: string;
    ingredients?: { id: string; name: string; weight: number; calories: number }[];
  }) {
    this.meal = meal;
  }

  clearMeal() {
    this.meal = {};
  }
}

export default new MealDetailStore();
