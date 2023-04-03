# Övningsuppgift 7

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

Nu ska vi bygga ett helt eget API som server kunder och en klient som pratar med vårt API.

Ni ska skapa en klient och en server som kan prata med varandra. Detta repo är förhållandevis tomt så ni kommer behöva fylla det med bra kod som ni strukturer fint enligt våra principer kring ***Separation of Concerns***.

1. Titta igenom uppgiftens katalog och undersök projektstrukturen. Det är koden vi tittade på i lektion 8.
2. Lägg till funktionalitet för att spara produkter i samma API som i steg 1.
    - Produkter har följande properties:
        i. Id (number)
        ii. Name (text)
        iii. Price (number)
3. Lägg till alla CRUD-operationer i APIet för kunder
4. Skapa ett nytt klient-projekt som skapar en kund, hämtar alla kunder, och uppdaterar namnet på
den första kunden.

## Bonus round!

Implementera en databas (Sqlite3 eller liknande) så alla CRUD-operationer kopplas till den.
Ni ska alltså skapa en database service (titta i branchen `solutions` för uppgift 4) som hanterar
produkter. Ni behöver bara en tabell för detta, därmed kommer inga joins krävas för att klara uppgiften.