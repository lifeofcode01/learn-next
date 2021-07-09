import axios from "axios";
import { configure, makeAutoObservable } from "mobx";
import { ITodoModel } from "../../../imodels/ITodoModel";
configure({
  enforceActions: "never",
});

class TodosStore {
  todosList: ITodoModel[] = [];
  todo: ITodoModel = this.resetTodoData();

  resetTodoData() {
    return {
      //   id: 0,
      id: Math.max(0, Math.max(...this.todosList.map(({ id }) => id))) + 1,
      text: "",
      done: false,
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    console.log(`myTodo ${this.todo.text}`);
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
  }

  deleteTodo = (id: number) => {
    // console.log(`todos : ${this.todosList}`);
    for (let i = 0; i < this.todosList.length; i++) {
      console.log(this.todosList[i].text);
    }
    console.log(`delete id : ${id}`);
    this.todosList = this.todosList.filter((todo) => todo.id !== id);
  };

  getTodosFromApi = async () => {
    try {
      const apiUrl =
        "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";
      let todosListFromApi = await axios.get(apiUrl);
      this.todosList = todosListFromApi.data;
      this.todo = this.resetTodoData();
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const todosStore = new TodosStore();
export default todosStore;
