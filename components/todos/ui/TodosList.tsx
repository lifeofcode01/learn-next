import * as React from "react";
import {
  Button,
  Input,
  Flex,
  Checkbox,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import todosStore from "../store/todosStore";
import { observer } from "mobx-react-lite";
import { ITodoModel } from "../../../imodels/ITodoModel";

function TodoListItems() {
  return (
    <>
      {todosStore.todosList.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox position="static" />
          <Input
            position="static"
            mx={2}
            value={`${todo.text}`}
            // onChange={(evt) => (todo.text = evt.target.value)}
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
      <HStack>
        <Heading>Todo List</Heading>
        <Spacer />
        <Button position="static" onClick={() => todosStore.getTodosFromApi()}>
          Load Todos From Api
        </Button>
      </HStack>
      <TodoListObserver />
    </>
  );
}

export default TodoList;
