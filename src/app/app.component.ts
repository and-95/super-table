import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrizmDialogService, PrizmInputTextModule,PrizmListingItemComponent } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { employeesConf, employeesData,autoConf,autoData } from './mocks';
import { TableData } from './table/interfaces/tableInterfaces';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [PrizmInputTextModule,ReactiveFormsModule,FormsModule,TableComponent,PrizmListingItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  columns = signal(autoConf);
  data = signal(autoData);
  tableTitle = 'Автомобили';

  setEmployees() {
    this.columns.set(employeesConf);
    this.data.set(employeesData);
    this.activeMenu = 'employees';
    this.tableTitle = 'Водители';
  }

  setAutos() {
    this.columns.set(autoConf);
    this.data.set(autoData);
    this.activeMenu = 'autos';
    this.tableTitle = 'Автомобили';
  }

  activeMenu: 'employees' | 'autos' = 'autos';



 
}

