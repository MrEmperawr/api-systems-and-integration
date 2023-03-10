# Övningsuppgift 5

Det här repot är ganska tomt!

Det enda som finns är två olika kataloger (js och ts) med varsin index-fil. Följ instruktionerna nedan, i slutet ska ni ha ett projekt likt det i /assignment_4.

1. Återanvänd API-et från övning 4 men gör det i enlighet med `separation of concerns` i åtanke. Se avsnittet `Separation of Concerns` nedan.
2. Starta ett nytt projekt med hjälp av `npm init -y` när du står i `api-systems-and-integration/assignment_5`.
3. Installera alla beroenden (dependencies) såsom `express` och `nodemon`.
4. Bygg ett API som låter klienter spara och visa bilar och användare i en SQLITE-databas
    - En Bil har följande properties: Id (number), Make (text), Model (text)
    - En Användare har följande properties: Id (number), Name (text), Motto (text), plus övriga uppgifter som behövs för inlogg
5. Lägg till kod från presentationen i steg 1 så att användare kan skapa konton och logga in
6. Lägg till kod som gör att endast inloggade användare kan anropa TODO-APIet

Testa ditt API med hjälp av Postman!

## Separation of Concerns

Som vi gick igenom under lektion 5 så finns det många dåliga sätt att bygga på och ett gäng bra. Vi har redan haft det någorlunda i åtanke sedan start.

Än så länge är våra API-er ganska små och enkla att hantera men nu ska vi öva på att implementera god projektstruktur samtidigt som vi löser uppgiften där ovan.

Här finns repot som vi kikade på under lektion 5: https://github.com/geshan/expressjs-structure/blob/master/index.js
Ert repo behöver inte vara likadant men dela upp det i controllers, routes, och services allra minst. Om ni skapar många middlewares så bör ni ha en katalog (directory) för det.

Fundera och diskutera i din mobb (eller med andra) varför man bör göra så här eller liknande sätt.