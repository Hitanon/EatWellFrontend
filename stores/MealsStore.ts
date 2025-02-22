import { makeAutoObservable } from "mobx";

class MealsStore {
  meals: { id: string; name: string; weight: number; calories: number; image?: string }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMeals(meals: { id: string; name: string; weight: number; calories: number; image?: string }[]) {
    this.meals = meals;
  }

  addMeal(meal: { id: string; name: string; weight: number; calories: number; image?: string }) {
    this.meals.push(meal);
  }

  removeMeal(id: string) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
  }
}

export default new MealsStore();
