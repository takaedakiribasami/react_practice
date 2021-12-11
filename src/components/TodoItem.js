import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"


export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
    const handleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

    const label = todo.done ? "未完了リストへ" : "完了リストへ";
    const setColorSheme = todo.done ? "pink" : "blue";

    return (
        <ListItem
            borderWidth="1px"
            p="4"
            mt="4"
            bg="white"
            borderRadius="md"
            borderRadius="md"
            borderColor="gray.300"
        >
            <Text mb="6">{todo.content}</Text>
            <Flex align="center" justify="flex-end">
                <Button
                    colorScheme={setColorSheme}
                    variant="outline"
                    size="sm"
                    onClick={handleTodoListItemStatus}
                >
                    {label}
                </Button>
                <IconButton
                    icon={<DeleteIcon />}
                    variant="unstyled"
                    aria-label="delete"
                    onClick={handleDeleteTodoListItem}
                />
            </Flex>
        </ListItem>
    );
};