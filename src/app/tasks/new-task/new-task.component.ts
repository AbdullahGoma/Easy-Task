import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeAddTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCloseAddTask() {
    this.closeAddTask.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    });
  }
}
