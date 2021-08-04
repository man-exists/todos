import React, { useEffect, useState } from 'react'
import ta from 'time-ago'
import { FaTrash } from 'react-icons/fa'
import { HStack, Text, VStack, IconButton, StackDivider, Spacer, Badge, Stack, Input } from '@chakra-ui/react'

function TodoList(props) {

    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("")

    const filteredTodos = () => {
        return !filter ? todos
        : todos.filter(todo => todo.body.toLowerCase().includes(filter.toLowerCase()))
    }

    useEffect(() => {
        setTodos(props.todos)
    }, [props.todos])

    return !filteredTodos().length ? (
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg" fontSize="medium">
            No Todos!
        </Badge>
    ) : (
        <React.Fragment>
            <HStack pb='4'>
                <Input
                    variant="filled"
                    placeholder="Filter Todos"
                    onChange={e => setFilter(e.target.value)} />
            </HStack>
            <VStack
                divider={<StackDivider />}
                borderColor="gray.100"
                borderWidth="2px"
                p="4"
                borderRadius="lg"
                w="100%"
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems="stretch" >
                {filteredTodos().map(todo => (
                    <HStack key={todo.id}>
                        <Stack direction='column'>
                            <Text fontSize='2xl'>
                                {todo.body}
                            </Text>
                            <Text fontSize='sm'>
                                {ta.ago(todo.timestamp)}
                            </Text>
                        </Stack>
                        <Spacer />
                        <IconButton icon={<FaTrash />} isRound onClick={() => props.deleteTodo(todo.id)} />
                    </HStack>
                ))}
            </VStack>
        </React.Fragment>
    )

}

export default TodoList