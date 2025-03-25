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

  setEmployees() {
    this.columns.set(employeesConf);
    this.data.set(employeesData);
  }

  setAutos() {
    this.columns.set(autoConf);
    this.data.set(autoData);
  }

  handleDataChanged(newData: TableData[]) {
    this.data.set(newData);
  }

  activeMenu: 'employees' | 'autos' = 'autos';



 
}

