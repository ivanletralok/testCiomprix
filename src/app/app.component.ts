import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from "primeng/api";
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  product: any;
  submitted: boolean = false;
  productDialog: boolean = false;

  tasks: any[] = [];
  selectedProducts: any[] = [];
  taskForm!: FormGroup;
  task: any ;



  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService, private fb: FormBuilder) {
    this.initForm();
  }
  ngOnInit(): void {

    // this.tasks.push(this.task);
  }


  initForm(): void {
    this.taskForm = this.fb.group({
      id: [null],
      description: [],
      perfil: [],
      status: []
    });
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
  }
  onSave(): void {
  const form = Object.assign({}, this.taskForm.value);
  form.id = Math.random();
  this.task = form;
    console.log('form', this.taskForm.value)
  console.log('task', this.task);
    this.tasks.push({...this.task, form});
  }
}
