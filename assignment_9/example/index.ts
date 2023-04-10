import { getTodo, getTodos } from "./apiClient"


async function main() {
    const todos = await getTodos()
    const todo = await getTodo(1)

    console.log(todos.data)
    console.log('------------------------------------------------')
    console.log('------------------------------------------------')
    console.log(todo.data)
}

main()