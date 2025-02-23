import { makeAutoObservable } from "mobx";

class DailyRationStore {
  dailyMeals: { id: string; name: string; weight: number; calories: number; image?: string }[] =
    [
      { id: "1", name: "Яблоко Голден", weight: 150, calories: 78 },
      { id: "2", name: "Куриная грудка", weight: 200, calories: 165 },
      { id: "3", name: "Овсянка с медом", weight: 100, calories: 350 },
    ];

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
