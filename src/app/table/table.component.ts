import { Component, inject, input, effect, signal, output, viewChild, TemplateRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';
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
import { Driver, TableColumn, TableData, Autos } from './interfaces/tableInterfaces';
import { take } from 'rxjs';
import { ModalWindowComponent } from './modal-window/modal-window.component';



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
    ModalWindowComponent
    ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableComponent {
  // Входные данные (только для чтения)
  public tableTitle = input<string>('lfyyst');
  public data = input<TableData[]>([]);
  public allData = signal<TableData[]>([]);
  public columns = input<TableColumn[]>([]);
  public filteredData = signal<TableData[]>([]); // Отфильтрованные данные (отображаются в таблице)
  public searchText: string = ''; // Переменная для хранения текста поиска
  public currentMode = signal<'drivers' | 'autos'>('autos');

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  // protected readonly modalDialog = viewChild<TemplateRef<any>>('modalDialog'); //modal! <----
  @ViewChild('modalDialog', { read: TemplateRef }) modalDialog!: TemplateRef<any>;

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
      this.allData.set(this.data())
      this.filterData();
    });
    effect(() => {
      this.tableTitle();
      console.log(this.tableTitle()) // просто читаем значение, чтобы эффект реагировал на изменения
if (this.tableTitle() == 'Водители')
{
  this.currentMode.set('drivers')
} else this.currentMode.set('autos')
    });
  
  }

  public show(): void {
    const dialogRef = this.dialogService.open(this.modalDialog, {
      closeable: true,
      header: this.currentMode() === 'drivers' ? 'Добавить водителя' : 'Добавить транспорт',
      width: 500,
      position: 'c',
      backdrop: true,
      size: 'm',
      data: { mode: this.currentMode() } // Передаем текущий режим
    });
  
    dialogRef.subscribe();
  }



  filterData(): any {
    if (!this.searchText) {
       this.filteredData.set(this.allData());
      return;
    }
    // Приводим текст поиска к нижнему регистру для регистронезависимого поиска
    const searchTextLower = this.searchText.toLowerCase();
    // Фильтруем данные
    this.filteredData.set(this.allData().filter((row) => {
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

