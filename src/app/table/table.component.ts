import { Component, inject, input, Input, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PrizmTableModule,
  PrizmScrollbarModule,
  PrizmPanelComponent,
  PrizmButtonComponent,
  PrizmInputTextModule} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard,prizmIconsArrowRotateRight,prizmIconsSquarePlus,prizmIconsTrash } from '@prizm-ui/icons/full/source';
import { TableColumn, TableData } from './interfaces/tableInterfaces';



@Component({
  standalone: true,
  selector: 'app-table',
  imports: [CommonModule,
    FormsModule,
    PrizmTableModule,
    PrizmScrollbarModule,
    PrizmPanelComponent,
    PrizmButtonComponent,
    PrizmInputTextModule,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  public data = input<TableData[]>([]);
  public columns = input<TableColumn[]>([]);
  public filteredData = signal<TableData[]>([]); // Отфильтрованные данные (отображаются в таблице)
  public searchText: string = ''; // Переменная для хранения текста поиска
 
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry,);
 
  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsUserCard,
      prizmIconsArrowRotateRight,
      prizmIconsSquarePlus,
      prizmIconsTrash
    );
    effect(() => {
      this.filterData();
    });
  }

  filterData(): any {
    if (!this.searchText) {
       this.filteredData.set(this.data());
      return;
    }
    // Приводим текст поиска к нижнему регистру для регистронезависимого поиска
    const searchTextLower = this.searchText.toLowerCase();
    // Фильтруем данные
    this.filteredData.set(this.data().filter((row) => {
      // Проверяем каждое поле строки на совпадение
      return Object.values(row).some((value) => {
        // Если значение является датой, преобразуем его в строку
        if (typeof value === 'number' && value > 1000000000000) {
          value = this.formatDate(value);
        }
        // Приводим значение к строке и проверяем на совпадение
        return String(value).toLowerCase().includes(searchTextLower);
      });
    }));
  }

  formatDate(timestamp: number): string {
    if (!timestamp) return "Некорректная дата"; // Проверка на валидность
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0"); 
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const year = date.getFullYear(); 
    return `${day}.${month}.${year}`; // Формат DD.MM.YYYY
  }
}
