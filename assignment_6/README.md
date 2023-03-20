# Övningsuppgift 6

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

Den här uppgiften går ut på att jobba med ett fristående tredjeparts-API där vi, genom vår egen klient, anropar JsonPlaceholder API för att utföra olika CRUD-operationer.

Ni ska huvudsakligen jämföra hur det är att jobba med fetch och axios som klient-apier.

Ni kan med fördel läsa lite om JsonPlaceholder [här](https://jsonplaceholder.typicode.com/) för att bekanta er med produkten ni ska integrera med.

Instruktioner:

1. Skriv ett Node JS-program som använder fetch för att göra följande anrop till [JsonPlaceholderAPI](https://jsonplaceholder.typicode.com/):
    - Hämta alla poster
    - Hämta alla användare
    - Hämta posten med ID 3
    - Hämta bilden med ID 59
    - Skapa en användare
    - Skapa en post
    - Uppdatera en post

2. Skriv ett Node JS-program som gör samma anrop som ovan med hjälp av Axios istället för fetch.

- Vad är de huvudsakliga skillnaderna mellan fetch och axios?
- Är det ena lättare än det andra?
- Vilka fördelar har axios och vilka fördelar har fetch?
