import { Component, Output, EventEmitter } from '@angular/core';

//Model
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if(this.text.length === 0) {
      alert("Por favor ingrese una tarea")
    }

    const {text, day, reminder} = this;
    const newTask = { text, day, reminder };

    this.onAddTask.emit(newTask);
    
  }

}
