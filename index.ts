import axios from 'axios'

interface Todo {
    finish: any
    id: number,
    title: string,
    completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
    const todo = response.data as Todo
    const {id, title, completed} = todo
    logTodo(id,title,completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The todo with id: ${id} has a title of: ${title} and is: ${completed}`)
}