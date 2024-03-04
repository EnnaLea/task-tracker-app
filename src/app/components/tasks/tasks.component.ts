import { Component, inject } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TasksComponent, CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    if (task && task.id) {
      this.taskService
        .deleteTask(task.id)
        .subscribe(
          () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        );
    }
  }

  toggleReminder(task: Task) {
      task.reminder = !task.reminder;
      this.taskService.updatedTaskReminder(task).subscribe(); 
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
    
  


}
