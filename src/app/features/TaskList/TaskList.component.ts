import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';



interface Task {
  name: string;
  id: string;
}
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './TaskList.component.html',
  styleUrl: './TaskList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TaskListComponent {
  public taskForm!: FormGroup;
  private fb = inject(FormBuilder);

  public tasks: Task[] = [
    {
      name: 'Aprender Angular',
      id: 'idAlowey',
    },
  ];

  constructor() {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public saveTask() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        name: this.taskForm.get('name')?.value,
        id: uuidv4(), // Genera un id único para cada tarea
      };
      this.tasks = [newTask, ...this.tasks];
      this.openSnackBar('Se agregó la tarea', 'Cerrar');
      this.taskForm.reset();
    }
  }

  public deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.openSnackBar('Se eliminó la tarea', 'Cerrar');
  }

  public trackTask(index: number, task: Task) {
    return task.id;
  }

  private openSnackBar(message: string, action: string) {
    const snackbar = document.getElementById('snackbar');
    const messageElement = document.getElementById('snackbar-message');
    
    if (messageElement) {
      messageElement.innerText = message;
    }
  
    if (snackbar) {
      snackbar.classList.remove('hidden');
      
      setTimeout(() => {
        snackbar.classList.add('hidden');
      }, 3000);
    }
  }
}
