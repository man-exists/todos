import { VStack, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { FaSun, FaMoon } from 'react-icons/fa'
import TopIcon from './components/TopIcon'
import StyledHeader from './components/StyledHeader'
import TopButtons from './components/TopButtons'

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

    return (
        <VStack p={4}>
            <TopButtons />
            <StyledHeader>Todo Application</StyledHeader>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <AddTodo addTodo={addTodo} />
        </VStack>
    )
}

export default App