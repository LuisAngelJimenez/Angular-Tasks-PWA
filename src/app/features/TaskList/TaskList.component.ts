import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './TaskList.component.html',
  styleUrl: './TaskList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TaskListComponent { }
