import { makeAutoObservable } from "mobx";

class StatsStore {
  weightHistory: { date: string; weight: number }[] = [];
  caloriesHistory: { date: string; calories: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setWeightHistory(history: { date: string; weight: number }[]) {
    this.weightHistory = history;
  }

  setCaloriesHistory(history: { date: string; calories: number }[]) {
    this.caloriesHistory = history;
  }
}

export default new StatsStore();
