import { makeAutoObservable } from "mobx";

class MealsStore {
  meals: { id: string; name: string; weight: number; calories: number; image?: string }[] =
    [
      { id: "1", name: "Омлет с сыром", weight: 200, calories: 250 },
      { id: "2", name: "Курица с рисом", weight: 300, calories: 400 },
      { id: "3", name: "Салат Цезарь", weight: 250, calories: 330 },
    ];

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
