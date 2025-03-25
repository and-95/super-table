import { TableColumn, TableData } from "./table/interfaces/tableInterfaces";

export const employeesConf: TableColumn[] = [
  { key: 'id', label: 'Номер записи' },
    { key: 'name', label: 'Имя', required: true },
    { key: 'surname', label: 'Фамилия', required: true  },
    { key: 'patronymic', label: 'Отчество', required: true  },
    { key: 'berthday', label: 'Дата рождения', isDate: true , required: true },
  ];

  export const employeesData: TableData[] = [
    { id: 1, name: "Иван", surname: "Иванов", patronymic: "Иванович", berthday: 567648000000 },
    { id: 2, name: "Алексей", surname: "Петров", patronymic: "Алексеевич", berthday: 946684800000 },
    { id: 3, name: "Дмитрий", surname: "Сидоров", patronymic: "Дмитриевич", berthday: 631152000000 },
    { id: 4, name: "Сергей", surname: "Смирнов", patronymic: "Сергеевич", berthday: 662688000000 },
    { id: 5, name: "Андрей", surname: "Кузнецов", patronymic: "Андреевич", berthday: 788918400000 },
    { id: 6, name: "Михаил", surname: "Васильев", patronymic: "Михайлович", berthday: 536457600000 },
    { id: 7, name: "Николай", surname: "Попов", patronymic: "Николаевич", berthday: 883612800000 },
    { id: 8, name: "Павел", surname: "Алексеев", patronymic: "Павлович", berthday: 599616000000 },
    { id: 9, name: "Егор", surname: "Лебедев", patronymic: "Егорович", berthday: 725846400000 },
    { id: 10, name: "Артем", surname: "Соколов", patronymic: "Артемович", berthday: 694310400000 },
    { id: 11, name: "Иван", surname: "Иванов", patronymic: "Иванович", berthday: 820540800000 },
    { id: 12, name: "Алексей", surname: "Петров", patronymic: "Алексеевич", berthday: 536457600000 },
    { id: 13, name: "Дмитрий", surname: "Сидоров", patronymic: "Дмитриевич", berthday: 883612800000 },
    { id: 14, name: "Сергей", surname: "Смирнов", patronymic: "Сергеевич", berthday: 631152000000 },
    { id: 15, name: "Андрей", surname: "Кузнецов", patronymic: "Андреевич", berthday: 662688000000 },
    { id: 16, name: "Михаил", surname: "Васильев", patronymic: "Михайлович", berthday: 788918400000 },
    { id: 17, name: "Николай", surname: "Попов", patronymic: "Николаевич", berthday: 567648000000 },
    { id: 18, name: "Павел", surname: "Алексеев", patronymic: "Павлович", berthday: 946684800000 },
    { id: 19, name: "Егор", surname: "Лебедев", patronymic: "Егорович", berthday: 599616000000 },
    { id: 20, name: "Артем", surname: "Соколов", patronymic: "Артемович", berthday: 725846400000 },
    { id: 21, name: "Иван", surname: "Иванов", patronymic: "Иванович", berthday: 694310400000 },
    { id: 22, name: "Алексей", surname: "Петров", patronymic: "Алексеевич", berthday: 820540800000 },
    { id: 23, name: "Дмитрий", surname: "Сидоров", patronymic: "Дмитриевич", berthday: 536457600000 },
    { id: 24, name: "Сергей", surname: "Смирнов", patronymic: "Сергеевич", berthday: 883612800000 },
    { id: 25, name: "Андрей", surname: "Кузнецов", patronymic: "Андреевич", berthday: 631152000000 },
    { id: 26, name: "Михаил", surname: "Васильев", patronymic: "Михайлович", berthday: 662688000000 },
    { id: 27, name: "Николай", surname: "Попов", patronymic: "Николаевич", berthday: 788918400000 },
    { id: 28, name: "Павел", surname: "Алексеев", patronymic: "Павлович", berthday: 567648000000 },
    { id: 29, name: "Егор", surname: "Лебедев", patronymic: "Егорович", berthday: 946684800000 },
    { id: 30, name: "Артем", surname: "Соколов", patronymic: "Артемович", berthday: 599616000000 },
    { id: 31, name: "Иван", surname: "Иванов", patronymic: "Иванович", berthday: 725846400000 },
    { id: 32, name: "Алексей", surname: "Петров", patronymic: "Алексеевич", berthday: 694310400000 },
    { id: 33, name: "Дмитрий", surname: "Сидоров", patronymic: "Дмитриевич", berthday: 820540800000 },
    { id: 34, name: "Сергей", surname: "Смирнов", patronymic: "Сергеевич", berthday: 536457600000 },
    { id: 35, name: "Андрей", surname: "Кузнецов", patronymic: "Андреевич", berthday: 883612800000 },
    { id: 36, name: "Михаил", surname: "Васильев", patronymic: "Михайлович", berthday: 631152000000 },
    { id: 37, name: "Николай", surname: "Попов", patronymic: "Николаевич", berthday: 662688000000 },
    { id: 38, name: "Павел", surname: "Алексеев", patronymic: "Павлович", berthday: 788918400000 },
    { id: 39, name: "Егор", surname: "Лебедев", patronymic: "Егорович", berthday: 567648000000 },
    { id: 40, name: "Артем", surname: "Соколов", patronymic: "Артемович", berthday: 946684800000 },
    { id: 41, name: "Иван", surname: "Иванов", patronymic: "Иванович", berthday: 599616000000 },
    { id: 42, name: "Алексей", surname: "Петров", patronymic: "Алексеевич", berthday: 725846400000 },
    { id: 43, name: "Дмитрий", surname: "Сидоров", patronymic: "Дмитриевич", berthday: 694310400000 },
    { id: 44, name: "Сергей", surname: "Смирнов", patronymic: "Сергеевич", berthday: 820540800000 },
    { id: 45, name: "Андрей", surname: "Кузнецов", patronymic: "Андреевич", berthday: 536457600000 },
    { id: 46, name: "Михаил", surname: "Васильев", patronymic: "Михайлович", berthday: 883612800000 },
    { id: 47, name: "Николай", surname: "Попов", patronymic: "Николаевич", berthday: 631152000000 },
    { id: 48, name: "Павел", surname: "Алексеев", patronymic: "Павлович", berthday: 662688000000 },
    { id: 49, name: "Егор", surname: "Лебедев", patronymic: "Егорович", berthday: 788918400000 },
    { id: 50, name: "Артем", surname: "Соколов", patronymic: "Артемович", berthday: 567648000000 }
  ];








  export const autoConf: TableColumn[] = [
    { key: 'id', label: 'Номер записи' },
    { key: 'auto_number', label: 'Номер автомобиля', required: true  },
    { key: 'auto_mark', label: 'Марка автомобиля', required: true  },
    { key: 'auto_color', label: 'Цвет автомобиля' },
    { key: 'auto_release', label: 'Дата производства автомобиля', isDate: true, required: true  },
    { key: 'auto_status', label: 'Статус автомобиля', required: true  },
    { key: 'auto_bsmts', label: 'Наличие БСМТС', required: true  },
  ];


  export const autoData: TableData[] = [ 
  { id: 1, auto_number: "А123ВС77", auto_mark: "Toyota Camry", auto_color: "Черный", auto_release: 946684800000, auto_status: "Эксплуатируется", auto_bsmts: "Установлен" },
  { id: 2, auto_number: "О456ТК99", auto_mark: "Lada Vesta", auto_color: "Белый", auto_release: 946684800000, auto_status: "В ремонте", auto_bsmts: "Отсутствует" },
  { id: 3, auto_number: "Е789ХО77", auto_mark: "Kia Rio", auto_color: "Серый", auto_release: 946684800000, auto_status: "Эксплуатируется", auto_bsmts: "Установлен" },
  { id: 4, auto_number: "М321УК99", auto_mark: "Hyundai Solaris", auto_color: "Красный", auto_release: 946684800000, auto_status: "Эксплуатируется", auto_bsmts: "Отсутствует" },
  { id: 5, auto_number: "Р654АВ77", auto_mark: "Volkswagen Polo", auto_color: "Синий", auto_release: 946684800000, auto_status: "В ремонте", auto_bsmts: "Установлен" },
  
  ];
