import { makeAutoObservable } from "mobx";

class UserStore {
  id?: string = "1";
  name?: string = "Имя пользователя";
  phone?: string = "+7 972-344-56-71";
  birthDate?: string = "2003-06-15";
  gender?: string = "мужской";
  height?: number = 180.0;
  currentWeight?: number = 60.0;
  targetWeight?: number = 80.0;
  lifestyle?: string = "Малоподвижный";
  calorieTarget?: number = 3000.0;
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(userData: {
    id: string;
    name: string;
    phone: string;
    birthDate: string;
    gender?: string;
    height?: number;
    currentWeight?: number;
    targetWeight?: number;
    lifestyle?: string;
    calorieTarget?: number;
  }) {
    this.id = userData.id;
    this.name = userData.name;
    this.phone = userData.phone;
    this.birthDate = userData.birthDate;
    this.gender = userData.gender;
    this.height = userData.height;
    this.currentWeight = userData.currentWeight;
    this.targetWeight = userData.targetWeight;
    this.lifestyle = userData.lifestyle;
    this.calorieTarget = userData.calorieTarget;
    this.isAuthenticated = true;
  }

  logout() {
    this.id = undefined;
    this.name = undefined;
    this.phone = undefined;
    this.birthDate = undefined;
    this.gender = undefined;
    this.height = undefined;
    this.currentWeight = undefined;
    this.targetWeight = undefined;
    this.lifestyle = undefined;
    this.calorieTarget = undefined;
    this.isAuthenticated = false;
  }
}

export default new UserStore();
