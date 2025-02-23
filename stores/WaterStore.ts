import { makeAutoObservable } from "mobx";

class WaterStore {
    percentage = 35; // Процент выполнения нормы
    current = 0.7; // Текущее количество выпитой воды в мл
    target = 2; // Целевое значение воды (л)
    entries: { amount: number; time: string }[] = []; // Список добавленных порций воды

    constructor() {
        makeAutoObservable(this);
    }

    // Установка данных (например, при загрузке с сервера)
    setWaterData(data: { current: number; target: number; entries: { amount: number; time: string }[] }) {
        this.current = data.current;
        this.target = data.target;
        this.entries = data.entries;
        this.percentage = Math.min((this.current / this.target) * 100, 100);
    }

    // Очистка всех записей воды (например, в начале нового дня)
    resetWater() {
        this.current = 0;
        this.percentage = 0;
        this.entries = [];
    }
}

export default new WaterStore();
