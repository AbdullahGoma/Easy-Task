import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  // @Output() completed = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompletedTask() {
    // this.completed.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
