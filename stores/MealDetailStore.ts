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
  } = {
    id: "meal_001",
    name: "Салат Цезарь",
    weight: 300,
    calories: 450,
    protein: 30,
    fat: 20,
    carbs: 40,
    image: "", // Фото пока не заполняем
    ingredients: [
      {
        id: "product_101",
        name: "Куриная грудка",
        weight: 150,
        calories: 165,
      },
      {
        id: "product_102",
        name: "Листья салата",
        weight: 50,
        calories: 15,
      },
      {
        id: "product_103",
        name: "Сыр пармезан",
        weight: 30,
        calories: 120,
      },
    ],
  };

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
    this.meal = {
      id: "",
      name: "",
      weight: 0,
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
      image: "",
      ingredients: [],
    };
  }
}

export default new MealDetailStore();
