export interface TableColumn {
  id?: number;
  key: string;
  label: string;
  isDate?: boolean;
  required?: boolean; // Добавляем свойство для обязательных полей
}
  export interface TableData {
    [key: string]: any;
  }