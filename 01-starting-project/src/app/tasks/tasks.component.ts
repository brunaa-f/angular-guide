import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
 @Input({required: true}) userId!: string;
 @Input({required: true}) name!: string;
isAddingTask = false;

 tasks = [
  {id: 't1', userId: 'u1', title: 'Master angular', summary: 'learn all the basic and advanced features of Angular & how to apply them.', dueDate: '2025-12-31' }]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id )
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}
