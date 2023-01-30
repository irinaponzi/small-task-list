import { Component, Input, Output, EventEmitter } from '@angular/core';

// Font Awesome Icon
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Model
import { Task } from '../../model/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent {

  faTimes = faTimes;
 
  @Input() task: Task = {
    id: undefined,
    text: '',
    day: '',
    reminder: false
  };
  
  @Input() color: string = "";
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
