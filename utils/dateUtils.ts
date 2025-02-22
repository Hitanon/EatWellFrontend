import dayjs from "dayjs";

/**
 * Функция для вычисления возраста по дате рождения
 * @param birthDate Дата рождения в формате YYYY-MM-DD
 * @returns Возраст (число лет)
 */
export const calculateAge = (birthDate: string): number => {
  return dayjs().diff(dayjs(birthDate), "year");
};
