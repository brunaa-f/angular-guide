import { NewTaskData } from "./task/task.model";

class TasksService {
    private tasks = [
        { id: 't1', userId: 'u1', title: 'Master angular', summary: 'learn all the basic and advanced features of Angular & how to apply them.', dueDate: '2025-12-31' }
    ]

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id )
    }
}