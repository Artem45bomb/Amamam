import { CredentialUser } from "@/types/auth";

export type FieldErrors = {
  [key: string]: string;
};

/**
 * Валидация формы регистрации
 * @param formData Данные формы
 * @returns Объект с ошибками для каждого поля
 */
export const validateSignUpForm = (formData: CredentialUser): FieldErrors => {
  const errors: FieldErrors = {};

  if (!formData.username) {
    errors.username = "Имя пользователя обязательно";
  }

  if (!formData.password) {
    errors.password = "Пароль обязателен";
  } else if (formData.password.length < 6) {
    errors.password = "Пароль должен быть не менее 6 символов";
  }

  if (!formData.password2) {
    errors.password2 = "Подтверждение пароля обязательно";
  } else if (formData.password !== formData.password2) {
    errors.password2 = "Пароли не совпадают";
  }

  if (!formData.email) {
    errors.email = "Email обязателен";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Некорректный email";
  }

  return errors;
};

/**
 * Проверка наличия ошибок в объекте ошибок
 * @param errors Объект с ошибками
 * @returns true, если есть ошибки, иначе false
 */
export const hasErrors = (errors: FieldErrors): boolean => {
  return Object.keys(errors).length > 0;
};
