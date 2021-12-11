export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
    const handleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
    return (
        <li>
            {todo.content}
            <button onClick={handleTodoListItemStatus} >{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
            <button onClick={handleDeleteTodoListItem}>削除</button>
        </li>
    );
};