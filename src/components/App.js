import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo"
import { TodoTitle } from "./TodoTitle"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODOリスト", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done
  });
  console.log("未完了TODOリスト", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done
  });
  console.log("完了TODOリスト", completedList);

  return (
    <>
      <TodoTitle title="TODO管理" as="h1" />
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
      />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
};

export default App;