const sqlite = require('sqlite3')
const db = new sqlite.Database('database.db')

const createQueries = [
    `
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
`,
    `
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        account_id INTEGER FOREGIN KEY,
        title TEXT,
        is_done TEXT
    )
`
]

// Loop over queries and run them to create both tables

createQueries.forEach((query) => {
    db.run(query)
})

module.exports.registerUser = (username, hashedPassword, callback) => {
    const query = `
        INSERT INTO accounts (username, hashedPassword)
        VALUES (?, ?)
    `
    /*
        Value index 0 and 1 correspons to the first and second values in VALUES (?, ?)
        Meaning that the first question mark is the username and the second one is the hashedPassword
    */
    const values = [
        username,
        hashedPassword
    ]

    // Now we run the query to save the user in the database

    db.run(query, values, callback)
}

/*
    Below we use the function syntax instead of arrow syntax to declare the database function
    As a rule we will be sticking to arrow syntax as it is more modern
*/

module.exports.getAccountByUsername = function (username, callback) {
    const query = `
        SELECT * FROM accounts WHERE username = ?
    `
    const values = [username]

    db.get(query, values, callback)
}

module.exports.addTodo = (title, isDone, accountId, callback) => {
    const query = `
        INSERT INTO todos (title, is_done, account_id)
        VALUES (?, ?, ?)
    `
    /*
        Value index 0 and 1 correspons to the first and second values in VALUES (?, ?)
        Meaning that the first question mark is the username and the second one is the hashedPassword
    */
    const values = [
        title,
        isDone,
        accountId
    ]

    // Now we run the query to save the user in the database

    db.run(query, values, callback)
}

module.exports.getTodoById = function (id, callback) {
    const query = `
        SELECT * FROM todos WHERE id = ?
    `
    const values = [id]

    db.get(query, values, callback)
}

module.exports.getTodos = function (callback) {
    const query = `
        SELECT * FROM todos
    `
    db.all(query, callback)
}

module.exports.getTodoByAccountId = function (todoId, accountId, callback) {
    const query = `
        SELECT * FROM todos WHERE id = ?
        JOIN accounts ON todos.account_id = accounts.id
        WHERE account_id = ?
    `
    const values = [todoId, accountId]

    db.get(query, values, callback)
}

module.exports.getTodosByAccountId = function (accountId, callback) {
    const query = `
        SELECT * FROM todos
        JOIN accounts ON todos.account_id = accounts.id
        WHERE account_id = ?
    `
    const values = [accountId]

    db.all(query, values, callback)
}