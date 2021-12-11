import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

export const TodoList = ({
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    title,
    as
}) => {
    return (
        <>
            <TodoTitle title={title} as={as} />
            <ul>
                {todoList.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodoListItemStatus={toggleTodoListItemStatus}
                        deleteTodoListItem={deleteTodoListItem}
                    />;
                })}
            </ul>
        </>
    );
};