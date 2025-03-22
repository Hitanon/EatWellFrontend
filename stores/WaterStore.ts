import { makeAutoObservable, action } from "mobx";

class WaterStore {
  percentage = 0; // Процент выполнения нормы
  current = 0.0; // Текущее количество выпитой воды (литры)
  target = 2; // Целевое значение воды (литры)
  entries: { amount: number; time: string }[] = []; // Список добавленных порций воды

  constructor() {
    makeAutoObservable(this, {
      addWaterEntry: action, // Оборачиваем изменения в action
      setWaterData: action,
      removeWaterEntry: action,
      resetWater: action,
    });
  }

  /** Добавление записи о выпитой воде (через action) */
  addWaterEntry(amount: number) {
    const currentTime = new Date();
    const formattedTime = `${currentTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    this.entries.push({ amount, time: formattedTime });
    this.current += amount / 1000; // Перевод в литры
    this.percentage = Math.min((this.current / this.target) * 100, 100);
  }

  /** Установка данных воды (например, при загрузке с сервера) */
  setWaterData(data: {
    current: number;
    target: number;
    entries: { amount: number; time: string }[];
  }) {
    this.current = data.current;
    this.target = data.target;
    this.entries = data.entries;
    this.percentage = Math.min((this.current / this.target) * 100, 100);
  }

  /** Удаление записи по индексу */
  removeWaterEntry(index: number) {
    if (index >= 0 && index < this.entries.length) {
      const removedAmount = this.entries[index].amount / 1000;
      this.entries.splice(index, 1);
      this.current = Math.max(this.current - removedAmount, 0);
      this.percentage = Math.min((this.current / this.target) * 100, 100);
    }
  }

  /** Очистка всех записей воды (например, в начале нового дня) */
  resetWater() {
    this.current = 0;
    this.percentage = 0;
    this.entries = [];
  }
}

export default new WaterStore();
