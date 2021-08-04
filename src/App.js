import { VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons'
import Home from './pages/Home'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'

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
        <HashRouter>
            <VStack p={4}>
                <TopButtons />
                <Switch>
                    <Route exact path="/">
                        <Home deleteTodo={deleteTodo} setTodos={setTodos} addTodo={addTodo} todos={todos} />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </Switch>
            </VStack>
        </HashRouter>
    )
}

export default App