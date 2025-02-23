import { makeAutoObservable } from "mobx";

class NutritionStore {
  calories = { current: 600, target: 2200 };
  protein = { current: 20, target: 97.5 };
  fat = { current: 32, target: 52 };
  carbs = { current: 100, target: 426.8 };

  constructor() {
    makeAutoObservable(this);
  }

  updateNutrition(data: { calories: number; protein: number; fat: number; carbs: number }) {
    this.calories.current = data.calories;
    this.protein.current = data.protein;
    this.fat.current = data.fat;
    this.carbs.current = data.carbs;
  }
}

export default new NutritionStore();
