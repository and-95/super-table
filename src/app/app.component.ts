import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { employeesConf, employeesData,autoConf,autoData } from './mocks';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [PrizmInputTextModule,ReactiveFormsModule,FormsModule,TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  columns = autoConf;
  data = autoData;
}

