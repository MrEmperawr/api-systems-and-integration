# Övningsuppgift 5

1. Återanvänd API-et från övning 4 men gör det i enlighet med `separation of concerns` i åtanke. Se avsnittet `Separation of Concerns` nedan.
2. Bygg ett API som låter klienter spara och visa bilar och användare i en SQLITE-databas
    - En Bil har följande properties: Id (number), Make (text), Model (text)
    - En Användare har följande properties: Id (number), Name (text), Motto (text), plus
övriga uppgifter som behövs för inlogg
3. Lägg till kod från presentationen i steg 1 så att användare kan skapa konton och logga in
4. Lägg till kod som gör att endast inloggade användare kan anropa TODO-APIet

## Separation of Concerns

Som vi gick igenom under lektion 5 så finns det många dåliga sätt att bygga på och ett gäng bra. Vi har redan haft det någorlunda i åtanke sedan start.

Än så länge är våra API-er ganska små och enkla att hantera men nu ska vi öva på att implementera god projektstruktur samtidigt som vi löser uppgiften där ovan.

Här finns repot som vi kikade på under lektion 5: https://github.com/geshan/expressjs-structure/blob/master/index.js

Fundera och diskutera i din mobb (eller med andra) varför man bör göra så här eller liknande sätt.