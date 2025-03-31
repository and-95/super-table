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

  export interface Driver {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    berthday: number;
    // другие поля водителя
  }
  
  export interface Autos {
    id: number;
    auto_number: string;
    auto_mark: string;
    auto_color: string;
    auto_release: number;
    auto_status: string;
    auto_bsmts: string;

    // другие поля автомобиля
  }
  
  export type TableType = Driver | Autos;