import { makeAutoObservable } from "mobx";

class WebSocketStore {
  tasksCompleted: { taskId: string; title: string; reward: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTaskCompletion(task: { taskId: string; title: string; reward: number }) {
    this.tasksCompleted.push(task);
  }
}

export default new WebSocketStore();
