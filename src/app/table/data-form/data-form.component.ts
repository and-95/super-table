import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrizmInputTextModule, PrizmButtonComponent } from '@prizm-ui/components';
import { TableColumn } from '../interfaces/tableInterfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, PrizmInputTextModule, PrizmButtonComponent],
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {
  @Input() columns: TableColumn[] = [];
  @Output() submitForm = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  formData: any = {};

  // Специальные поля с опциями
  specialFields: { [key: string]: string[] } = {
    'auto_status': ['Эксплуатируется', 'В ремонте', 'Списано'],
    'auto_bsmts': ['Установлен', 'Отсутствует']
  };

  ngOnInit() {
    // Инициализируем пустые значения для всех полей
    this.columns.forEach(column => {
      if (column.key !== 'id') {
        this.formData[column.key] = '';
      }
    });
  }

  isDateField(key: string): boolean {
    return this.columns.find(c => c.key === key)?.isDate || false;
  }

  isSelectField(key: string): boolean {
    return !!this.specialFields[key];
  }

  getSelectOptions(key: string): string[] {
    return this.specialFields[key] || [];
  }

// Добавляем метод onSubmit()
onSubmit(): void {
  // Валидация данных перед отправкой
  if (this.isFormValid()) {
    this.submitForm.emit(this.prepareFormData());
  }
}

// Добавляем метод onCancel()
onCancel(): void {
  this.cancel.emit();
}

public prepareFormData(): any {
  const result = { ...this.formData };
  this.columns.forEach(column => {
    if (column.isDate && result[column.key]) {
      result[column.key] = new Date(result[column.key]).getTime();
    }
  });
  return result;
}

private isFormValid(): boolean {
  return this.columns.every(column => {
    // Если поле не обязательное, пропускаем проверку
    if (!column.required) return true;
    
    // Проверяем заполненность обязательных полей
    return !!this.formData[column.key];
  });
}
}