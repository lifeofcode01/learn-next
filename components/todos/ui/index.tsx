import { Box } from "@chakra-ui/react";
import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const TodosCompIndex = () => {
  return (
    <>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodosList />
        <AddTodo />
      </Box>
    </>
  );
};

export default TodosCompIndex;
