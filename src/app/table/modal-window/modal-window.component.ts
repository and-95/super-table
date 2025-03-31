import { Component, effect,EventEmitter,input, Output } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PrizmInputTextModule, PrizmButtonComponent,PrizmDialogComponent, PrizmCheckboxComponent, } from '@prizm-ui/components';
import { HttpClient } from '@angular/common/http';
@Component({
  standalone: true,
  selector: 'app-modal-window',
  imports: [ ReactiveFormsModule,
    PrizmInputTextModule, PrizmButtonComponent,PrizmDialogComponent,
    PrizmButtonComponent,
    PrizmInputTextModule,
    PrizmButtonComponent,
    PrizmInputTextModule,
    PrizmCheckboxComponent,
   ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss'
})
export class ModalWindowComponent {
  public typeModal = input<'drivers' | 'autos'>('drivers');
  // @Output() submitData = new EventEmitter<Driver | Autos>();
  @Output() submitSuccess = new EventEmitter<void>();

  form: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
    });

    // Следим за изменением typeModal и обновляем форму
    effect(() => {
      this.typeModal(); // просто читаем значение, чтобы эффект реагировал на изменения
      this.updateForm();
    });
  }

  private updateForm(): void {
    if (this.typeModal() === 'drivers') {
      this.form = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        patronymic: ['', Validators.required],
        berthday: ['', Validators.required]
      });
    } else {
      this.form = this.fb.group({
        auto_number: ['', Validators.required],
        auto_mark: ['', Validators.required],
        auto_color: [''],
        auto_release: ['', Validators.required],
        auto_status: ['', Validators.required],
        auto_bsmts: [false, Validators.required]
      });
    }
    this.errorMessage = null;
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid || this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = null;

    try {
      const formValue = this.form.value;
      const url = this.typeModal() === 'drivers' ? '/api/drivers' : '/api/autos';
      
      const response = await this.http.post(url, {
        ...formValue,
        berthday: this.typeModal() === 'drivers' ? new Date(formValue.berthday).getTime() : undefined,
        auto_release: this.typeModal() === 'autos' ? new Date(formValue.auto_release).getTime() : undefined
      }).toPromise();

      // Если запрос успешен, эмитируем событие и форма закроется
      this.submitSuccess.emit();
    } catch (error) {
      this.errorMessage = 'Ошибка при сохранении данных. Пожалуйста, попробуйте еще раз.';
      console.error('Error submitting form:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
