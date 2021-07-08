import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import todosStore, { ITodoModel } from "../store/todosStore";
import { observer } from "mobx-react-lite";

function TodoListItems() {
  return (
    <>
      {todosStore.todosList.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox position="static" />
          <Input
            position="static"
            mx={2}
            value={todo.text}
            onChange={(evt) => DOMRectReadOnly}
          />
          <Button
            position="static"
            onClick={() => todosStore.deleteTodo(todo.id)}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListObserver />
    </>
  );
}

export default TodoList;
