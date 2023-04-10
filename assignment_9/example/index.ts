import { getTodo, getTodos } from "./apiClient"


async function main() {
    const todos = getTodos()
    const todo = getTodo(1)

    console.log(todos)
    console.log('------------------------------------------------')
    console.log(todo)
}

main()