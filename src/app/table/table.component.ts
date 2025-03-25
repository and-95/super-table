import { Component, inject, input, effect, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PrizmTableModule,
  PrizmScrollbarModule,
  PrizmPanelComponent,
  PrizmButtonComponent,
  PrizmInputTextModule,
  PrizmDialogService} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard,prizmIconsArrowRotateRight,prizmIconsSquarePlus,prizmIconsTrash } from '@prizm-ui/icons/full/source';
import { TableColumn, TableData } from './interfaces/tableInterfaces';
import { DataFormComponent } from './data-form/data-form.component';





@Component({
  standalone: true,
  selector: 'app-table',
  imports: [CommonModule,
    FormsModule,
    PrizmTableModule,
    PrizmScrollbarModule,
    PrizmPanelComponent,
    PrizmButtonComponent,
    PrizmInputTextModule,
    DataFormComponent,
    ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  // Входные данные (только для чтения)
  public data = input<TableData[]>([]);
  public columns = input<TableColumn[]>([]);
  public allData: TableData[] = [];
  public allColumns: TableColumn[] = [];
  public filteredData = signal<TableData[]>([]); // Отфильтрованные данные (отображаются в таблице)
  public searchText: string = ''; // Переменная для хранения текста поиска
  // Выходные события
  public dataChanged = output<TableData[]>();

 
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  public singleSelectedItemCode: number | null = null;
  public selectedItemsCodes: number[] = [];
  public selectedMetaItemsCodes: number[] = [];
 
  constructor(private readonly dialogService: PrizmDialogService) {
    
    this.iconsFullRegistry.registerIcons(
      prizmIconsUserCard,
      prizmIconsArrowRotateRight,
      prizmIconsSquarePlus,
      prizmIconsTrash
    );
    effect(() => {
      // console.log('data-',this.allData);
      // console.log('data-',this.allColumns);
      this.filterData();
    });
  }

  openAddDialog() {
    console.log('111',this.data());
    const dialogRef = this.dialogService.open(DataFormComponent, {
      closeable: true,
      header: this.columns().some(c => c.key === 'name') ? 'Добавить водителя' : 'Добавить автомобиль',
      width: '500px',
      data: {
        columns: this.columns().filter(c => c.key !== 'id')
      }
      
    });
    dialogRef.subscribe(result => {
      if (result) {
        console.log('222',this.data());
        const currentData = this.data();
        const newId = currentData.length > 0 
          ? Math.max(...currentData.map(item => item.id as number)) + 1 
          : 1;
        
        // Создаем новый массив данных
        const newData = [...currentData, { id: newId, ...result }];
        
        // 1. Уведомляем родительский компонент об изменении данных
        this.dataChanged.emit(newData);
        
        // 2. Обновляем отфильтрованные данные
        this.filteredData.set([...this.filteredData(), { id: newId, ...result }]);
      }
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

