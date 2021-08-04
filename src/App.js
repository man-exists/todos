import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { FaSun, FaMoon } from 'react-icons/fa'

function App() {

    const [todos, setTodos] = useState(
        () => JSON.parse(localStorage.getItem('todos')) || []
    )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <VStack p={4}>
            <IconButton
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound
                size="lg"
                alignSelf="flex-end"
                onClick={toggleColorMode} />
            <Heading
                mb='8'
                pb='4'
                fontWeight='extrabold'
                size='2xl'
                bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
                bgClip='text' >
                Todo Application
            </Heading>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <AddTodo addTodo={addTodo} />
        </VStack>
    )
}

export default App