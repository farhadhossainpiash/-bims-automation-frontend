import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  form: FormGroup;
  dataList: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      id: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  submitForm() {
    const data = this.form.value;
    this.dataList.push(data);
    this.form.reset();
  }

  deleteItem(index: number) {
    this.dataList.splice(index, 1);
  }

  sendData() {
    this.dataService.sendData(this.dataList).subscribe(response => {
      alert('Data submitted successfully');
    });
  }
}
