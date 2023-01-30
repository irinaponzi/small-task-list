import { Component, OnInit } from '@angular/core';

// Model
import { Task } from '../../model/Task';

// Service
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = [];

  constructor (private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => {
      this.tasks = tasks
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task)
      .subscribe((task) => {
      this.tasks.push(task)        
    });
  }
  
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task)   
      .subscribe(() => {
        const taskIndex = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[taskIndex] = task;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
      this.tasks = this.tasks.filter(t =>
      t.id !== task.id
    )});
  }

}
