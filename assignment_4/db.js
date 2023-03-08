const sqlite = require('sqlite3')
const db = new sqlite.Database('database.db')

db.run(`
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
`)

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