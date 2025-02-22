import { makeAutoObservable } from "mobx";

class NutritionStore {
  calories = { current: 0, target: 2200 };
  protein = { current: 0, target: 100 };
  fat = { current: 0, target: 80 };
  carbs = { current: 0, target: 300 };
  water = { current: 0, target: 2000, percentage: 0 };

  constructor() {
    makeAutoObservable(this);
  }

  updateNutrition(data: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  }) {
    this.calories.current = data.calories;
    this.protein.current = data.protein;
    this.fat.current = data.fat;
    this.carbs.current = data.carbs;
  }

  updateWater(amount: number) {
    this.water.current += amount;
    this.water.percentage = Math.min((this.water.current / this.water.target) * 100, 100);
  }
}

export default new NutritionStore();
