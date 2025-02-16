// Форматирование номера телефона
export const formatPhoneNumber = (value: string): string => {
    if (!value.startsWith("+")) {
        value = "+" + value;
    }

    const digits = value.slice(1).replace(/\D/g, "");

    let formatted = "+";
    if (digits.length > 0) {
        formatted += digits[0];
    }
    if (digits.length > 1) {
        formatted += ` ${digits.slice(1, 4)}`;
    }
    if (digits.length > 4) {
        formatted += `-${digits.slice(4, 7)}`;
    }
    if (digits.length > 7) {
        formatted += `-${digits.slice(7, 9)}`;
    }
    if (digits.length > 9) {
        formatted += `-${digits.slice(9, 11)}`;
    }

    return formatted;
};

// Очистка десятичных чисел (удаление лишних символов, замена "," на ".")
export const cleanDecimalInput = (value: string): string => {
    let cleaned = value.replace(/,/g, ".").replace(/[^0-9.]/g, "");

    const parts = cleaned.split(".");
    if (parts.length > 2) {
        cleaned = `${parts[0]}.${parts.slice(1).join("")}`;
    }

    return cleaned;
};

// Округление десятичных чисел при потере фокуса
export const finalizeDecimal = (value: string): string => {
    if (/^\d+$/.test(value)) {
        return `${value}.0`; // Добавляем `.0` к целым числам
    }
    if (/^\d+\.\d{2,}$/.test(value)) {
        return parseFloat(value).toFixed(1); // Округляем до десятых
    }
    return value;
};
