import * as React from "react";
import { Button, Input, Grid, Flex } from "@chakra-ui/react";
import todosStore from "../store/todosStore";
import { observer } from "mobx-react-lite";

function AddTodo() {
  return (
    <Flex pt={2}>
      <Input
        mx={2}
        position="static"
        placeholder="New todo"
        value={todosStore.todo.text}
        onChange={(evt) => (todosStore.todo.text = evt.target.value)}
      />
      <Button
        position="static"
        onClick={() => {
          if (todosStore.todo.text === "") {
            return alert("Hey! your Todo can't be empty!!");
          }
          return todosStore.addTodo();
        }}
      >
        Add Todo
      </Button>
    </Flex>
  );
}

export default observer(AddTodo);
