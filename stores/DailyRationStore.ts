import { makeAutoObservable } from "mobx";

class DailyRationStore {
  dailyMeals: { id: string; name: string; weight: number; calories: number; image?: string }[] =
    [];

  constructor() {
    makeAutoObservable(this);
  }

  setDailyMeals(meals: { id: string; name: string; weight: number; calories: number; image?: string }[]) {
    this.dailyMeals = meals;
  }

  addMeal(meal: { id: string; name: string; weight: number; calories: number; image?: string }) {
    this.dailyMeals.push(meal);
  }

  removeMeal(id: string) {
    this.dailyMeals = this.dailyMeals.filter((meal) => meal.id !== id);
  }
}

export default new DailyRationStore();
