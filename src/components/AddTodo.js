import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTodo(props) {
    const [content, setContent] = useState("")
    const toast = useToast()

    const handleSubmit = e => {
        e.preventDefault()

        if (!content) {
            toast({
                title: "No content",
                status: "error",
                duration: 2000,
                isClosable: true,
            })
            return
        }

        const todo = {
            id: nanoid(),
            body: content
        }

        props.addTodo(todo)
        setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input variant="filled" placeholder="buy milk at the store" value={content} onChange={e => setContent(e.target.value)} />
                <Button colorScheme="pink" px="8" type="submit">
                    Add Todo
                </Button>
            </HStack>
        </form>
    );
}

export default AddTodo;
