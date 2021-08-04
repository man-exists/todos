import React from 'react'
import AddTodo from '../components/AddTodo'
import StyledHeader from '../components/StyledHeader'
import TodoList from '../components/TodoList'

function Home({ todos, deleteTodo, addTodo, setTodos }) {
    return (
        <React.Fragment>
            <StyledHeader>Todo Application</StyledHeader>
            <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
            <AddTodo addTodo={addTodo} />
        </React.Fragment>
    )
}

export default Home
