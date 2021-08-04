import React from 'react'
import ta from 'time-ago'
import { FaTrash } from 'react-icons/fa'
import { HStack, Text, VStack, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'

function TodoList(props) {

    return !props.todos.length ? (
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg" fontSize="medium">
            No Todos!
        </Badge>
    ) : (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems="stretch" >
            {props.todos.map(todo => (
                <HStack key={todo.id}>
                        <Text fontSize='2xl'>{todo.body}</Text>
                        <Text fontSize='sm'>{ta.ago(todo.timestamp)}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound onClick={() => props.deleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>
    )

}

export default TodoList
